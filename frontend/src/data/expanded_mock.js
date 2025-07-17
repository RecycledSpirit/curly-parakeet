// Extended mock data for more meat types
export const extendedMeatAlternatives = {
  duck: {
    name: "Duck",
    deficiency: "Iron, B12, Protein",
    deficiencyExplanation: "Duck cravings often indicate iron deficiency, B12 needs, or protein requirements. Duck is rich in these nutrients but comes with health concerns.",
    alternatives: [
      {
        id: 11,
        name: "Jackfruit 'Duck'",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: {
          protein: "12g",
          iron: "2mg",
          calories: "160",
          fat: "1g",
          fiber: "6g",
          b12: "0mcg"
        },
        benefits: [
          "Natural whole food",
          "High in fiber",
          "Low in fat",
          "Sustainable"
        ],
        availability: "Asian markets, health food stores"
      },
      {
        id: 12,
        name: "Seitan 'Duck'",
        brand: "Homemade",
        type: "Wheat-based protein",
        nutrition: {
          protein: "20g",
          iron: "3mg",
          calories: "200",
          fat: "2g",
          fiber: "1g",
          b12: "0mcg"
        },
        benefits: [
          "High protein",
          "Meat-like texture",
          "Versatile seasoning",
          "Low fat"
        ],
        availability: "Health food stores"
      }
    ],
    meatSideEffects: [
      "High in saturated fat",
      "Cholesterol concerns",
      "Potential bacteria contamination",
      "Environmental impact"
    ],
    recipes: [
      {
        id: 7,
        title: "Asian-Style Jackfruit 'Duck'",
        time: "40 mins",
        difficulty: "Medium",
        ingredients: [
          "1 can young jackfruit",
          "Soy sauce",
          "Hoisin sauce",
          "Five-spice powder",
          "Ginger, garlic"
        ],
        instructions: "Drain jackfruit, season with Asian spices, pan-fry until crispy."
      }
    ]
  },
  turkey: {
    name: "Turkey",
    deficiency: "Protein, Niacin, Selenium",
    deficiencyExplanation: "Turkey cravings may indicate protein deficiency, low niacin levels, or selenium needs. These nutrients support metabolism and immune function.",
    alternatives: [
      {
        id: 13,
        name: "Tofurky Roast",
        brand: "Tofurky",
        type: "Plant-based meat",
        nutrition: {
          protein: "18g",
          iron: "2mg",
          calories: "190",
          fat: "8g",
          fiber: "4g",
          b12: "1.2mcg"
        },
        benefits: [
          "Holiday tradition friendly",
          "Complete protein",
          "Fortified with B12",
          "Lower in sodium"
        ],
        availability: "Grocery stores, especially during holidays"
      },
      {
        id: 14,
        name: "Cauliflower Turkey Roast",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: {
          protein: "8g",
          iron: "1mg",
          calories: "120",
          fat: "5g",
          fiber: "5g",
          b12: "0mcg"
        },
        benefits: [
          "Low in calories",
          "High in fiber",
          "Rich in vitamins",
          "Whole food based"
        ],
        availability: "All grocery stores"
      }
    ],
    meatSideEffects: [
      "Antibiotic residues",
      "Salmonella risk",
      "Processing chemicals",
      "Factory farming concerns"
    ],
    recipes: [
      {
        id: 8,
        title: "Stuffed Cauliflower Turkey",
        time: "60 mins",
        difficulty: "Hard",
        ingredients: [
          "1 large cauliflower head",
          "Breadcrumb stuffing",
          "Vegetable broth",
          "Herbs and spices",
          "Nutritional yeast"
        ],
        instructions: "Hollow out cauliflower, stuff with seasoned breadcrumbs, roast until tender."
      }
    ]
  },
  shrimp: {
    name: "Shrimp",
    deficiency: "Omega-3, Iodine, Protein",
    deficiencyExplanation: "Shrimp cravings typically indicate omega-3 deficiency, iodine needs, or protein requirements. These nutrients support brain and thyroid health.",
    alternatives: [
      {
        id: 15,
        name: "King Oyster Mushroom Scallops",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: {
          protein: "10g",
          iron: "1mg",
          calories: "100",
          fat: "1g",
          fiber: "4g",
          b12: "0mcg"
        },
        benefits: [
          "Sea-like texture",
          "Natural umami",
          "Low calories",
          "Sustainable"
        ],
        availability: "Asian markets, health food stores"
      },
      {
        id: 16,
        name: "Sophie's Kitchen Shrimp",
        brand: "Sophie's Kitchen",
        type: "Plant-based seafood",
        nutrition: {
          protein: "12g",
          iron: "2mg",
          calories: "110",
          fat: "6g",
          fiber: "2g",
          b12: "0mcg"
        },
        benefits: [
          "Ocean-free",
          "No mercury",
          "Sustainable",
          "Realistic texture"
        ],
        availability: "Health food stores, online"
      }
    ],
    meatSideEffects: [
      "High cholesterol",
      "Heavy metal contamination",
      "Microplastics",
      "Overfishing impact"
    ],
    recipes: [
      {
        id: 9,
        title: "Mushroom 'Shrimp' Scampi",
        time: "25 mins",
        difficulty: "Easy",
        ingredients: [
          "King oyster mushrooms",
          "Garlic, lemon",
          "White wine",
          "Pasta",
          "Nutritional yeast"
        ],
        instructions: "Slice mushrooms, sauté with garlic and lemon, serve over pasta."
      }
    ]
  },
  crab: {
    name: "Crab",
    deficiency: "Omega-3, Zinc, B12",
    deficiencyExplanation: "Crab cravings often indicate omega-3 deficiency, zinc needs, or B12 requirements. These nutrients support brain function and immune health.",
    alternatives: [
      {
        id: 17,
        name: "Hearts of Palm Crab",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: {
          protein: "6g",
          iron: "2mg",
          calories: "80",
          fat: "0g",
          fiber: "4g",
          b12: "0mcg"
        },
        benefits: [
          "Naturally flaky texture",
          "Low calories",
          "High in fiber",
          "Sustainable"
        ],
        availability: "Canned goods section"
      },
      {
        id: 18,
        name: "Good Catch Crab Cakes",
        brand: "Good Catch",
        type: "Plant-based seafood",
        nutrition: {
          protein: "14g",
          iron: "1mg",
          calories: "140",
          fat: "8g",
          fiber: "3g",
          b12: "0mcg"
        },
        benefits: [
          "No ocean exploitation",
          "Mercury-free",
          "Omega-3 from algae",
          "Sustainable"
        ],
        availability: "Frozen section, health food stores"
      }
    ],
    meatSideEffects: [
      "High cholesterol",
      "Heavy metal contamination",
      "Microplastics",
      "Overfishing impact"
    ],
    recipes: [
      {
        id: 10,
        title: "Hearts of Palm Crab Cakes",
        time: "30 mins",
        difficulty: "Medium",
        ingredients: [
          "Hearts of palm",
          "Breadcrumbs",
          "Vegan mayo",
          "Old Bay seasoning",
          "Lemon juice"
        ],
        instructions: "Shred hearts of palm, mix with seasonings, form into patties and pan-fry."
      }
    ]
  },
  oysters: {
    name: "Oysters",
    deficiency: "Zinc, B12, Iron",
    deficiencyExplanation: "Oyster cravings typically indicate zinc deficiency, B12 needs, or iron requirements. These nutrients support immune function and energy production.",
    alternatives: [
      {
        id: 19,
        name: "Mushroom 'Oysters'",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: {
          protein: "8g",
          iron: "2mg",
          calories: "90",
          fat: "1g",
          fiber: "3g",
          b12: "0mcg"
        },
        benefits: [
          "Natural umami",
          "Low calories",
          "Rich in minerals",
          "Sustainable"
        ],
        availability: "Fresh mushrooms section"
      }
    ],
    meatSideEffects: [
      "Heavy metal contamination",
      "Bacteria risk",
      "Microplastics",
      "Ocean pollution"
    ],
    recipes: [
      {
        id: 11,
        title: "Mushroom 'Oysters' Rockefeller",
        time: "35 mins",
        difficulty: "Medium",
        ingredients: [
          "Oyster mushrooms",
          "Spinach",
          "Cashew cream",
          "Nutritional yeast",
          "Herbs"
        ],
        instructions: "Stuff mushrooms with spinach mixture, bake until golden."
      }
    ]
  },
  sausage: {
    name: "Sausage",
    deficiency: "Protein, B1, Iron",
    deficiencyExplanation: "Sausage cravings often indicate protein deficiency, thiamine (B1) needs, or iron requirements. These nutrients support energy metabolism and oxygen transport.",
    alternatives: [
      {
        id: 20,
        name: "Beyond Sausage",
        brand: "Beyond Meat",
        type: "Plant-based meat",
        nutrition: {
          protein: "14g",
          iron: "2mg",
          calories: "190",
          fat: "12g",
          fiber: "1g",
          b12: "0mcg"
        },
        benefits: [
          "No nitrates",
          "Lower sodium",
          "Plant-based protein",
          "Authentic taste"
        ],
        availability: "Grocery stores, restaurants"
      },
      {
        id: 21,
        name: "Homemade Lentil Sausage",
        brand: "Homemade",
        type: "Whole food alternative",
        nutrition: {
          protein: "12g",
          iron: "4mg",
          calories: "150",
          fat: "2g",
          fiber: "8g",
          b12: "0mcg"
        },
        benefits: [
          "High fiber",
          "Natural ingredients",
          "Cost-effective",
          "Customizable spices"
        ],
        availability: "Make at home"
      }
    ],
    meatSideEffects: [
      "High in nitrates",
      "Increased cancer risk",
      "High sodium",
      "Processed meat concerns"
    ],
    recipes: [
      {
        id: 12,
        title: "Spicy Lentil Sausage",
        time: "45 mins",
        difficulty: "Medium",
        ingredients: [
          "Red lentils",
          "Fennel seeds",
          "Paprika",
          "Garlic powder",
          "Vital wheat gluten"
        ],
        instructions: "Cook lentils, blend with spices, form into sausage shapes and steam."
      }
    ]
  }
};

