from pydantic import BaseModel, Field, EmailStr, validator
from typing import List, Optional, Dict, Any
from datetime import datetime
from enum import Enum
import uuid

class ContactStatus(str, Enum):
    NEW = "new"
    CONTACTED = "contacted"
    QUALIFIED = "qualified"
    CONVERTED = "converted"

class ContactSource(str, Enum):
    WEBSITE = "website"
    CONTACT_FORM = "contact_form"
    SOCIAL_MEDIA = "social_media"
    REFERRAL = "referral"
    ORGANIC = "organic"

class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    first_name: str = Field(..., min_length=1, max_length=100)
    last_name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    location: Optional[str] = None
    message: Optional[str] = None  # Original contact message
    source: ContactSource = ContactSource.CONTACT_FORM
    status: ContactStatus = ContactStatus.NEW
    dietary_interests: List[str] = []
    plant_based_level: Optional[str] = None  # beginner, intermediate, advanced
    tags: List[str] = []
    admin_notes: Optional[str] = None
    
    # Email engagement metrics
    email_opens: int = Field(default=0, ge=0)
    email_clicks: int = Field(default=0, ge=0)
    emails_sent: int = Field(default=0, ge=0)
    last_email_sent: Optional[datetime] = None
    last_email_opened: Optional[datetime] = None
    
    # Business inquiry fields
    is_business_inquiry: bool = False
    inquiry_type: Optional[str] = None  # partnership, sponsorship, general
    
    # Timestamps
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    last_contacted: Optional[datetime] = None
    
    # Assigned admin
    assigned_to: Optional[str] = None

    class Config:
        schema_extra = {
            "example": {
                "first_name": "Sarah",
                "last_name": "Johnson",
                "email": "sarah@example.com",
                "phone": "+1234567890",
                "company": "Healthy Foods Co",
                "location": "Toronto, Canada",
                "message": "I'm interested in partnering with CraveKind for our restaurant chain.",
                "source": "contact_form",
                "dietary_interests": ["Environmental impact", "Business partnership"],
                "plant_based_level": "intermediate",
                "tags": ["hot_lead", "restaurant_chain"],
                "is_business_inquiry": True,
                "inquiry_type": "partnership"
            }
        }

class ContactCreate(BaseModel):
    first_name: str = Field(..., min_length=1, max_length=100)
    last_name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    location: Optional[str] = None
    message: Optional[str] = None
    source: ContactSource = ContactSource.CONTACT_FORM
    dietary_interests: List[str] = []
    plant_based_level: Optional[str] = None
    tags: List[str] = []
    is_business_inquiry: bool = False
    inquiry_type: Optional[str] = None

class ContactUpdate(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    company: Optional[str] = None
    location: Optional[str] = None
    message: Optional[str] = None
    source: Optional[ContactSource] = None
    status: Optional[ContactStatus] = None
    dietary_interests: Optional[List[str]] = None
    plant_based_level: Optional[str] = None
    tags: Optional[List[str]] = None
    admin_notes: Optional[str] = None
    is_business_inquiry: Optional[bool] = None
    inquiry_type: Optional[str] = None
    assigned_to: Optional[str] = None

class EmailLog(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    contact_id: str
    subject: str
    content: str
    sent_at: datetime = Field(default_factory=datetime.utcnow)
    sent_by: str  # admin user ID
    opened_at: Optional[datetime] = None
    clicked_at: Optional[datetime] = None
    email_type: str = "manual"  # manual, automated, newsletter

class EmailLogCreate(BaseModel):
    contact_id: str
    subject: str
    content: str
    email_type: str = "manual"

class CRMStats(BaseModel):
    total_contacts: int
    new_contacts_this_week: int
    new_contacts_this_month: int
    contacts_by_status: Dict[str, int]
    contacts_by_source: Dict[str, int]
    business_inquiries: int
    email_engagement_rate: float
    recent_contacts: List[Dict[str, Any]]

class ContactResponse(BaseModel):
    id: str
    first_name: str
    last_name: str
    email: str
    phone: Optional[str] = None
    company: Optional[str] = None
    location: Optional[str] = None
    message: Optional[str] = None
    source: ContactSource
    status: ContactStatus
    dietary_interests: List[str]
    plant_based_level: Optional[str]
    tags: List[str]
    admin_notes: Optional[str]
    email_opens: int
    email_clicks: int
    emails_sent: int
    last_email_sent: Optional[datetime]
    last_email_opened: Optional[datetime]
    is_business_inquiry: bool
    inquiry_type: Optional[str]
    created_at: datetime
    updated_at: datetime
    last_contacted: Optional[datetime]
    assigned_to: Optional[str]