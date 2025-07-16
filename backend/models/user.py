from pydantic import BaseModel, Field, EmailStr, validator
from typing import List, Optional, Dict, Any
from datetime import datetime
from enum import Enum
import uuid

class UserRole(str, Enum):
    USER = "user"
    ADMIN = "admin"

class User(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = None
    location: Optional[str] = None
    age_group: Optional[str] = None
    dietary_goals: List[str] = []
    password_hash: str
    role: UserRole = UserRole.USER
    is_verified: bool = False
    verification_token: Optional[str] = None
    reset_token: Optional[str] = None
    reset_token_expires: Optional[datetime] = None
    favorites: List[str] = []  # IDs of favorite alternatives
    search_history: List[str] = []
    last_login: Optional[datetime] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    @validator('dietary_goals')
    def validate_dietary_goals(cls, v):
        valid_goals = [
            "Reduce meat consumption",
            "Improve health", 
            "Environmental impact",
            "Animal welfare",
            "Weight management",
            "Allergies/Intolerances"
        ]
        for goal in v:
            if goal not in valid_goals:
                raise ValueError(f"Invalid dietary goal: {goal}")
        return v

    class Config:
        schema_extra = {
            "example": {
                "name": "Sarah Green",
                "email": "sarah@example.com",
                "phone": "+1234567890",
                "location": "Toronto, Canada",
                "age_group": "26-35",
                "dietary_goals": ["Reduce meat consumption", "Environmental impact"],
                "role": "user"
            }
        }

class UserCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    password: str = Field(..., min_length=6)
    phone: Optional[str] = None
    location: Optional[str] = None
    age_group: Optional[str] = None
    dietary_goals: List[str] = []

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: str
    name: str
    email: str
    phone: Optional[str] = None
    location: Optional[str] = None
    age_group: Optional[str] = None
    dietary_goals: List[str] = []
    role: UserRole
    is_verified: bool
    favorites: List[str] = []
    search_history: List[str] = []
    last_login: Optional[datetime] = None
    created_at: datetime
    updated_at: datetime

class UserUpdate(BaseModel):
    name: Optional[str] = None
    phone: Optional[str] = None
    location: Optional[str] = None
    age_group: Optional[str] = None
    dietary_goals: Optional[List[str]] = None

class PasswordReset(BaseModel):
    email: EmailStr

class PasswordResetConfirm(BaseModel):
    token: str
    new_password: str = Field(..., min_length=6)

class UserStats(BaseModel):
    total_users: int
    verified_users: int
    users_by_age_group: Dict[str, int]
    users_by_location: Dict[str, int]
    top_dietary_goals: Dict[str, int]
    recent_signups: List[Dict[str, Any]]