// Merge with existing mock data
export const mockMeatAlternatives = {
  beef: {
    name: "Beef",
    deficiency: "Iron, B12, Protein",
    deficiencyExplanation: "Beef cravings often indicate low iron levels, B12 deficiency, or protein needs. These nutrients are essential for energy production and red blood cell formation.",
    alternatives: [
      {
        id: 1,
        name: "Beyond Beef",
        brand: "Beyond Meat",
        type: "Plant-based ground meat",
        nutrition: {
          protein: "20g",
          iron: "4mg",
          calories: "250",
          fat: "18g",
          fiber: "3g",
          b12: "2.4mcg"
        },
        benefits: [
          "35% less saturated fat than beef",
          "No cholesterol",
          "Rich in plant-based protein",
          "Environmental sustainability"
        ],
        availability: "Grocery stores, restaurants"
      },
      {
        id: 2,
        name: "Lentils & Mushrooms",
        brand: "Generic",
        type: "Whole food combination",
        nutrition: {
          protein: "18g",
          iron: "6mg",
          calories: "180",
          fat: "1g",
          fiber: "8g",
          b12: "0mcg"
        },
        benefits: [
          "High in fiber",
          "Low in saturated fat",
          "Rich in folate",
          "Cost-effective"
        ],
        availability: "All grocery stores"
      },
      {
        id: 3,
        name: "Impossible Burger",
        brand: "Impossible Foods",
        type: "Plant-based patty",
        nutrition: {
          protein: "19g",
          iron: "4mg",
          calories: "240",
          fat: "14g",
          fiber: "3g",
          b12: "2.4mcg"
        },
        benefits: [
          "Heme iron from plants",
          "No antibiotics",
          "Lower greenhouse gas emissions",
          "Tastes like beef"
        ],
        availability: "Restaurants, grocery stores"
      }
    ],
    meatSideEffects: [
      "Increased risk of heart disease",
      "Higher cholesterol levels",
      "Environmental impact",
      "Antibiotic resistance concerns"
    ],
    recipes: [
      {
        id: 1,
        title: "Hearty Lentil Bolognese",
        time: "45 mins",
        difficulty: "Easy",
        ingredients: [
          "1 cup green lentils",
          "1 can crushed tomatoes",
          "1 onion, diced",
          "3 cloves garlic",
          "2 carrots, diced",
          "Herbs: basil, oregano, thyme"
        ],
        instructions: "Sauté onion and garlic, add lentils, tomatoes, and vegetables. Simmer for 30 minutes until tender."
      },
      {
        id: 2,
        title: "Beyond Beef Tacos",
        time: "20 mins",
        difficulty: "Easy",
        ingredients: [
          "1 package Beyond Beef",
          "Taco seasoning",
          "Corn tortillas",
          "Avocado",
          "Lettuce",
          "Tomatoes"
        ],
        instructions: "Cook Beyond Beef with seasoning. Serve in tortillas with fresh toppings."
      }
    ]
  },
  chicken: {
    name: "Chicken",
    deficiency: "Protein, B6, Niacin",
    deficiencyExplanation: "Chicken cravings may indicate protein deficiency, low B6 levels, or niacin needs. These nutrients support muscle function and brain health.",
    alternatives: [
      {
        id: 4,
        name: "Gardein Chicken",
        brand: "Gardein",
        type: "Plant-based chicken pieces",
        nutrition: {
          protein: "15g",
          iron: "1mg",
          calories: "180",
          fat: "7g",
          fiber: "5g",
          b12: "0mcg"
        },
        benefits: [
          "Lower in saturated fat",
          "No cholesterol",
          "Good source of protein",
          "Quick cooking time"
        ],
        availability: "Frozen section, grocery stores"
      },
      {
        id: 5,
        name: "Chickpeas & Tofu",
        brand: "Generic",
        type: "Whole food combination",
        nutrition: {
          protein: "16g",
          iron: "3mg",
          calories: "200",
          fat: "8g",
          fiber: "6g",
          b12: "0mcg"
        },
        benefits: [
          "High in fiber",
          "Rich in folate",
          "Versatile protein source",
          "Budget-friendly"
        ],
        availability: "All grocery stores"
      }
    ],
    meatSideEffects: [
      "Potential antibiotic residues",
      "Salmonella risk",
      "Hormonal disruption",
      "Inflammatory response"
    ],
    recipes: [
      {
        id: 3,
        title: "Crispy Chickpea 'Chicken'",
        time: "30 mins",
        difficulty: "Medium",
        ingredients: [
          "1 can chickpeas",
          "Flour for coating",
          "Nutritional yeast",
          "Paprika, garlic powder",
          "Oil for frying"
        ],
        instructions: "Mash chickpeas, form into patties, coat in seasoned flour, and pan-fry until crispy."
      }
    ]
  },
  pork: {
    name: "Pork",
    deficiency: "Thiamine, B6, Zinc",
    deficiencyExplanation: "Pork cravings often signal thiamine (B1) deficiency, low B6, or zinc needs. These nutrients are crucial for energy metabolism and immune function.",
    alternatives: [
      {
        id: 6,
        name: "Lightlife Plant-Based Sausage",
        brand: "Lightlife",
        type: "Plant-based sausage",
        nutrition: {
          protein: "14g",
          iron: "2mg",
          calories: "190",
          fat: "12g",
          fiber: "1g",
          b12: "0mcg"
        },
        benefits: [
          "No nitrates",
          "Lower sodium options",
          "Plant-based protein",
          "Familiar taste"
        ],
        availability: "Refrigerated section, grocery stores"
      },
      {
        id: 7,
        name: "Mushroom 'Pulled Pork'",
        brand: "Generic",
        type: "Whole food alternative",
        nutrition: {
          protein: "8g",
          iron: "1mg",
          calories: "120",
          fat: "2g",
          fiber: "4g",
          b12: "0mcg"
        },
        benefits: [
          "Low in calories",
          "High in umami",
          "Rich in antioxidants",
          "Natural whole food"
        ],
        availability: "Fresh produce section"
      }
    ],
    meatSideEffects: [
      "High in saturated fat",
      "Nitrate concerns",
      "Increased inflammation",
      "Cardiovascular risks"
    ],
    recipes: [
      {
        id: 4,
        title: "BBQ Mushroom Pulled 'Pork'",
        time: "25 mins",
        difficulty: "Easy",
        ingredients: [
          "2 lbs king oyster mushrooms",
          "BBQ sauce",
          "Onion powder",
          "Smoked paprika",
          "Garlic powder"
        ],
        instructions: "Shred mushrooms with a fork, sauté with spices, add BBQ sauce and simmer."
      }
    ]
  },
  fish: {
    name: "Fish",
    deficiency: "Omega-3, Iodine, B12",
    deficiencyExplanation: "Fish cravings typically indicate omega-3 fatty acid deficiency, low iodine levels, or B12 needs. These nutrients support brain health and thyroid function.",
    alternatives: [
      {
        id: 8,
        name: "Good Catch Fish-Free Tuna",
        brand: "Good Catch",
        type: "Plant-based seafood",
        nutrition: {
          protein: "14g",
          iron: "1mg",
          calories: "90",
          fat: "5g",
          fiber: "2g",
          b12: "0mcg"
        },
        benefits: [
          "No mercury",
          "Sustainable source",
          "Omega-3 from algae",
          "Ocean-friendly"
        ],
        availability: "Canned goods, grocery stores"
      },
      {
        id: 9,
        name: "Algae Oil & Seaweed",
        brand: "Generic",
        type: "Whole food combination",
        nutrition: {
          protein: "6g",
          iron: "2mg",
          calories: "80",
          fat: "8g",
          fiber: "3g",
          b12: "0mcg"
        },
        benefits: [
          "Direct omega-3 source",
          "Rich in iodine",
          "Sustainable",
          "No contamination"
        ],
        availability: "Health food stores"
      }
    ],
    meatSideEffects: [
      "Heavy metal contamination",
      "Microplastics",
      "Overfishing impact",
      "Potential toxins"
    ],
    recipes: [
      {
        id: 5,
        title: "Seaweed 'Fish' Cakes",
        time: "35 mins",
        difficulty: "Medium",
        ingredients: [
          "Nori sheets",
          "Mashed chickpeas",
          "Kelp powder",
          "Lemon juice",
          "Capers"
        ],
        instructions: "Mix ingredients, form into patties, and pan-fry until golden."
      }
    ]
  },
  lamb: {
    name: "Lamb",
    deficiency: "Iron, B12, Zinc",
    deficiencyExplanation: "Lamb cravings often indicate iron deficiency, low B12, or zinc needs. These nutrients are essential for oxygen transport and immune function.",
    alternatives: [
      {
        id: 10,
        name: "Seitan with Herbs",
        brand: "Generic",
        type: "Wheat-based protein",
        nutrition: {
          protein: "25g",
          iron: "3mg",
          calories: "220",
          fat: "3g",
          fiber: "2g",
          b12: "0mcg"
        },
        benefits: [
          "High protein content",
          "Low in fat",
          "Customizable flavor",
          "Meat-like texture"
        ],
        availability: "Health food stores, Asian markets"
      }
    ],
    meatSideEffects: [
      "High in saturated fat",
      "Cholesterol concerns",
      "Environmental impact",
      "Expensive production"
    ],
    recipes: [
      {
        id: 6,
        title: "Herb-Crusted Seitan",
        time: "40 mins",
        difficulty: "Medium",
        ingredients: [
          "Seitan",
          "Rosemary, thyme",
          "Garlic",
          "Olive oil",
          "Breadcrumbs"
        ],
        instructions: "Season seitan with herbs, coat with breadcrumbs, and bake until crispy."
      }
    ]
  },
  ...extendedMeatAlternatives
};