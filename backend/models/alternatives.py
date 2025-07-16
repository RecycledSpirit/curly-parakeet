from pydantic import BaseModel, Field, validator
from typing import List, Optional, Dict, Any
from datetime import datetime
from enum import Enum
import uuid

class AlternativeType(str, Enum):
    PLANT_BASED_MEAT = "plant_based_meat"
    WHOLE_FOOD = "whole_food"
    SUPPLEMENT = "supplement"

class MeatType(str, Enum):
    BEEF = "beef"
    CHICKEN = "chicken"
    PORK = "pork"
    FISH = "fish"
    LAMB = "lamb"
    TURKEY = "turkey"
    DUCK = "duck"

class NutritionInfo(BaseModel):
    protein: str
    iron: str
    calories: str
    fat: str
    fiber: str
    b12: str
    sodium: Optional[str] = None
    cholesterol: Optional[str] = None

class Alternative(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=1, max_length=200)
    brand: str
    type: AlternativeType
    meat_type: MeatType
    description: Optional[str] = None
    nutrition: NutritionInfo
    benefits: List[str] = []
    availability: str
    price_range: Optional[str] = None
    preparation_time: Optional[str] = None
    difficulty_level: Optional[str] = None
    ingredients: List[str] = []
    allergens: List[str] = []
    certifications: List[str] = []  # vegan, organic, gluten-free, etc.
    image_url: Optional[str] = None
    rating: float = Field(default=0.0, ge=0, le=5)
    review_count: int = Field(default=0, ge=0)
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        schema_extra = {
            "example": {
                "name": "Beyond Beef",
                "brand": "Beyond Meat",
                "type": "plant_based_meat",
                "meat_type": "beef",
                "description": "Plant-based ground meat alternative",
                "nutrition": {
                    "protein": "20g",
                    "iron": "4mg",
                    "calories": "250",
                    "fat": "18g",
                    "fiber": "3g",
                    "b12": "2.4mcg"
                },
                "benefits": ["35% less saturated fat than beef", "No cholesterol"],
                "availability": "Grocery stores, restaurants",
                "price_range": "$6-8",
                "ingredients": ["Pea protein", "Coconut oil", "Beet extract"],
                "allergens": ["Soy"],
                "certifications": ["Vegan", "Non-GMO"]
            }
        }

class AlternativeCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    brand: str
    type: AlternativeType
    meat_type: MeatType
    description: Optional[str] = None
    nutrition: NutritionInfo
    benefits: List[str] = []
    availability: str
    price_range: Optional[str] = None
    preparation_time: Optional[str] = None
    difficulty_level: Optional[str] = None
    ingredients: List[str] = []
    allergens: List[str] = []
    certifications: List[str] = []
    image_url: Optional[str] = None

class AlternativeUpdate(BaseModel):
    name: Optional[str] = None
    brand: Optional[str] = None
    type: Optional[AlternativeType] = None
    meat_type: Optional[MeatType] = None
    description: Optional[str] = None
    nutrition: Optional[NutritionInfo] = None
    benefits: Optional[List[str]] = None
    availability: Optional[str] = None
    price_range: Optional[str] = None
    preparation_time: Optional[str] = None
    difficulty_level: Optional[str] = None
    ingredients: Optional[List[str]] = None
    allergens: Optional[List[str]] = None
    certifications: Optional[List[str]] = None
    image_url: Optional[str] = None
    is_active: Optional[bool] = None

class MeatCraving(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    meat_type: MeatType
    name: str
    deficiency: str
    deficiency_explanation: str
    meat_side_effects: List[str] = []
    recommended_supplements: List[str] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class MeatCravingCreate(BaseModel):
    meat_type: MeatType
    name: str
    deficiency: str
    deficiency_explanation: str
    meat_side_effects: List[str] = []
    recommended_supplements: List[str] = []

class SearchQuery(BaseModel):
    meat_type: str
    user_id: Optional[str] = None
    filters: Optional[Dict[str, Any]] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class AlternativeStats(BaseModel):
    total_alternatives: int
    alternatives_by_meat_type: Dict[str, int]
    alternatives_by_brand: Dict[str, int]
    top_rated_alternatives: List[Dict[str, Any]]
    most_favorited: List[Dict[str, Any]]