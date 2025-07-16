from pydantic import BaseModel, Field, validator
from typing import List, Optional, Dict, Any
from datetime import datetime
from enum import Enum
import uuid

class DifficultyLevel(str, Enum):
    EASY = "easy"
    MEDIUM = "medium"
    HARD = "hard"

class CuisineType(str, Enum):
    ITALIAN = "italian"
    MEXICAN = "mexican"
    ASIAN = "asian"
    AMERICAN = "american"
    MEDITERRANEAN = "mediterranean"
    INDIAN = "indian"
    MIDDLE_EASTERN = "middle_eastern"
    OTHER = "other"

class Recipe(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str = Field(..., min_length=1, max_length=200)
    description: Optional[str] = None
    meat_type: str  # what meat this recipe replaces
    alternative_id: Optional[str] = None  # linked alternative
    cuisine_type: CuisineType = CuisineType.OTHER
    prep_time: int = Field(..., gt=0)  # minutes
    cook_time: int = Field(..., gt=0)  # minutes
    total_time: int = Field(..., gt=0)  # minutes
    servings: int = Field(..., gt=0)
    difficulty: DifficultyLevel
    ingredients: List[str] = Field(..., min_items=1)
    instructions: List[str] = Field(..., min_items=1)
    tips: List[str] = []
    nutrition_per_serving: Optional[Dict[str, str]] = None
    tags: List[str] = []  # vegan, gluten-free, high-protein, etc.
    image_url: Optional[str] = None
    video_url: Optional[str] = None
    rating: float = Field(default=0.0, ge=0, le=5)
    review_count: int = Field(default=0, ge=0)
    view_count: int = Field(default=0, ge=0)
    is_featured: bool = False
    is_active: bool = True
    created_by: str  # user_id
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    @validator('total_time')
    def validate_total_time(cls, v, values):
        if 'prep_time' in values and 'cook_time' in values:
            expected_total = values['prep_time'] + values['cook_time']
            if v != expected_total:
                return expected_total
        return v

    class Config:
        schema_extra = {
            "example": {
                "title": "Hearty Lentil Bolognese",
                "description": "A rich and satisfying plant-based alternative to traditional meat sauce",
                "meat_type": "beef",
                "cuisine_type": "italian",
                "prep_time": 15,
                "cook_time": 30,
                "total_time": 45,
                "servings": 4,
                "difficulty": "easy",
                "ingredients": [
                    "1 cup green lentils",
                    "1 can crushed tomatoes",
                    "1 onion, diced",
                    "3 cloves garlic, minced",
                    "2 carrots, diced"
                ],
                "instructions": [
                    "Sauté onion and garlic until fragrant",
                    "Add lentils, tomatoes, and vegetables",
                    "Simmer for 30 minutes until tender"
                ],
                "tags": ["vegan", "high-protein", "family-friendly"]
            }
        }

class RecipeCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    description: Optional[str] = None
    meat_type: str
    alternative_id: Optional[str] = None
    cuisine_type: CuisineType = CuisineType.OTHER
    prep_time: int = Field(..., gt=0)
    cook_time: int = Field(..., gt=0)
    servings: int = Field(..., gt=0)
    difficulty: DifficultyLevel
    ingredients: List[str] = Field(..., min_items=1)
    instructions: List[str] = Field(..., min_items=1)
    tips: List[str] = []
    nutrition_per_serving: Optional[Dict[str, str]] = None
    tags: List[str] = []
    image_url: Optional[str] = None
    video_url: Optional[str] = None

class RecipeUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    meat_type: Optional[str] = None
    alternative_id: Optional[str] = None
    cuisine_type: Optional[CuisineType] = None
    prep_time: Optional[int] = None
    cook_time: Optional[int] = None
    servings: Optional[int] = None
    difficulty: Optional[DifficultyLevel] = None
    ingredients: Optional[List[str]] = None
    instructions: Optional[List[str]] = None
    tips: Optional[List[str]] = None
    nutrition_per_serving: Optional[Dict[str, str]] = None
    tags: Optional[List[str]] = None
    image_url: Optional[str] = None
    video_url: Optional[str] = None
    is_featured: Optional[bool] = None
    is_active: Optional[bool] = None

class RecipeResponse(BaseModel):
    id: str
    title: str
    description: Optional[str] = None
    meat_type: str
    alternative_id: Optional[str] = None
    cuisine_type: CuisineType
    prep_time: int
    cook_time: int
    total_time: int
    servings: int
    difficulty: DifficultyLevel
    ingredients: List[str]
    instructions: List[str]
    tips: List[str]
    nutrition_per_serving: Optional[Dict[str, str]] = None
    tags: List[str]
    image_url: Optional[str] = None
    video_url: Optional[str] = None
    rating: float
    review_count: int
    view_count: int
    is_featured: bool
    created_at: datetime
    updated_at: datetime

class RecipeStats(BaseModel):
    total_recipes: int
    recipes_by_meat_type: Dict[str, int]
    recipes_by_difficulty: Dict[str, int]
    recipes_by_cuisine: Dict[str, int]
    top_rated_recipes: List[Dict[str, Any]]
    most_viewed_recipes: List[Dict[str, Any]]
    featured_recipes: List[Dict[str, Any]]