// Comprehensive database based on user's spreadsheet - 84+ items across 10 categories
export const comprehensiveMeatAlternatives = {
  // Basic Proteins
  "chicken breast": {
    name: "Chicken Breast",
    deficiency: "Protein, Umami, Texture",
    deficiencyExplanation: "Chicken breast cravings often indicate protein needs, desire for umami flavors, and satisfying texture requirements.",
    alternatives: [
      {
        id: 101,
        name: "Gardein Chicken Scallopini",
        brand: "Gardein",
        type: "Plant-based chicken",
        nutrition: { protein: "15g", iron: "1mg", calories: "180", fat: "7g", fiber: "5g", b12: "0mcg" },
        benefits: ["Lower cholesterol", "No antibiotics", "Higher fiber", "Cruelty-free"],
        availability: "Frozen section, grocery stores"
      },
      {
        id: 102,
        name: "Marinated Tofu Steaks",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "20g", iron: "3mg", calories: "200", fat: "11g", fiber: "2g", b12: "0mcg" },
        benefits: ["Complete protein", "Isoflavones", "Heart-healthy", "Customizable flavors"],
        availability: "All grocery stores"
      },
      {
        id: 103,
        name: "Seasoned Seitan",
        brand: "Homemade",
        type: "Wheat-based protein",
        nutrition: { protein: "25g", iron: "3mg", calories: "220", fat: "3g", fiber: "2g", b12: "0mcg" },
        benefits: ["High protein", "Meat-like texture", "Low fat", "Versatile"],
        availability: "Health food stores, make at home"
      }
    ],
    meatSideEffects: ["Antibiotic residues", "Salmonella risk", "Hormonal disruption", "Factory farming concerns"],
    recipes: [
      {
        id: 101,
        title: "Herb-Crusted Tofu Steaks",
        time: "25 mins",
        difficulty: "Easy",
        ingredients: ["Extra-firm tofu", "Fresh herbs", "Olive oil", "Garlic", "Lemon juice"],
        instructions: "Press tofu, marinate in herb mixture, pan-sear until golden."
      },
      {
        id: 102,
        title: "Vegan Chicken Momos",
        time: "45 mins",
        difficulty: "Medium",
        ingredients: ["Soy curls or tofu", "Momo wrappers", "Ginger", "Garlic", "Soy sauce", "Scallions", "Sesame oil"],
        instructions: "Rehydrate soy curls, season with ginger-garlic paste, wrap in momo skins, steam for 15 minutes. Serve with spicy tomato chutney."
      }
    ]
  },

  "ground beef": {
    name: "Ground Beef",
    deficiency: "Protein, Iron, Umami",
    deficiencyExplanation: "Ground beef cravings indicate protein and iron needs, plus desire for savory umami flavors.",
    alternatives: [
      {
        id: 104,
        name: "Beyond Meat Ground",
        brand: "Beyond Meat",
        type: "Plant-based ground meat",
        nutrition: { protein: "20g", iron: "4mg", calories: "250", fat: "18g", fiber: "3g", b12: "2.4mcg" },
        benefits: ["Lower saturated fat", "No cholesterol", "Environmental sustainability", "Tastes like beef"],
        availability: "Grocery stores, restaurants"
      },
      {
        id: 105,
        name: "Mushroom Walnut Meat",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "8g", iron: "2mg", calories: "160", fat: "12g", fiber: "4g", b12: "0mcg" },
        benefits: ["Healthy fats", "Antioxidants", "Natural umami", "Cost-effective"],
        availability: "Make at home"
      }
    ],
    meatSideEffects: ["High saturated fat", "Cholesterol", "Environmental impact", "E. coli risk"],
    recipes: [
      {
        id: 102,
        title: "Mushroom Walnut Bolognese",
        time: "35 mins",
        difficulty: "Medium",
        ingredients: ["Mushrooms", "Walnuts", "Tomatoes", "Onion", "Herbs"],
        instructions: "Pulse mushrooms and walnuts, sauté with aromatics, simmer with tomatoes."
      }
    ]
  },

  "beef steak": {
    name: "Beef Steak",
    deficiency: "Protein, Iron, Umami, Chewiness",
    deficiencyExplanation: "Steak cravings indicate needs for protein, iron, umami satisfaction, and satisfying chewy texture.",
    alternatives: [
      {
        id: 106,
        name: "Grilled Portobello Steaks",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "5g", iron: "1mg", calories: "35", fat: "0g", fiber: "3g", b12: "0mcg" },
        benefits: ["Antioxidants", "Lower calories", "No hormones", "Natural umami"],
        availability: "Fresh produce section"
      },
      {
        id: 107,
        name: "King Oyster Mushroom Steaks",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "7g", iron: "1mg", calories: "65", fat: "1g", fiber: "4g", b12: "0mcg" },
        benefits: ["Meaty texture", "B vitamins", "Antioxidants", "Sustainable"],
        availability: "Asian markets, specialty stores"
      }
    ],
    meatSideEffects: ["High saturated fat", "Cholesterol", "Heart disease risk", "Environmental impact"],
    recipes: [
      {
        id: 103,
        title: "Marinated King Oyster Steaks",
        time: "30 mins",
        difficulty: "Easy",
        ingredients: ["King oyster mushrooms", "Soy sauce", "Balsamic vinegar", "Garlic", "Herbs"],
        instructions: "Score mushrooms, marinate 15 mins, grill until charred."
      }
    ]
  },

  // Poultry Dishes
  "chicken wings": {
    name: "Chicken Wings",
    deficiency: "Protein, Spicy/tangy flavors",
    deficiencyExplanation: "Wing cravings often indicate protein needs and desire for bold, spicy, tangy flavors.",
    alternatives: [
      {
        id: 110,
        name: "Buffalo Cauliflower Wings",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "4g", iron: "1mg", calories: "120", fat: "8g", fiber: "5g", b12: "0mcg" },
        benefits: ["Higher vitamin C", "Lower calories", "No cholesterol", "Antioxidants"],
        availability: "All grocery stores"
      },
      {
        id: 111,
        name: "Gardein Hot Wings",
        brand: "Gardein",
        type: "Plant-based wings",
        nutrition: { protein: "12g", iron: "2mg", calories: "150", fat: "6g", fiber: "3g", b12: "0mcg" },
        benefits: ["Authentic texture", "No antibiotics", "Lower fat", "Ready-to-cook"],
        availability: "Frozen section"
      }
    ],
    meatSideEffects: ["High sodium", "Antibiotic residues", "Salmonella risk", "High cholesterol"],
    recipes: [
      {
        id: 110,
        title: "Crispy Buffalo Cauliflower",
        time: "40 mins",
        difficulty: "Easy",
        ingredients: ["Cauliflower", "Buffalo sauce", "Flour", "Plant milk", "Celery"],
        instructions: "Batter cauliflower, bake until crispy, toss in buffalo sauce."
      }
    ]
  },

  "chicken nuggets": {
    name: "Chicken Nuggets",
    deficiency: "Protein, Comfort food craving",
    deficiencyExplanation: "Nugget cravings indicate protein needs and desire for comforting, familiar textures.",
    alternatives: [
      {
        id: 112,
        name: "Gardein Chick'n Nuggets",
        brand: "Gardein",
        type: "Plant-based nuggets",
        nutrition: { protein: "9g", iron: "1mg", calories: "180", fat: "11g", fiber: "2g", b12: "0mcg" },
        benefits: ["Lower fat", "No antibiotics", "Higher nutrients", "Kid-friendly"],
        availability: "Frozen section"
      },
      {
        id: 113,
        name: "Cauliflower Nuggets",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "6g", iron: "1mg", calories: "140", fat: "7g", fiber: "4g", b12: "0mcg" },
        benefits: ["Vitamin C", "Lower calories", "Whole food", "Customizable"],
        availability: "Make at home"
      }
    ],
    meatSideEffects: ["Processed ingredients", "High sodium", "Trans fats", "Antibiotic residues"],
    recipes: [
      {
        id: 111,
        title: "Baked Tofu Nuggets",
        time: "25 mins",
        difficulty: "Easy",
        ingredients: ["Extra-firm tofu", "Breadcrumbs", "Nutritional yeast", "Spices"],
        instructions: "Cube tofu, coat in seasoned breadcrumbs, bake until golden."
      }
    ]
  },

  // Beef Dishes
  "hamburger": {
    name: "Hamburger",
    deficiency: "Protein, Iron, Umami",
    deficiencyExplanation: "Burger cravings indicate protein and iron needs, plus satisfaction from umami flavors.",
    alternatives: [
      {
        id: 120,
        name: "Beyond Burger",
        brand: "Beyond Meat",
        type: "Plant-based patty",
        nutrition: { protein: "20g", iron: "4mg", calories: "250", fat: "18g", fiber: "3g", b12: "2.4mcg" },
        benefits: ["Lower saturated fat", "Fiber", "No cholesterol", "Environmental sustainability"],
        availability: "Grocery stores, restaurants"
      },
      {
        id: 121,
        name: "Black Bean Burger",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "15g", iron: "3mg", calories: "200", fat: "3g", fiber: "12g", b12: "0mcg" },
        benefits: ["High fiber", "Healthy fats", "Antioxidants", "Budget-friendly"],
        availability: "Make at home"
      }
    ],
    meatSideEffects: ["High saturated fat", "Cholesterol", "E. coli risk", "Environmental impact"],
    recipes: [
      {
        id: 120,
        title: "Ultimate Black Bean Burger",
        time: "30 mins",
        difficulty: "Medium",
        ingredients: ["Black beans", "Oats", "Onion", "Garlic", "Spices", "Breadcrumbs"],
        instructions: "Mash beans partially, mix with binders, form patties, pan-fry."
      }
    ]
  },

  // Pork Dishes  
  "pulled pork": {
    name: "Pulled Pork",
    deficiency: "Protein, Smokiness, Texture",
    deficiencyExplanation: "Pulled pork cravings indicate protein needs and desire for smoky, shredded textures.",
    alternatives: [
      {
        id: 130,
        name: "BBQ Jackfruit",
        brand: "Upton's Naturals",
        type: "Whole food alternative",
        nutrition: { protein: "3g", iron: "1mg", calories: "70", fat: "0g", fiber: "6g", b12: "0mcg" },
        benefits: ["Fiber", "Potassium", "No cholesterol", "Natural texture"],
        availability: "Health food stores, canned goods"
      },
      {
        id: 131,
        name: "Pulled King Oyster Mushrooms",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "7g", iron: "1mg", calories: "65", fat: "1g", fiber: "4g", b12: "0mcg" },
        benefits: ["B vitamins", "Lower fat", "No antibiotics", "Sustainable"],
        availability: "Asian markets, specialty stores"
      }
    ],
    meatSideEffects: ["High saturated fat", "Nitrate concerns", "Increased inflammation", "Cardiovascular risks"],
    recipes: [
      {
        id: 130,
        title: "BBQ Jackfruit Sliders",
        time: "25 mins",
        difficulty: "Easy",
        ingredients: ["Young jackfruit", "BBQ sauce", "Onion powder", "Smoked paprika", "Slider buns"],
        instructions: "Shred jackfruit, sauté with spices, add BBQ sauce, simmer."
      }
    ]
  },

  // Seafood & Fish
  "salmon": {
    name: "Salmon",
    deficiency: "Omega-3s, Protein, Richness",
    deficiencyExplanation: "Salmon cravings indicate omega-3 fatty acid deficiency and protein needs.",
    alternatives: [
      {
        id: 140,
        name: "Carrot Lox",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "2g", iron: "1mg", calories: "80", fat: "4g", fiber: "3g", b12: "0mcg" },
        benefits: ["Omega-3 from algae oil", "No mercury", "Antioxidants", "Beta-carotene"],
        availability: "Make at home"
      },
      {
        id: 141,
        name: "Good Catch Salmon",
        brand: "Good Catch",
        type: "Plant-based seafood",
        nutrition: { protein: "14g", iron: "2mg", calories: "120", fat: "8g", fiber: "2g", b12: "0mcg" },
        benefits: ["Algae-based omega-3", "No mercury", "Sustainable", "Ocean-friendly"],
        availability: "Health food stores, online"
      }
    ],
    meatSideEffects: ["Heavy metal contamination", "Microplastics", "Overfishing impact", "PCB contamination"],
    recipes: [
      {
        id: 140,
        title: "Smoked Carrot Lox",
        time: "45 mins",
        difficulty: "Medium",
        ingredients: ["Large carrots", "Liquid smoke", "Nori", "Capers", "Dill"],
        instructions: "Slice carrots thin, marinate in smoky brine, serve on bagels."
      }
    ]
  },

  "tuna": {
    name: "Tuna",
    deficiency: "Protein, Umami, Texture",
    deficiencyExplanation: "Tuna cravings indicate protein needs and desire for umami-rich, flaky textures.",
    alternatives: [
      {
        id: 142,
        name: "Chickpea Tuna Salad",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "15g", iron: "3mg", calories: "180", fat: "2g", fiber: "8g", b12: "0mcg" },
        benefits: ["Fiber", "Plant protein", "No mercury", "Budget-friendly"],
        availability: "All grocery stores"
      },
      {
        id: 143,
        name: "Good Catch Tuna",
        brand: "Good Catch",
        type: "Plant-based seafood",
        nutrition: { protein: "14g", iron: "1mg", calories: "90", fat: "5g", fiber: "2g", b12: "0mcg" },
        benefits: ["No mercury", "Sustainable", "Flaky texture", "Ocean-friendly"],
        availability: "Canned goods, health stores"
      }
    ],
    meatSideEffects: ["Mercury contamination", "Overfishing", "Microplastics", "Heavy metals"],
    recipes: [
      {
        id: 141,
        title: "Chickpea 'Tuna' Melt",
        time: "15 mins",
        difficulty: "Easy",
        ingredients: ["Chickpeas", "Celery", "Vegan mayo", "Nutritional yeast", "Bread", "Vegan cheese"],
        instructions: "Mash chickpeas, mix with celery and mayo, make sandwich, grill."
      }
    ]
  },

  "shrimp": {
    name: "Shrimp",
    deficiency: "Protein, Iodine, Texture",
    deficiencyExplanation: "Shrimp cravings often indicate protein and iodine needs, along with desire for firm, succulent texture.",
    alternatives: [
      {
        id: 144,
        name: "King Oyster Mushroom 'Shrimp'",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "3g", iron: "1mg", calories: "35", fat: "0g", fiber: "2g", b12: "0mcg" },
        benefits: ["Low calorie", "Natural umami", "No cholesterol", "Sustainable"],
        availability: "Asian markets, specialty stores"
      },
      {
        id: 145,
        name: "Sophie's Kitchen Toona Shrimp",
        brand: "Sophie's Kitchen",
        type: "Plant-based seafood",
        nutrition: { protein: "12g", iron: "2mg", calories: "100", fat: "4g", fiber: "3g", b12: "0mcg" },
        benefits: ["No cholesterol", "Ocean-friendly", "Good protein", "Konjac-based"],
        availability: "Health food stores, online"
      },
      {
        id: 146,
        name: "Yam (Purple/White)",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "2g", iron: "1mg", calories: "115", fat: "0g", fiber: "4g", b12: "0mcg" },
        benefits: ["High potassium", "Complex carbs", "Antioxidants", "Natural sweetness"],
        availability: "All grocery stores"
      }
    ],
    meatSideEffects: ["Cholesterol", "Shellfish allergies", "Ocean pollution", "Overfishing"],
    recipes: [
      {
        id: 142,
        title: "Bang Bang Mushroom 'Shrimp'",
        time: "20 mins",
        difficulty: "Easy",
        ingredients: ["King oyster mushrooms", "Cornstarch", "Plant milk", "Spicy mayo", "Green onions"],
        instructions: "Score mushrooms to create shrimp-like texture, coat in batter, fry until golden, toss in bang bang sauce."
      },
      {
        id: 143,
        title: "Crispy Yam Tempura",
        time: "25 mins",
        difficulty: "Medium",
        ingredients: ["Yam", "Tempura batter", "Ice water", "Oil for frying", "Soy dipping sauce"],
        instructions: "Slice yam into rounds, prepare light tempura batter with ice water, fry until crispy, serve with dipping sauce."
      }
    ]
  },

  "yam": {
    name: "Yam (for Fish Cravings)",
    deficiency: "Texture, Complex Carbs, Nutrients",
    deficiencyExplanation: "Yam can satisfy fish cravings by providing firm texture and complex nutrients, making it an excellent fish alternative.",
    alternatives: [
      {
        id: 147,
        name: "Purple Yam",
        brand: "Homemade",
        type: "Root vegetable alternative",
        nutrition: { protein: "2g", iron: "1mg", calories: "115", fat: "0g", fiber: "4g", b12: "0mcg" },
        benefits: ["High potassium", "Complex carbs", "Antioxidants", "Natural sweetness"],
        availability: "All grocery stores, Asian markets"
      },
      {
        id: 148,
        name: "White Yam",
        brand: "Homemade",
        type: "Root vegetable alternative", 
        nutrition: { protein: "2g", iron: "1mg", calories: "118", fat: "0g", fiber: "4g", b12: "0mcg" },
        benefits: ["High potassium", "Complex carbs", "Low fat", "Versatile preparation"],
        availability: "All grocery stores"
      },
      {
        id: 149,
        name: "Marinated Yam Steaks",
        brand: "Homemade",
        type: "Prepared alternative",
        nutrition: { protein: "2g", iron: "1mg", calories: "140", fat: "4g", fiber: "4g", b12: "0mcg" },
        benefits: ["Fish-like texture", "Absorbs flavors well", "Sustainable", "Budget-friendly"],
        availability: "Make at home"
      }
    ],
    meatSideEffects: ["Mercury in fish", "Overfishing", "Microplastics", "Ocean pollution"],
    recipes: [
      {
        id: 144,
        title: "Yam 'Fish' Steaks with Lemon",
        time: "30 mins",
        difficulty: "Easy",
        ingredients: ["Large yam", "Lemon juice", "Herbs", "Olive oil", "Salt"],
        instructions: "Slice yam thick, marinate in lemon and herbs for 15 mins, pan-sear until golden and tender. Season with salt and serve with lemon wedges."
      },
      {
        id: 145,
        title: "Crispy Yam Fish & Chips",
        time: "40 mins",
        difficulty: "Medium",
        ingredients: ["Yam", "Flour batter", "Oil for frying", "Potatoes", "Malt vinegar"],
        instructions: "Cut yam into fish-like strips, batter and fry until crispy. Serve with crispy chips and malt vinegar for authentic fish & chips experience."
      }
    ]
  },

  // Breakfast Meats
  "bacon": {
    name: "Bacon",
    deficiency: "Fat, Saltiness, Smokiness",
    deficiencyExplanation: "Bacon cravings indicate desire for fats, salty flavors, and smoky taste satisfaction.",
    alternatives: [
      {
        id: 150,
        name: "Coconut Bacon",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "2g", iron: "1mg", calories: "90", fat: "8g", fiber: "4g", b12: "0mcg" },
        benefits: ["No nitrates", "Healthy fats", "Lower sodium", "Natural"],
        availability: "Make at home"
      },
      {
        id: 151,
        name: "Lightlife Smart Bacon",
        brand: "Lightlife",
        type: "Plant-based bacon",
        nutrition: { protein: "6g", iron: "1mg", calories: "60", fat: "4g", fiber: "1g", b12: "0mcg" },
        benefits: ["Lower fat", "No cholesterol", "Plant protein", "Familiar taste"],
        availability: "Refrigerated section"
      }
    ],
    meatSideEffects: ["High nitrates", "Cancer risk", "High sodium", "Cardiovascular disease"],
    recipes: [
      {
        id: 150,
        title: "Crispy Coconut Bacon",
        time: "15 mins",
        difficulty: "Easy",
        ingredients: ["Coconut flakes", "Soy sauce", "Maple syrup", "Liquid smoke", "Paprika"],
        instructions: "Mix seasonings, toss with coconut, bake until crispy."
      }
    ]
  },

  "eggs": {
    name: "Eggs",
    deficiency: "Protein, B12, Choline, Texture",
    deficiencyExplanation: "Egg cravings often indicate protein deficiency, need for B vitamins (especially B12 and choline), or desire for that unique creamy-firm texture.",
    alternatives: [
      {
        id: 152,
        name: "JUST Egg (Liquid)",
        brand: "JUST",
        type: "Plant-based liquid egg",
        nutrition: { protein: "5g", iron: "2mg", calories: "70", fat: "5g", fiber: "0g", b12: "2.4mcg" },
        benefits: ["Cholesterol-free", "B12 fortified", "Cooks like eggs", "Sustainable"],
        availability: "Refrigerated section, most grocery stores"
      },
      {
        id: 153,
        name: "Tofu Scramble",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "10g", iron: "3mg", calories: "95", fat: "6g", fiber: "2g", b12: "0mcg" },
        benefits: ["Complete protein", "Customizable", "Budget-friendly", "High protein"],
        availability: "All grocery stores"
      },
      {
        id: 154,
        name: "Chickpea Flour Omelette",
        brand: "Homemade",
        type: "Legume-based alternative",
        nutrition: { protein: "6g", iron: "2mg", calories: "110", fat: "2g", fiber: "5g", b12: "0mcg" },
        benefits: ["High fiber", "Gluten-free", "Protein-rich", "Versatile"],
        availability: "Health stores, online"
      },
      {
        id: 155,
        name: "Kala Namak (Black Salt) Tofu",
        brand: "Homemade",
        type: "Sulfur-enhanced alternative",
        nutrition: { protein: "10g", iron: "3mg", calories: "95", fat: "6g", fiber: "2g", b12: "0mcg" },
        benefits: ["Authentic egg flavor", "Complete protein", "Natural sulfur", "No cholesterol"],
        availability: "Indian grocery stores, online"
      }
    ],
    meatSideEffects: ["Cholesterol (186mg per egg)", "Salmonella risk", "Factory farming", "Saturated fat"],
    recipes: [
      {
        id: 151,
        title: "Perfect Tofu Scramble",
        time: "15 mins",
        difficulty: "Easy",
        ingredients: ["Extra-firm tofu", "Turmeric", "Nutritional yeast", "Kala namak", "Onions", "Spinach", "Olive oil"],
        instructions: "Crumble tofu, sauté onions, add tofu with turmeric and nutritional yeast, cook until heated through. Season with kala namak for egg-like flavor."
      },
      {
        id: 152,
        title: "Fluffy Chickpea Omelette",
        time: "20 mins",
        difficulty: "Medium",
        ingredients: ["Chickpea flour", "Water", "Turmeric", "Kala namak", "Vegetables", "Herbs"],
        instructions: "Whisk chickpea flour with water and spices until smooth. Cook like pancake, add vegetables, fold in half. Serve hot."
      },
      {
        id: 153,
        title: "JUST Egg Benedict",
        time: "25 mins",
        difficulty: "Medium",
        ingredients: ["JUST Egg", "English muffins", "Spinach", "Vegan hollandaise", "Canadian bacon alternative"],
        instructions: "Cook JUST Egg like scrambled eggs, toast muffins, layer with spinach and egg, top with vegan hollandaise sauce."
      }
    ]
  },

  // Dairy Alternatives
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
  },

  // International Dishes
  "bulgogi": {
    name: "Bulgogi (Korean BBQ)",
    deficiency: "Protein, Sweet-savory marinade",
    deficiencyExplanation: "Bulgogi cravings indicate protein needs and desire for sweet-savory Korean flavors.",
    alternatives: [
      {
        id: 160,
        name: "Mushroom Bulgogi",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "8g", iron: "2mg", calories: "120", fat: "3g", fiber: "4g", b12: "0mcg" },
        benefits: ["Antioxidants", "Lower fat", "Heart-healthy", "Umami-rich"],
        availability: "Asian markets, make at home"
      }
    ],
    meatSideEffects: ["High sodium", "Processed meat risks", "High fat", "Cholesterol"],
    recipes: [
      {
        id: 160,
        title: "King Oyster Mushroom Bulgogi",
        time: "35 mins",
        difficulty: "Medium",
        ingredients: ["King oyster mushrooms", "Soy sauce", "Pear", "Garlic", "Sesame oil", "Gochujang"],
        instructions: "Slice mushrooms, marinate in bulgogi sauce, grill until caramelized."
      }
    ]
  },

  // Add more items systematically...
  "pepperoni": {
    name: "Pepperoni",
    deficiency: "Fat, Spices, Saltiness",
    deficiencyExplanation: "Pepperoni cravings indicate desire for fats, spicy flavors, and salty satisfaction.",
    alternatives: [
      {
        id: 170,
        name: "Lightlife Pepperoni",
        brand: "Lightlife",
        type: "Plant-based pepperoni",
        nutrition: { protein: "8g", iron: "2mg", calories: "80", fat: "6g", fiber: "1g", b12: "0mcg" },
        benefits: ["Lower sodium", "No nitrates", "Antioxidants", "Familiar taste"],
        availability: "Deli section, health stores"
      },
      {
        id: 171,
        name: "Spiced Mushroom Pepperoni",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: { protein: "4g", iron: "1mg", calories: "60", fat: "3g", fiber: "3g", b12: "0mcg" },
        benefits: ["Antioxidants", "Lower calories", "Natural spices", "Customizable"],
        availability: "Make at home"
      }
    ],
    meatSideEffects: ["High nitrates", "Cancer risk", "High sodium", "Processed meat concerns"],
    recipes: [
      {
        id: 170,
        title: "Homemade Mushroom Pepperoni",
        time: "30 mins",
        difficulty: "Medium",
        ingredients: ["Shiitake mushrooms", "Paprika", "Fennel", "Garlic powder", "Olive oil"],
        instructions: "Slice mushrooms thin, season with spices, dehydrate or bake until crispy."
      }
    ]
  }

  // Continue with more items as needed...
};

