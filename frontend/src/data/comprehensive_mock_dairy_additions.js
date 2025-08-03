// Additional dairy entries to be merged into comprehensive_mock.js
// This contains milk, cheese, butter, ghee, and other dairy alternatives

export const dairyAlternatives = {
  "milk": {
    name: "Milk",
    deficiency: "Protein, Calcium, Creaminess",
    deficiencyExplanation: "Milk cravings indicate protein or calcium needs, or desire for creamy texture in cooking and beverages.",
    alternatives: [
      {
        id: 200,
        name: "Oat Milk",
        brand: "Oatly",
        type: "Plant-based milk",
        nutrition: { protein: "3g", iron: "0mg", calories: "80", fat: "3g", fiber: "2g", b12: "1.5mcg" },
        benefits: ["Naturally creamy", "Beta-glucan fiber", "No cholesterol", "Environmentally friendly"],
        availability: "All grocery stores"
      },
      {
        id: 201,
        name: "Soy Milk (Unsweetened)",
        brand: "Silk",
        type: "Plant-based milk",
        nutrition: { protein: "7g", iron: "1mg", calories: "80", fat: "4g", fiber: "1g", b12: "3mcg" },
        benefits: ["Complete protein", "Calcium fortified", "B12 fortified", "Versatile"],
        availability: "All grocery stores"
      },
      {
        id: 202,
        name: "Almond Milk",
        brand: "Califia Farms",
        type: "Plant-based milk",
        nutrition: { protein: "1g", iron: "0mg", calories: "50", fat: "4g", fiber: "0g", b12: "0mcg" },
        benefits: ["Low calorie", "Vitamin E", "Light texture", "Long shelf life"],
        availability: "All grocery stores"
      },
      {
        id: 203,
        name: "Cashew Milk",
        brand: "So Delicious",
        type: "Plant-based milk",
        nutrition: { protein: "1g", iron: "0mg", calories: "60", fat: "4g", fiber: "0g", b12: "0mcg" },
        benefits: ["Naturally creamy", "Rich texture", "Good for coffee", "Neutral flavor"],
        availability: "Most grocery stores"
      }
    ],
    meatSideEffects: ["Lactose intolerance", "Hormones", "Saturated fat", "Dairy industry concerns"],
    recipes: [
      {
        id: 200,
        title: "Homemade Oat Milk",
        time: "10 mins",
        difficulty: "Easy",
        ingredients: ["Rolled oats", "Water", "Vanilla extract", "Salt", "Dates (optional)"],
        instructions: "Blend oats with water for 30 seconds, strain through cheesecloth. Add vanilla and salt. Sweeten with dates if desired."
      }
    ]
  },

  "cheese": {
    name: "Cheese",
    deficiency: "Protein, Fat, Saltiness, Umami",
    deficiencyExplanation: "Cheese cravings indicate protein and fat needs, plus desire for salty, umami-rich flavors.",
    alternatives: [
      {
        id: 210,
        name: "Miyoko's Cultured Cashew Cheese",
        brand: "Miyoko's",
        type: "Artisanal plant cheese",
        nutrition: { protein: "1g", iron: "0mg", calories: "70", fat: "7g", fiber: "0g", b12: "0mcg" },
        benefits: ["Cultured flavor", "Melts well", "No cholesterol", "Probiotic cultures"],
        availability: "Health food stores, Whole Foods"
      },
      {
        id: 211,
        name: "Violife Cheddar Shreds",
        brand: "Violife",
        type: "Plant-based cheese",
        nutrition: { protein: "1g", iron: "0mg", calories: "80", fat: "7g", fiber: "0g", b12: "2.5mcg" },
        benefits: ["Melts perfectly", "B12 fortified", "Great for pizza", "Familiar taste"],
        availability: "Most grocery stores"
      },
      {
        id: 212,
        name: "Nutritional Yeast",
        brand: "Bragg",
        type: "Cheese flavoring",
        nutrition: { protein: "8g", iron: "2mg", calories: "60", fat: "1g", fiber: "4g", b12: "24mcg" },
        benefits: ["High B12", "Complete protein", "Natural umami", "Versatile seasoning"],
        availability: "All grocery stores"
      },
      {
        id: 213,
        name: "Cashew Cheese Sauce",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "4g", iron: "1mg", calories: "120", fat: "10g", fiber: "1g", b12: "0mcg" },
        benefits: ["No additives", "Customizable flavor", "Rich and creamy", "Budget-friendly"],
        availability: "Make at home"
      }
    ],
    meatSideEffects: ["High saturated fat", "Lactose intolerance", "Hormones", "High sodium"],
    recipes: [
      {
        id: 210,
        title: "Ultimate Cashew Cheese Sauce",
        time: "20 mins",
        difficulty: "Easy",
        ingredients: ["Cashews (soaked)", "Nutritional yeast", "Lemon juice", "Garlic", "Salt", "Water"],
        instructions: "Soak cashews 2 hours, blend with other ingredients until smooth. Adjust consistency with water. Season to taste."
      }
    ]
  },

  "butter": {
    name: "Butter",
    deficiency: "Fat, Richness, Comfort",
    deficiencyExplanation: "Butter cravings indicate need for healthy fats and desire for rich, comforting flavors in cooking.",
    alternatives: [
      {
        id: 220,
        name: "Earth Balance Buttery Spread",
        brand: "Earth Balance",
        type: "Plant-based butter",
        nutrition: { protein: "0g", iron: "0mg", calories: "100", fat: "11g", fiber: "0g", b12: "0mcg" },
        benefits: ["No dairy", "Good for baking", "Familiar taste", "Widely available"],
        availability: "All grocery stores"
      },
      {
        id: 221,
        name: "Miyoko's Cultured Vegan Butter",
        brand: "Miyoko's",
        type: "Artisanal plant butter",
        nutrition: { protein: "0g", iron: "0mg", calories: "90", fat: "10g", fiber: "0g", b12: "0mcg" },
        benefits: ["European-style", "Cultured flavor", "Premium quality", "Perfect for pastry"],
        availability: "Health food stores, Whole Foods"
      },
      {
        id: 222,
        name: "Coconut Oil",
        brand: "Spectrum",
        type: "Whole food fat",
        nutrition: { protein: "0g", iron: "0mg", calories: "120", fat: "14g", fiber: "0g", b12: "0mcg" },
        benefits: ["Natural", "High smoke point", "Stable fat", "Coconut flavor"],
        availability: "All grocery stores"
      },
      {
        id: 223,
        name: "Avocado",
        brand: "Fresh",
        type: "Whole food fat",
        nutrition: { protein: "2g", iron: "1mg", calories: "160", fat: "15g", fiber: "7g", b12: "0mcg" },
        benefits: ["Healthy monounsaturated fats", "Fiber", "Potassium", "Natural"],
        availability: "All grocery stores"
      }
    ],
    meatSideEffects: ["High saturated fat", "Cholesterol", "Dairy hormones", "Inflammatory"],
    recipes: [
      {
        id: 220,
        title: "Herb Compound Butter (Vegan)",
        time: "15 mins",
        difficulty: "Easy",
        ingredients: ["Vegan butter", "Fresh herbs", "Garlic", "Salt", "Lemon zest"],
        instructions: "Soften vegan butter, mix with minced herbs, garlic, salt, and lemon zest. Roll in parchment, chill until firm."
      }
    ]
  },

  "ghee": {
    name: "Ghee",
    deficiency: "Healthy Fats, High-Heat Cooking",
    deficiencyExplanation: "Ghee cravings indicate need for stable cooking fats and rich, nutty flavors in traditional cooking.",
    alternatives: [
      {
        id: 230,
        name: "Fourth & Heart Vegan Ghee",
        brand: "Fourth & Heart",
        type: "Plant-based ghee",
        nutrition: { protein: "0g", iron: "0mg", calories: "120", fat: "14g", fiber: "0g", b12: "0mcg" },
        benefits: ["High smoke point", "Authentic flavor", "No dairy", "Perfect for Indian cooking"],
        availability: "Health food stores, online"
      },
      {
        id: 231,
        name: "Coconut Ghee",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "0g", iron: "0mg", calories: "120", fat: "14g", fiber: "0g", b12: "0mcg" },
        benefits: ["Natural", "High smoke point", "Shelf stable", "Traditional method"],
        availability: "Make at home"
      },
      {
        id: 232,
        name: "Avocado Oil",
        brand: "Chosen Foods",
        type: "Plant-based cooking oil",
        nutrition: { protein: "0g", iron: "0mg", calories: "120", fat: "14g", fiber: "0g", b12: "0mcg" },
        benefits: ["Highest smoke point", "Neutral flavor", "Heart-healthy", "Versatile"],
        availability: "All grocery stores"
      }
    ],
    meatSideEffects: ["Dairy-derived", "High saturated fat", "Cholesterol", "Not suitable for lactose intolerant"],
    recipes: [
      {
        id: 230,
        title: "Homemade Coconut Ghee",
        time: "30 mins",
        difficulty: "Medium",
        ingredients: ["Coconut oil", "Cashews", "Turmeric", "Salt"],
        instructions: "Blend coconut oil with soaked cashews, add turmeric for color, strain and cook until nutty aroma develops."
      }
    ]
  }
};

// Search mapping additions for dairy
export const dairySearchMapping = {
  'milk': ['milk', 'whole milk', '2% milk', 'skim milk', 'dairy milk'],
  'cheese': ['cheese', 'cheddar', 'mozzarella', 'parmesan', 'swiss', 'gouda', 'brie', 'feta', 'cream cheese'],
  'butter': ['butter', 'unsalted butter', 'salted butter', 'margarine'],
  'ghee': ['ghee', 'clarified butter'],
  'yogurt': ['yogurt', 'greek yogurt', 'plain yogurt'],
  'cream': ['heavy cream', 'whipping cream', 'sour cream', 'cream'],
  'ice cream': ['ice cream', 'gelato', 'frozen yogurt']
};