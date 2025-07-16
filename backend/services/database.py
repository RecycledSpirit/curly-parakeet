from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from typing import Optional, Dict, Any, List
import os
import logging

logger = logging.getLogger(__name__)

class DatabaseService:
    def __init__(self):
        self.client: Optional[AsyncIOMotorClient] = None
        self.db: Optional[AsyncIOMotorDatabase] = None

    async def connect(self):
        """Connect to MongoDB."""
        try:
            mongo_url = os.getenv('MONGO_URL')
            if not mongo_url:
                raise ValueError("MONGO_URL environment variable is not set")
            
            self.client = AsyncIOMotorClient(mongo_url)
            self.db = self.client[os.getenv('DB_NAME', 'cravekind')]
            
            # Test connection
            await self.client.admin.command('ping')
            logger.info("Successfully connected to MongoDB")
            
            # Create indexes
            await self.create_indexes()
            
        except Exception as e:
            logger.error(f"Failed to connect to MongoDB: {str(e)}")
            raise

    async def disconnect(self):
        """Disconnect from MongoDB."""
        if self.client:
            self.client.close()
            logger.info("Disconnected from MongoDB")

    async def create_indexes(self):
        """Create database indexes for optimal performance."""
        try:
            # User indexes
            await self.db.users.create_index("email", unique=True)
            await self.db.users.create_index("verification_token")
            await self.db.users.create_index("reset_token")
            await self.db.users.create_index("created_at")
            
            # Alternative indexes
            await self.db.alternatives.create_index("meat_type")
            await self.db.alternatives.create_index("brand")
            await self.db.alternatives.create_index("type")
            await self.db.alternatives.create_index("is_active")
            await self.db.alternatives.create_index("rating")
            await self.db.alternatives.create_index([("name", "text"), ("brand", "text"), ("description", "text")])
            
            # Recipe indexes
            await self.db.recipes.create_index("meat_type")
            await self.db.recipes.create_index("difficulty")
            await self.db.recipes.create_index("cuisine_type")
            await self.db.recipes.create_index("is_active")
            await self.db.recipes.create_index("is_featured")
            await self.db.recipes.create_index("rating")
            await self.db.recipes.create_index([("title", "text"), ("description", "text")])
            
            # Review indexes
            await self.db.reviews.create_index("user_id")
            await self.db.reviews.create_index("target_id")
            await self.db.reviews.create_index("type")
            await self.db.reviews.create_index("status")
            await self.db.reviews.create_index("is_featured")
            await self.db.reviews.create_index("created_at")
            
            # Analytics indexes
            await self.db.analytics.create_index("user_id")
            await self.db.analytics.create_index("event_type")
            await self.db.analytics.create_index("timestamp")
            await self.db.analytics.create_index("session_id")
            
            # Testimonial indexes
            await self.db.testimonials.create_index("is_featured")
            await self.db.testimonials.create_index("rating")
            await self.db.testimonials.create_index("created_at")
            
            # Meat craving indexes
            await self.db.meat_cravings.create_index("meat_type", unique=True)
            
            logger.info("Database indexes created successfully")
            
        except Exception as e:
            logger.error(f"Failed to create database indexes: {str(e)}")

    async def get_collection(self, name: str):
        """Get a collection from the database."""
        if not self.db:
            raise RuntimeError("Database not connected")
        return self.db[name]

    async def health_check(self) -> Dict[str, Any]:
        """Check database health."""
        try:
            if not self.client:
                return {"status": "error", "message": "Not connected"}
            
            # Ping database
            await self.client.admin.command('ping')
            
            # Get database stats
            stats = await self.db.command("dbstats")
            
            return {
                "status": "healthy",
                "database": self.db.name,
                "collections": stats.get("collections", 0),
                "data_size": stats.get("dataSize", 0),
                "storage_size": stats.get("storageSize", 0)
            }
            
        except Exception as e:
            return {"status": "error", "message": str(e)}

# Create global instance
db_service = DatabaseService()