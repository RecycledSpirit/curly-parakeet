from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
import logging

from models.crm import Contact, ContactCreate, ContactSource
from services.database import db_service
from services.email import email_service

router = APIRouter()
logger = logging.getLogger(__name__)

class ContactFormSubmission(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    message: str

@router.post("/contact")
async def submit_contact_form(form_data: ContactFormSubmission):
    """Handle contact form submission."""
    try:
        # Create contact record
        contact = Contact(
            first_name=form_data.firstName,
            last_name=form_data.lastName,
            email=form_data.email,
            message=form_data.message,
            source=ContactSource.CONTACT_FORM,
            is_business_inquiry=True if any(word in form_data.message.lower() for word in 
                ['business', 'partnership', 'collaboration', 'sponsor', 'advertise', 'invest']) else False
        )
        
        # Save to database
        contacts_collection = await db_service.get_collection("contacts")
        await contacts_collection.insert_one(contact.dict())
        
        # Send email notification to admin
        admin_email_content = f"""
        New Contact Form Submission

        Name: {form_data.firstName} {form_data.lastName}
        Email: {form_data.email}
        Message: {form_data.message}

        Submitted: {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')} UTC
        Business Inquiry: {'Yes' if contact.is_business_inquiry else 'No'}
        """
        
        # Send to your email
        email_service.send_email(
            to_email="cravekind@gmail.com",
            subject=f"New Contact Form Submission from {form_data.firstName} {form_data.lastName}",
            html_content=admin_email_content.replace('\n', '<br>'),
            text_content=admin_email_content
        )
        
        # Send confirmation email to user
        user_email_content = f"""
        Hi {form_data.firstName},

        Thank you for contacting CraveKind! We've received your message and will get back to you within 24 hours.

        Your message:
        {form_data.message}

        We're excited to help you on your plant-based journey!

        Best regards,
        The CraveKind Team
        """
        
        email_service.send_email(
            to_email=form_data.email,
            subject="Thank you for contacting CraveKind!",
            html_content=user_email_content.replace('\n', '<br>'),
            text_content=user_email_content
        )
        
        logger.info(f"Contact form submitted by {form_data.email}")
        
        return {"message": "Thank you for your message! We'll get back to you soon."}
        
    except Exception as e:
        logger.error(f"Contact form submission error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to submit contact form"
        )