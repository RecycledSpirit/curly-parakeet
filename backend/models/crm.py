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
    LOST = "lost"

class ContactSource(str, Enum):
    WEBSITE = "website"
    CONTACT_FORM = "contact_form"
    SOCIAL_MEDIA = "social_media"
    REFERRAL = "referral"
    ORGANIC = "organic"
    PAID_AD = "paid_ad"

class InteractionType(str, Enum):
    EMAIL = "email"
    PHONE = "phone"
    MEETING = "meeting"
    NOTE = "note"
    TASK = "task"

class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    first_name: str = Field(..., min_length=1, max_length=100)
    last_name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    location: Optional[str] = None
    source: ContactSource = ContactSource.WEBSITE
    status: ContactStatus = ContactStatus.NEW
    dietary_interests: List[str] = []
    plant_based_level: Optional[str] = None  # beginner, intermediate, advanced
    tags: List[str] = []
    notes: Optional[str] = None
    
    # Engagement metrics
    email_opens: int = Field(default=0, ge=0)
    email_clicks: int = Field(default=0, ge=0)
    website_visits: int = Field(default=0, ge=0)
    last_activity: Optional[datetime] = None
    
    # Business fields
    is_business_inquiry: bool = False
    potential_value: Optional[float] = None
    
    # Timestamps
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    last_contacted: Optional[datetime] = None
    
    # Assigned user (admin)
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
                "source": "contact_form",
                "dietary_interests": ["Reduce meat consumption", "Environmental impact"],
                "plant_based_level": "beginner",
                "tags": ["hot_lead", "business_inquiry"],
                "is_business_inquiry": True,
                "potential_value": 5000.0
            }
        }

class ContactCreate(BaseModel):
    first_name: str = Field(..., min_length=1, max_length=100)
    last_name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    location: Optional[str] = None
    source: ContactSource = ContactSource.WEBSITE
    dietary_interests: List[str] = []
    plant_based_level: Optional[str] = None
    tags: List[str] = []
    notes: Optional[str] = None
    is_business_inquiry: bool = False
    potential_value: Optional[float] = None

class ContactUpdate(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    company: Optional[str] = None
    location: Optional[str] = None
    source: Optional[ContactSource] = None
    status: Optional[ContactStatus] = None
    dietary_interests: Optional[List[str]] = None
    plant_based_level: Optional[str] = None
    tags: Optional[List[str]] = None
    notes: Optional[str] = None
    is_business_inquiry: Optional[bool] = None
    potential_value: Optional[float] = None
    assigned_to: Optional[str] = None

class Interaction(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    contact_id: str
    type: InteractionType
    title: str = Field(..., min_length=1, max_length=200)
    description: str = Field(..., min_length=1, max_length=2000)
    created_by: str  # admin user ID
    created_at: datetime = Field(default_factory=datetime.utcnow)
    scheduled_for: Optional[datetime] = None
    completed_at: Optional[datetime] = None
    is_completed: bool = False
    
    # Email specific fields
    email_subject: Optional[str] = None
    email_sent: bool = False
    email_opened: bool = False
    email_clicked: bool = False
    
    # Task specific fields
    priority: Optional[str] = None  # low, medium, high
    due_date: Optional[datetime] = None

class InteractionCreate(BaseModel):
    contact_id: str
    type: InteractionType
    title: str = Field(..., min_length=1, max_length=200)
    description: str = Field(..., min_length=1, max_length=2000)
    scheduled_for: Optional[datetime] = None
    email_subject: Optional[str] = None
    priority: Optional[str] = None
    due_date: Optional[datetime] = None

class InteractionUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    scheduled_for: Optional[datetime] = None
    completed_at: Optional[datetime] = None
    is_completed: Optional[bool] = None
    email_subject: Optional[str] = None
    email_sent: Optional[bool] = None
    email_opened: Optional[bool] = None
    email_clicked: Optional[bool] = None
    priority: Optional[str] = None
    due_date: Optional[datetime] = None

class Deal(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    contact_id: str
    title: str = Field(..., min_length=1, max_length=200)
    description: Optional[str] = None
    value: float = Field(..., gt=0)
    stage: str = Field(default="prospect")  # prospect, proposal, negotiation, closed_won, closed_lost
    probability: int = Field(default=10, ge=0, le=100)  # percentage
    expected_close_date: Optional[datetime] = None
    actual_close_date: Optional[datetime] = None
    created_by: str  # admin user ID
    assigned_to: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class DealCreate(BaseModel):
    contact_id: str
    title: str = Field(..., min_length=1, max_length=200)
    description: Optional[str] = None
    value: float = Field(..., gt=0)
    stage: str = Field(default="prospect")
    probability: int = Field(default=10, ge=0, le=100)
    expected_close_date: Optional[datetime] = None
    assigned_to: Optional[str] = None

class DealUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    value: Optional[float] = None
    stage: Optional[str] = None
    probability: Optional[int] = None
    expected_close_date: Optional[datetime] = None
    actual_close_date: Optional[datetime] = None
    assigned_to: Optional[str] = None

class CRMStats(BaseModel):
    total_contacts: int
    new_contacts_this_week: int
    new_contacts_this_month: int
    contacts_by_status: Dict[str, int]
    contacts_by_source: Dict[str, int]
    total_deals: int
    total_deal_value: float
    deals_by_stage: Dict[str, int]
    conversion_rate: float
    avg_deal_value: float
    recent_activities: List[Dict[str, Any]]

class ContactResponse(BaseModel):
    id: str
    first_name: str
    last_name: str
    email: str
    phone: Optional[str] = None
    company: Optional[str] = None
    location: Optional[str] = None
    source: ContactSource
    status: ContactStatus
    dietary_interests: List[str]
    plant_based_level: Optional[str]
    tags: List[str]
    notes: Optional[str]
    email_opens: int
    email_clicks: int
    website_visits: int
    last_activity: Optional[datetime]
    is_business_inquiry: bool
    potential_value: Optional[float]
    created_at: datetime
    updated_at: datetime
    last_contacted: Optional[datetime]
    assigned_to: Optional[str]

class InteractionResponse(BaseModel):
    id: str
    contact_id: str
    type: InteractionType
    title: str
    description: str
    created_by: str
    created_at: datetime
    scheduled_for: Optional[datetime]
    completed_at: Optional[datetime]
    is_completed: bool
    email_subject: Optional[str]
    email_sent: bool
    email_opened: bool
    email_clicked: bool
    priority: Optional[str]
    due_date: Optional[datetime]