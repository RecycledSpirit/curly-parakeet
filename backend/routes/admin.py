from fastapi import APIRouter, HTTPException, Depends, status
from typing import List, Optional
from datetime import datetime, timedelta
import logging

from models.user import User, UserRole
from models.crm import Contact, ContactResponse, ContactUpdate, CRMStats
from models.analytics import DashboardStats
from services.database import db_service
from routes.users import get_admin_user

router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/dashboard", response_model=DashboardStats)
async def get_dashboard_stats(admin_user: User = Depends(get_admin_user)):
    """Get admin dashboard statistics."""
    try:
        # Get collections
        users_collection = await db_service.get_collection("users")
        contacts_collection = await db_service.get_collection("contacts")
        alternatives_collection = await db_service.get_collection("alternatives")
        recipes_collection = await db_service.get_collection("recipes")
        reviews_collection = await db_service.get_collection("reviews")
        analytics_collection = await db_service.get_collection("analytics")
        
        # Calculate date ranges
        today = datetime.utcnow().replace(hour=0, minute=0, second=0, microsecond=0)
        week_ago = today - timedelta(days=7)
        month_ago = today - timedelta(days=30)
        
        # User stats
        total_users = await users_collection.count_documents({})
        active_users_today = await analytics_collection.count_documents({
            "event_type": "user_login",
            "timestamp": {"$gte": today}
        })
        active_users_week = await analytics_collection.count_documents({
            "event_type": "user_login",
            "timestamp": {"$gte": week_ago}
        })
        active_users_month = await analytics_collection.count_documents({
            "event_type": "user_login",
            "timestamp": {"$gte": month_ago}
        })
        
        # Search stats
        total_searches = await analytics_collection.count_documents({"event_type": "search"})
        searches_today = await analytics_collection.count_documents({
            "event_type": "search",
            "timestamp": {"$gte": today}
        })
        
        # Content stats
        total_alternatives = await alternatives_collection.count_documents({})
        total_recipes = await recipes_collection.count_documents({})
        total_reviews = await reviews_collection.count_documents({})
        pending_reviews = await reviews_collection.count_documents({"status": "pending"})
        
        # Popular searches
        popular_searches = await analytics_collection.aggregate([
            {"$match": {"event_type": "search"}},
            {"$group": {"_id": "$event_data.meat_type", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}},
            {"$limit": 10}
        ]).to_list(length=None)
        
        # User growth (last 7 days)
        user_growth = []
        for i in range(7):
            date = today - timedelta(days=i)
            next_date = date + timedelta(days=1)
            count = await users_collection.count_documents({
                "created_at": {"$gte": date, "$lt": next_date}
            })
            user_growth.append({
                "date": date.strftime("%Y-%m-%d"),
                "users": count
            })
        
        # Search trends (last 7 days)
        search_trends = []
        for i in range(7):
            date = today - timedelta(days=i)
            next_date = date + timedelta(days=1)
            count = await analytics_collection.count_documents({
                "event_type": "search",
                "timestamp": {"$gte": date, "$lt": next_date}
            })
            search_trends.append({
                "date": date.strftime("%Y-%m-%d"),
                "searches": count
            })
        
        return DashboardStats(
            total_users=total_users,
            active_users_today=active_users_today,
            active_users_week=active_users_week,
            active_users_month=active_users_month,
            total_searches=total_searches,
            searches_today=searches_today,
            total_alternatives=total_alternatives,
            total_recipes=total_recipes,
            total_reviews=total_reviews,
            pending_reviews=pending_reviews,
            popular_searches=popular_searches,
            user_growth=user_growth,
            search_trends=search_trends
        )
        
    except Exception as e:
        logger.error(f"Dashboard stats error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to get dashboard statistics"
        )

@router.get("/contacts", response_model=List[ContactResponse])
async def get_contacts(
    skip: int = 0,
    limit: int = 100,
    admin_user: User = Depends(get_admin_user)
):
    """Get all contacts."""
    try:
        contacts_collection = await db_service.get_collection("contacts")
        
        contacts = await contacts_collection.find().skip(skip).limit(limit).sort("created_at", -1).to_list(length=None)
        
        return [ContactResponse(**contact) for contact in contacts]
        
    except Exception as e:
        logger.error(f"Get contacts error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to get contacts"
        )