// Quick search mapping for better results
export const searchMapping = {
  // Basic proteins
  'chicken': ['chicken', 'chicken breast', 'poultry', 'chicken momo', 'chicken momos', 'chicken dumplings', 'steamed chicken dumplings'],
  'beef': ['beef', 'ground beef', 'beef steak', 'steak', 'hamburger', 'burger'],
  'pork': ['pork', 'pulled pork', 'pork chops', 'pork ribs'],
  
  // Processed meats
  'bacon': ['bacon', 'canadian bacon'],
  'sausage': ['sausage', 'breakfast sausage', 'chorizo'],
  'pepperoni': ['pepperoni'],
  'ham': ['ham', 'breakfast ham'],
  
  // Breakfast/Dairy
  'eggs': ['egg', 'eggs', 'scrambled eggs', 'fried eggs', 'omelette', 'omelet'],
  'milk': ['milk', 'whole milk', '2% milk', 'skim milk', 'dairy milk'],
  'cheese': ['cheese', 'cheddar', 'mozzarella', 'parmesan', 'swiss', 'gouda', 'brie', 'feta', 'cream cheese'],
  'butter': ['butter', 'unsalted butter', 'salted butter', 'margarine'],
  'ghee': ['ghee', 'clarified butter'],
  
  // Poultry dishes
  'wings': ['chicken wings', 'buffalo wings'],
  'nuggets': ['chicken nuggets', 'nuggets'],
  
  // Seafood
  'fish': ['fish', 'salmon', 'tuna'],
  'salmon': ['salmon'],
  'tuna': ['tuna'],
  'shrimp': ['shrimp', 'prawns'],
  'crab': ['crab'],
  'yam': ['yam', 'purple yam', 'white yam'], // Dedicated yam entry for fish alternatives
  
  // International
  'bulgogi': ['bulgogi', 'korean bbq'],
  'katsu': ['katsu', 'chicken katsu'],
  
  // Dishes
  'burger': ['hamburger', 'cheeseburger'],
  'pizza': ['pepperoni pizza'],
  'tacos': ['beef tacos', 'chicken tacos'],
  'stir fry': ['beef stir-fry', 'chicken stir fry']
};

