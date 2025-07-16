from models.alternatives import Alternative, AlternativeType, MeatType, NutritionInfo
from models.recipes import Recipe, DifficultyLevel, CuisineType
from models.reviews import Testimonial
from models.user import User, UserRole
from models.alternatives import MeatCraving
from services.database import db_service
from services.auth import get_password_hash
from typing import List
import logging

logger = logging.getLogger(__name__)

class DataSeeder:
    def __init__(self):
        self.db = db_service

    async def seed_meat_cravings(self):
        """Seed meat cravings data."""
        meat_cravings = [
            MeatCraving(
                meat_type=MeatType.BEEF,
                name="Beef",
                deficiency="Iron, B12, Protein",
                deficiency_explanation="Beef cravings often indicate low iron levels, B12 deficiency, or protein needs. These nutrients are essential for energy production and red blood cell formation.",
                meat_side_effects=[
                    "Increased risk of heart disease",
                    "Higher cholesterol levels",
                    "Environmental impact",
                    "Antibiotic resistance concerns"
                ],
                recommended_supplements=["Iron", "B12", "Plant-based protein"]
            ),
            MeatCraving(
                meat_type=MeatType.CHICKEN,
                name="Chicken",
                deficiency="Protein, B6, Niacin",
                deficiency_explanation="Chicken cravings may indicate protein deficiency, low B6 levels, or niacin needs. These nutrients support muscle function and brain health.",
                meat_side_effects=[
                    "Potential antibiotic residues",
                    "Salmonella risk",
                    "Hormonal disruption",
                    "Inflammatory response"
                ],
                recommended_supplements=["B6", "Niacin", "Plant-based protein"]
            ),
            MeatCraving(
                meat_type=MeatType.PORK,
                name="Pork",
                deficiency="Thiamine, B6, Zinc",
                deficiency_explanation="Pork cravings often signal thiamine (B1) deficiency, low B6, or zinc needs. These nutrients are crucial for energy metabolism and immune function.",
                meat_side_effects=[
                    "High in saturated fat",
                    "Nitrate concerns",
                    "Increased inflammation",
                    "Cardiovascular risks"
                ],
                recommended_supplements=["Thiamine", "B6", "Zinc"]
            ),
            MeatCraving(
                meat_type=MeatType.FISH,
                name="Fish",
                deficiency="Omega-3, Iodine, B12",
                deficiency_explanation="Fish cravings typically indicate omega-3 fatty acid deficiency, low iodine levels, or B12 needs. These nutrients support brain health and thyroid function.",
                meat_side_effects=[
                    "Heavy metal contamination",
                    "Microplastics",
                    "Overfishing impact",
                    "Potential toxins"
                ],
                recommended_supplements=["Omega-3 (algae-based)", "Iodine", "B12"]
            ),
            MeatCraving(
                meat_type=MeatType.LAMB,
                name="Lamb",
                deficiency="Iron, B12, Zinc",
                deficiency_explanation="Lamb cravings often indicate iron deficiency, low B12, or zinc needs. These nutrients are essential for oxygen transport and immune function.",
                meat_side_effects=[
                    "High in saturated fat",
                    "Cholesterol concerns",
                    "Environmental impact",
                    "Expensive production"
                ],
                recommended_supplements=["Iron", "B12", "Zinc"]
            )
        ]

        collection = await self.db.get_collection("meat_cravings")
        for craving in meat_cravings:
            await collection.replace_one(
                {"meat_type": craving.meat_type},
                craving.dict(),
                upsert=True
            )
        
        logger.info("Meat cravings seeded successfully")

    async def seed_alternatives(self):
        """Seed alternatives data."""
        alternatives = [
            # Beef alternatives
            Alternative(
                name="Beyond Beef",
                brand="Beyond Meat",
                type=AlternativeType.PLANT_BASED_MEAT,
                meat_type=MeatType.BEEF,
                description="Plant-based ground meat alternative that looks, cooks, and tastes like beef",
                nutrition=NutritionInfo(
                    protein="20g",
                    iron="4mg",
                    calories="250",
                    fat="18g",
                    fiber="3g",
                    b12="2.4mcg",
                    sodium="390mg",
                    cholesterol="0mg"
                ),
                benefits=[
                    "35% less saturated fat than beef",
                    "No cholesterol",
                    "Rich in plant-based protein",
                    "Environmental sustainability"
                ],
                availability="Grocery stores, restaurants",
                price_range="$6-8 per package",
                preparation_time="10-15 minutes",
                difficulty_level="Easy",
                ingredients=["Pea protein", "Coconut oil", "Beet extract", "Natural flavors"],
                allergens=["Soy"],
                certifications=["Vegan", "Non-GMO"],
                rating=4.3
            ),
            Alternative(
                name="Impossible Burger",
                brand="Impossible Foods",
                type=AlternativeType.PLANT_BASED_MEAT,
                meat_type=MeatType.BEEF,
                description="Plant-based burger patty with heme iron that bleeds like real meat",
                nutrition=NutritionInfo(
                    protein="19g",
                    iron="4mg",
                    calories="240",
                    fat="14g",
                    fiber="3g",
                    b12="2.4mcg",
                    sodium="370mg",
                    cholesterol="0mg"
                ),
                benefits=[
                    "Heme iron from plants",
                    "No antibiotics",
                    "Lower greenhouse gas emissions",
                    "Tastes like beef"
                ],
                availability="Restaurants, grocery stores",
                price_range="$7-9 per package",
                preparation_time="8-10 minutes",
                difficulty_level="Easy",
                ingredients=["Soy protein", "Coconut oil", "Heme", "Potato protein"],
                allergens=["Soy"],
                certifications=["Vegan", "Kosher"],
                rating=4.4
            ),
            Alternative(
                name="Lentil & Mushroom Mix",
                brand="Whole Foods",
                type=AlternativeType.WHOLE_FOOD,
                meat_type=MeatType.BEEF,
                description="Combination of lentils and mushrooms for hearty, meaty texture",
                nutrition=NutritionInfo(
                    protein="18g",
                    iron="6mg",
                    calories="180",
                    fat="1g",
                    fiber="8g",
                    b12="0mcg",
                    sodium="15mg",
                    cholesterol="0mg"
                ),
                benefits=[
                    "High in fiber",
                    "Low in saturated fat",
                    "Rich in folate",
                    "Cost-effective"
                ],
                availability="All grocery stores",
                price_range="$2-4 per serving",
                preparation_time="25-30 minutes",
                difficulty_level="Medium",
                ingredients=["Green lentils", "Mushrooms", "Onions", "Herbs"],
                allergens=[],
                certifications=["Vegan", "Organic"],
                rating=4.1
            ),
            # Chicken alternatives
            Alternative(
                name="Gardein Chicken Pieces",
                brand="Gardein",
                type=AlternativeType.PLANT_BASED_MEAT,
                meat_type=MeatType.CHICKEN,
                description="Crispy plant-based chicken pieces",
                nutrition=NutritionInfo(
                    protein="15g",
                    iron="1mg",
                    calories="180",
                    fat="7g",
                    fiber="5g",
                    b12="0mcg",
                    sodium="480mg",
                    cholesterol="0mg"
                ),
                benefits=[
                    "Lower in saturated fat",
                    "No cholesterol",
                    "Good source of protein",
                    "Quick cooking time"
                ],
                availability="Frozen section, grocery stores",
                price_range="$4-6 per package",
                preparation_time="12-15 minutes",
                difficulty_level="Easy",
                ingredients=["Soy protein", "Wheat gluten", "Vegetables", "Spices"],
                allergens=["Soy", "Wheat"],
                certifications=["Vegan", "Non-GMO"],
                rating=4.2
            ),
            Alternative(
                name="Chickpea & Tofu Blend",
                brand="Homemade",
                type=AlternativeType.WHOLE_FOOD,
                meat_type=MeatType.CHICKEN,
                description="Combination of chickpeas and tofu for protein-rich alternative",
                nutrition=NutritionInfo(
                    protein="16g",
                    iron="3mg",
                    calories="200",
                    fat="8g",
                    fiber="6g",
                    b12="0mcg",
                    sodium="10mg",
                    cholesterol="0mg"
                ),
                benefits=[
                    "High in fiber",
                    "Rich in folate",
                    "Versatile protein source",
                    "Budget-friendly"
                ],
                availability="All grocery stores",
                price_range="$1-3 per serving",
                preparation_time="20-25 minutes",
                difficulty_level="Medium",
                ingredients=["Chickpeas", "Tofu", "Nutritional yeast", "Spices"],
                allergens=["Soy"],
                certifications=["Vegan", "Organic"],
                rating=4.0
            ),
            # Fish alternatives
            Alternative(
                name="Good Catch Fish-Free Tuna",
                brand="Good Catch",
                type=AlternativeType.PLANT_BASED_MEAT,
                meat_type=MeatType.FISH,
                description="Plant-based tuna alternative with omega-3s from algae",
                nutrition=NutritionInfo(
                    protein="14g",
                    iron="1mg",
                    calories="90",
                    fat="5g",
                    fiber="2g",
                    b12="0mcg",
                    sodium="350mg",
                    cholesterol="0mg"
                ),
                benefits=[
                    "No mercury",
                    "Sustainable source",
                    "Omega-3 from algae",
                    "Ocean-friendly"
                ],
                availability="Canned goods, grocery stores",
                price_range="$3-5 per can",
                preparation_time="5 minutes",
                difficulty_level="Easy",
                ingredients=["Pea protein", "Algae oil", "Seaweed", "Natural flavors"],
                allergens=[],
                certifications=["Vegan", "Sustainable"],
                rating=4.3
            )
        ]

        collection = await self.db.get_collection("alternatives")
        for alternative in alternatives:
            await collection.replace_one(
                {"name": alternative.name, "brand": alternative.brand},
                alternative.dict(),
                upsert=True
            )
        
        logger.info("Alternatives seeded successfully")

    async def seed_recipes(self):
        """Seed recipes data."""
        # First, get some alternative IDs
        alternatives_collection = await self.db.get_collection("alternatives")
        beyond_beef = await alternatives_collection.find_one({"name": "Beyond Beef"})
        lentil_mushroom = await alternatives_collection.find_one({"name": "Lentil & Mushroom Mix"})
        
        recipes = [
            Recipe(
                title="Hearty Lentil Bolognese",
                description="A rich and satisfying plant-based alternative to traditional meat sauce",
                meat_type="beef",
                alternative_id=lentil_mushroom["id"] if lentil_mushroom else None,
                cuisine_type=CuisineType.ITALIAN,
                prep_time=15,
                cook_time=30,
                total_time=45,
                servings=4,
                difficulty=DifficultyLevel.EASY,
                ingredients=[
                    "1 cup green lentils",
                    "1 can crushed tomatoes",
                    "1 onion, diced",
                    "3 cloves garlic, minced",
                    "2 carrots, diced",
                    "2 celery stalks, diced",
                    "Herbs: basil, oregano, thyme",
                    "Olive oil",
                    "Salt and pepper"
                ],
                instructions=[
                    "Heat olive oil in a large pot over medium heat",
                    "Sauté onion, garlic, carrots, and celery until softened",
                    "Add lentils, tomatoes, and herbs",
                    "Simmer for 30 minutes until lentils are tender",
                    "Season with salt and pepper to taste",
                    "Serve over pasta with fresh basil"
                ],
                tips=[
                    "Use red lentils for faster cooking",
                    "Add mushrooms for extra umami",
                    "Make ahead - flavors improve overnight"
                ],
                nutrition_per_serving={
                    "calories": "320",
                    "protein": "18g",
                    "fiber": "12g",
                    "iron": "6mg"
                },
                tags=["vegan", "high-protein", "family-friendly", "make-ahead"],
                rating=4.5,
                is_featured=True,
                created_by="admin"
            ),
            Recipe(
                title="Beyond Beef Tacos",
                description="Quick and easy plant-based tacos with Beyond Beef",
                meat_type="beef",
                alternative_id=beyond_beef["id"] if beyond_beef else None,
                cuisine_type=CuisineType.MEXICAN,
                prep_time=10,
                cook_time=10,
                total_time=20,
                servings=4,
                difficulty=DifficultyLevel.EASY,
                ingredients=[
                    "1 package Beyond Beef",
                    "1 packet taco seasoning",
                    "8 corn tortillas",
                    "1 avocado, sliced",
                    "1 cup shredded lettuce",
                    "2 tomatoes, diced",
                    "1/4 cup red onion, diced",
                    "Lime wedges",
                    "Salsa"
                ],
                instructions=[
                    "Cook Beyond Beef in a skillet over medium heat",
                    "Add taco seasoning and cook according to package directions",
                    "Warm tortillas in microwave or on griddle",
                    "Fill tortillas with Beyond Beef mixture",
                    "Top with avocado, lettuce, tomatoes, and onion",
                    "Serve with lime wedges and salsa"
                ],
                tips=[
                    "Add cumin for extra flavor",
                    "Use hard or soft shells",
                    "Make a taco bar for parties"
                ],
                nutrition_per_serving={
                    "calories": "380",
                    "protein": "20g",
                    "fiber": "8g",
                    "iron": "4mg"
                },
                tags=["vegan", "quick-meal", "mexican", "family-friendly"],
                rating=4.3,
                is_featured=True,
                created_by="admin"
            ),
            Recipe(
                title="Crispy Chickpea 'Chicken'",
                description="Crispy seasoned chickpea patties that taste like chicken",
                meat_type="chicken",
                cuisine_type=CuisineType.AMERICAN,
                prep_time=20,
                cook_time=15,
                total_time=35,
                servings=4,
                difficulty=DifficultyLevel.MEDIUM,
                ingredients=[
                    "2 cans chickpeas, drained and rinsed",
                    "1/2 cup flour",
                    "1/4 cup nutritional yeast",
                    "1 tsp paprika",
                    "1 tsp garlic powder",
                    "1/2 tsp onion powder",
                    "Salt and pepper",
                    "Oil for frying"
                ],
                instructions=[
                    "Mash chickpeas in a large bowl, leaving some texture",
                    "Mix in flour, nutritional yeast, and all spices",
                    "Form mixture into 8 patties",
                    "Heat oil in a large skillet over medium-high heat",
                    "Cook patties for 3-4 minutes per side until golden",
                    "Serve immediately while crispy"
                ],
                tips=[
                    "Pat chickpeas dry before mashing",
                    "Don't overmix - texture is key",
                    "Serve with vegan ranch dressing"
                ],
                nutrition_per_serving={
                    "calories": "280",
                    "protein": "16g",
                    "fiber": "8g",
                    "iron": "3mg"
                },
                tags=["vegan", "high-protein", "crispy", "comfort-food"],
                rating=4.2,
                created_by="admin"
            )
        ]

        collection = await self.db.get_collection("recipes")
        for recipe in recipes:
            await collection.replace_one(
                {"title": recipe.title},
                recipe.dict(),
                upsert=True
            )
        
        logger.info("Recipes seeded successfully")

    async def seed_admin_user(self):
        """Seed admin user."""
        admin_user = User(
            name="CraveKind Admin",
            email="admin@cravekind.ca",
            password_hash=get_password_hash("admin123"),
            role=UserRole.ADMIN,
            is_verified=True,
            phone="+1234567890",
            location="Toronto, Canada",
            age_group="26-35",
            dietary_goals=["Environmental impact", "Animal welfare"]
        )

        collection = await self.db.get_collection("users")
        await collection.replace_one(
            {"email": admin_user.email},
            admin_user.dict(),
            upsert=True
        )
        
        logger.info("Admin user seeded successfully")

    async def seed_testimonials(self):
        """Seed sample testimonials."""
        testimonials = [
            Testimonial(
                user_name="Sarah Johnson",
                user_avatar="https://images.unsplash.com/photo-1494790108755-2616b45f2a86?w=100&h=100&fit=crop&crop=face",
                title="Life-changing experience!",
                content="CraveKind helped me understand why I was craving meat and gave me amazing alternatives. I've been plant-based for 6 months now and feel incredible!",
                rating=5,
                transition_period="6 months plant-based",
                admin_created=True
            ),
            Testimonial(
                user_name="Mike Chen",
                user_avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                title="Best decision ever",
                content="The nutritional insights were eye-opening! I never realized my beef cravings were actually iron deficiency. The plant-based alternatives are delicious.",
                rating=5,
                transition_period="1 year vegan",
                admin_created=True
            ),
            Testimonial(
                user_name="Emma Wilson",
                user_avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                title="Amazing recipes!",
                content="The recipe suggestions made my transition so much easier. My family loves the Beyond Beef tacos - they can't tell the difference!",
                rating=5,
                transition_period="3 months meat-free",
                admin_created=True
            )
        ]

        collection = await self.db.get_collection("testimonials")
        for testimonial in testimonials:
            await collection.replace_one(
                {"user_name": testimonial.user_name, "title": testimonial.title},
                testimonial.dict(),
                upsert=True
            )
        
        logger.info("Testimonials seeded successfully")

    async def seed_all(self):
        """Seed all data."""
        logger.info("Starting database seeding...")
        
        await self.seed_meat_cravings()
        await self.seed_alternatives()
        await self.seed_recipes()
        await self.seed_admin_user()
        await self.seed_testimonials()
        
        logger.info("Database seeding completed successfully")

# Create global instance
data_seeder = DataSeeder()