@router.get("/contacts/{contact_id}", response_model=ContactResponse)
async def get_contact(
    contact_id: str,
    admin_user: User = Depends(get_admin_user)
):
    """Get specific contact."""
    try:
        contacts_collection = await db_service.get_collection("contacts")
        
        contact = await contacts_collection.find_one({"id": contact_id})
        if not contact:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Contact not found"
            )
        
        return ContactResponse(**contact)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Get contact error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to get contact"
        )

@router.put("/contacts/{contact_id}", response_model=ContactResponse)
async def update_contact(
    contact_id: str,
    update_data: ContactUpdate,
    admin_user: User = Depends(get_admin_user)
):
    """Update contact."""
    try:
        contacts_collection = await db_service.get_collection("contacts")
        
        # Prepare update data
        update_dict = {k: v for k, v in update_data.dict().items() if v is not None}
        update_dict["updated_at"] = datetime.utcnow()
        
        # Update contact
        result = await contacts_collection.update_one(
            {"id": contact_id},
            {"$set": update_dict}
        )
        
        if result.matched_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Contact not found"
            )
        
        # Get updated contact
        updated_contact = await contacts_collection.find_one({"id": contact_id})
        return ContactResponse(**updated_contact)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Update contact error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to update contact"
        )

@router.get("/crm-stats", response_model=CRMStats)
async def get_crm_stats(admin_user: User = Depends(get_admin_user)):
    """Get CRM statistics."""
    try:
        contacts_collection = await db_service.get_collection("contacts")
        
        # Basic counts
        total_contacts = await contacts_collection.count_documents({})
        
        # Time-based counts
        week_ago = datetime.utcnow() - timedelta(days=7)
        month_ago = datetime.utcnow() - timedelta(days=30)
        
        new_contacts_this_week = await contacts_collection.count_documents({
            "created_at": {"$gte": week_ago}
        })
        new_contacts_this_month = await contacts_collection.count_documents({
            "created_at": {"$gte": month_ago}
        })
        
        # Contacts by status
        status_counts = await contacts_collection.aggregate([
            {"$group": {"_id": "$status", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}}
        ]).to_list(length=None)
        contacts_by_status = {item["_id"]: item["count"] for item in status_counts}
        
        # Contacts by source
        source_counts = await contacts_collection.aggregate([
            {"$group": {"_id": "$source", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}}
        ]).to_list(length=None)
        contacts_by_source = {item["_id"]: item["count"] for item in source_counts}
        
        # Business inquiries
        business_inquiries = await contacts_collection.count_documents({"is_business_inquiry": True})
        
        # Email engagement rate
        total_emails_sent = await contacts_collection.aggregate([
            {"$group": {"_id": None, "total": {"$sum": "$emails_sent"}}}
        ]).to_list(length=None)
        
        total_emails_opened = await contacts_collection.aggregate([
            {"$group": {"_id": None, "total": {"$sum": "$email_opens"}}}
        ]).to_list(length=None)
        
        emails_sent = total_emails_sent[0]["total"] if total_emails_sent else 0
        emails_opened = total_emails_opened[0]["total"] if total_emails_opened else 0
        email_engagement_rate = (emails_opened / emails_sent * 100) if emails_sent > 0 else 0
        
        # Recent contacts
        recent_contacts = await contacts_collection.find(
            {},
            {"first_name": 1, "last_name": 1, "email": 1, "created_at": 1, "is_business_inquiry": 1}
        ).sort("created_at", -1).limit(10).to_list(length=None)
        
        return CRMStats(
            total_contacts=total_contacts,
            new_contacts_this_week=new_contacts_this_week,
            new_contacts_this_month=new_contacts_this_month,
            contacts_by_status=contacts_by_status,
            contacts_by_source=contacts_by_source,
            business_inquiries=business_inquiries,
            email_engagement_rate=email_engagement_rate,
            recent_contacts=recent_contacts
        )
        
    except Exception as e:
        logger.error(f"CRM stats error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to get CRM statistics"
        )