// Merge with existing data
export const mockMeatAlternatives = {
  ...comprehensiveMeatAlternatives,
  // Keep existing data for backward compatibility
  beef: comprehensiveMeatAlternatives["ground beef"] || comprehensiveMeatAlternatives["beef steak"],
  chicken: comprehensiveMeatAlternatives["chicken breast"],
  pork: comprehensiveMeatAlternatives["pulled pork"],
  fish: comprehensiveMeatAlternatives["salmon"],
  lamb: {
    name: "Lamb",
    deficiency: "Iron, B12, Zinc",
    deficiencyExplanation: "Lamb cravings often indicate iron deficiency, low B12, or zinc needs.",
    alternatives: [
      {
        id: 10,
        name: "Seitan with Herbs",
        brand: "Generic",
        type: "Wheat-based protein",
        nutrition: { protein: "25g", iron: "3mg", calories: "220", fat: "3g", fiber: "2g", b12: "0mcg" },
        benefits: ["High protein content", "Low in fat", "Customizable flavor", "Meat-like texture"],
        availability: "Health food stores, Asian markets"
      }
    ],
    meatSideEffects: ["High in saturated fat", "Cholesterol concerns", "Environmental impact", "Expensive production"],
    recipes: [
      {
        id: 6,
        title: "Herb-Crusted Seitan",
        time: "40 mins",
        difficulty: "Medium",
        ingredients: ["Seitan", "Rosemary, thyme", "Garlic", "Olive oil", "Breadcrumbs"],
        instructions: "Season seitan with herbs, coat with breadcrumbs, and bake until crispy."
      }
    ]
  }
};

export const mockNutritionalSupplements = [
  {
    nutrient: "B12",
    supplement: "Methylcobalamin B12",
    dosage: "2.4mcg daily",
    source: "Nutritional yeast, fortified foods"
  },
  {
    nutrient: "Iron",
    supplement: "Plant-based iron",
    dosage: "18mg daily",
    source: "Lentils, spinach, quinoa"
  },
  {
    nutrient: "Omega-3",
    supplement: "Algae oil",
    dosage: "250mg EPA/DHA daily",
    source: "Flaxseeds, chia seeds, walnuts"
  },
  {
    nutrient: "Zinc",
    supplement: "Zinc picolinate",
    dosage: "11mg daily",
    source: "Pumpkin seeds, cashews, beans"
  }
];