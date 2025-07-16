from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from datetime import datetime
from enum import Enum
import uuid

class EventType(str, Enum):
    SEARCH = "search"
    VIEW_ALTERNATIVE = "view_alternative"
    ADD_FAVORITE = "add_favorite"
    REMOVE_FAVORITE = "remove_favorite"
    VIEW_RECIPE = "view_recipe"
    USER_SIGNUP = "user_signup"
    USER_LOGIN = "user_login"
    REVIEW_SUBMITTED = "review_submitted"
    PAGE_VIEW = "page_view"

class AnalyticsEvent(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: Optional[str] = None
    session_id: Optional[str] = None
    event_type: EventType
    event_data: Dict[str, Any] = {}
    page_url: Optional[str] = None
    user_agent: Optional[str] = None
    ip_address: Optional[str] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class AnalyticsEventCreate(BaseModel):
    user_id: Optional[str] = None
    session_id: Optional[str] = None
    event_type: EventType
    event_data: Dict[str, Any] = {}
    page_url: Optional[str] = None
    user_agent: Optional[str] = None
    ip_address: Optional[str] = None

class DashboardStats(BaseModel):
    total_users: int
    active_users_today: int
    active_users_week: int
    active_users_month: int
    total_searches: int
    searches_today: int
    total_alternatives: int
    total_recipes: int
    total_reviews: int
    pending_reviews: int
    popular_searches: List[Dict[str, Any]]
    user_growth: List[Dict[str, Any]]
    search_trends: List[Dict[str, Any]]

class SearchAnalytics(BaseModel):
    total_searches: int
    unique_searchers: int
    top_searched_meats: List[Dict[str, Any]]
    search_trends: List[Dict[str, Any]]
    conversion_rate: float  # searches that led to favorites
    zero_result_searches: List[Dict[str, Any]]

class UserAnalytics(BaseModel):
    total_users: int
    verified_users: int
    active_users: int
    user_retention: Dict[str, float]
    demographics: Dict[str, Any]
    user_journey: List[Dict[str, Any]]
    churn_analysis: Dict[str, Any]

class ContentAnalytics(BaseModel):
    alternatives_performance: List[Dict[str, Any]]
    recipes_performance: List[Dict[str, Any]]
    reviews_analytics: Dict[str, Any]
    content_engagement: Dict[str, Any]