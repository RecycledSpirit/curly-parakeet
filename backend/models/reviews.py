from pydantic import BaseModel, Field, validator
from typing import List, Optional, Dict, Any
from datetime import datetime
from enum import Enum
import uuid

class ReviewType(str, Enum):
    ALTERNATIVE_REVIEW = "alternative_review"
    TESTIMONIAL = "testimonial"
    RECIPE_REVIEW = "recipe_review"

class ReviewStatus(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"

class Review(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    user_name: str
    user_email: str
    type: ReviewType
    target_id: Optional[str] = None  # ID of alternative, recipe, etc.
    title: str = Field(..., min_length=1, max_length=200)
    content: str = Field(..., min_length=10, max_length=2000)
    rating: int = Field(..., ge=1, le=5)
    helpful_count: int = Field(default=0, ge=0)
    status: ReviewStatus = ReviewStatus.PENDING
    is_featured: bool = False
    admin_notes: Optional[str] = None
    transition_period: Optional[str] = None  # "3 months meat-free", etc.
    verified_purchase: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    approved_at: Optional[datetime] = None
    approved_by: Optional[str] = None

    class Config:
        schema_extra = {
            "example": {
                "user_id": "user123",
                "user_name": "Sarah Green",
                "user_email": "sarah@example.com",
                "type": "testimonial",
                "title": "Amazing transition experience!",
                "content": "This app helped me transition to plant-based eating seamlessly. The nutritional insights were eye-opening!",
                "rating": 5,
                "transition_period": "3 months meat-free"
            }
        }

class ReviewCreate(BaseModel):
    type: ReviewType
    target_id: Optional[str] = None
    title: str = Field(..., min_length=1, max_length=200)
    content: str = Field(..., min_length=10, max_length=2000)
    rating: int = Field(..., ge=1, le=5)
    transition_period: Optional[str] = None

class ReviewUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    rating: Optional[int] = None
    transition_period: Optional[str] = None

class ReviewResponse(BaseModel):
    id: str
    user_name: str
    type: ReviewType
    target_id: Optional[str] = None
    title: str
    content: str
    rating: int
    helpful_count: int
    status: ReviewStatus
    is_featured: bool
    transition_period: Optional[str] = None
    created_at: datetime
    updated_at: datetime

class AdminReviewUpdate(BaseModel):
    status: Optional[ReviewStatus] = None
    is_featured: Optional[bool] = None
    admin_notes: Optional[str] = None

class ReviewStats(BaseModel):
    total_reviews: int
    pending_reviews: int
    approved_reviews: int
    rejected_reviews: int
    featured_reviews: int
    reviews_by_type: Dict[str, int]
    average_rating: float
    recent_reviews: List[Dict[str, Any]]

class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_name: str
    user_avatar: Optional[str] = None
    title: str
    content: str
    rating: int = Field(..., ge=1, le=5)
    transition_period: Optional[str] = None
    is_featured: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    admin_created: bool = False
    admin_id: Optional[str] = None

class TestimonialCreate(BaseModel):
    user_name: str
    user_avatar: Optional[str] = None
    title: str
    content: str
    rating: int = Field(..., ge=1, le=5)
    transition_period: Optional[str] = None
    is_featured: bool = True

class TestimonialUpdate(BaseModel):
    user_name: Optional[str] = None
    user_avatar: Optional[str] = None
    title: Optional[str] = None
    content: Optional[str] = None
    rating: Optional[int] = None
    transition_period: Optional[str] = None
    is_featured: Optional[bool] = None