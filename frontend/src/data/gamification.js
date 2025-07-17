// Enhanced gamification system with animal friends and environmental impact

export const achievementLevels = [
  {
    id: 1,
    name: "Plant Curious",
    description: "Just getting started!",
    icon: "🌱",
    requirements: { searches: 1 },
    animalFriend: {
      name: "Benny the Calf",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&h=200&fit=crop&crop=face",
      message: "Thank you for taking the first step! Every journey begins with curiosity. 🐮",
      video: "https://example.com/calf-thank-you.mp4"
    },
    environmentalImpact: {
      co2Saved: "2.5 kg",
      waterSaved: "1,800 liters",
      landSaved: "5 sq meters"
    },
    rewards: ["Welcome bonus", "First search badge"]
  },
  {
    id: 2,
    name: "Kind Explorer",
    description: "Exploring plant-based options",
    icon: "🌿",
    requirements: { searches: 5, favorites: 3 },
    animalFriend: {
      name: "Luna the Lamb",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=200&h=200&fit=crop&crop=face",
      message: "You're making such a difference! I'm grateful for your kindness. 🐑",
      video: "https://example.com/lamb-thank-you.mp4"
    },
    environmentalImpact: {
      co2Saved: "12.5 kg",
      waterSaved: "9,000 liters",
      landSaved: "25 sq meters"
    },
    rewards: ["Explorer badge", "Recipe collection unlocked"]
  },
  {
    id: 3,
    name: "Compassionate Foodie",
    description: "Loving plant-based alternatives",
    icon: "💚",
    requirements: { searches: 15, favorites: 8, recipes_viewed: 5 },
    animalFriend: {
      name: "Finn the Fish",
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=200&h=200&fit=crop&crop=center",
      message: "The oceans are cleaner because of choices like yours! Thank you! 🐠",
      video: "https://example.com/fish-thank-you.mp4"
    },
    environmentalImpact: {
      co2Saved: "37.5 kg",
      waterSaved: "27,000 liters",
      landSaved: "75 sq meters"
    },
    rewards: ["Foodie badge", "Advanced recipes unlocked", "Community access"]
  },
  {
    id: 4,
    name: "Plant-Based Champion",
    description: "Leading by example",
    icon: "🏆",
    requirements: { searches: 30, favorites: 15, recipes_viewed: 12, reviews_written: 2 },
    animalFriend: {
      name: "Charlotte the Chicken",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=200&h=200&fit=crop&crop=center",
      message: "You're a true champion! My friends and I are so grateful for your compassion. 🐔",
      video: "https://example.com/chicken-thank-you.mp4"
    },
    environmentalImpact: {
      co2Saved: "75 kg",
      waterSaved: "54,000 liters",
      landSaved: "150 sq meters"
    },
    rewards: ["Champion badge", "Exclusive recipes", "Early access to new features"]
  },
  {
    id: 5,
    name: "Guardian of Animals",
    description: "Protecting our animal friends",
    icon: "🛡️",
    requirements: { searches: 50, favorites: 25, recipes_viewed: 20, reviews_written: 5, days_active: 30 },
    animalFriend: {
      name: "Penelope the Pig",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&h=200&fit=crop&crop=face",
      message: "You're our guardian angel! Thank you for choosing kindness every day. 🐷",
      video: "https://example.com/pig-thank-you.mp4"
    },
    environmentalImpact: {
      co2Saved: "125 kg",
      waterSaved: "90,000 liters",
      landSaved: "250 sq meters"
    },
    rewards: ["Guardian badge", "Personal impact dashboard", "VIP support"]
  },
  {
    id: 6,
    name: "Planet Protector",
    description: "Saving the planet one meal at a time",
    icon: "🌍",
    requirements: { searches: 100, favorites: 50, recipes_viewed: 40, reviews_written: 10, days_active: 90 },
    animalFriend: {
      name: "Oliver the Ox",
      image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=200&h=200&fit=crop&crop=face",
      message: "You're not just saving animals - you're saving our planet! We're all grateful. 🐂",
      video: "https://example.com/ox-thank-you.mp4"
    },
    environmentalImpact: {
      co2Saved: "250 kg",
      waterSaved: "180,000 liters",
      landSaved: "500 sq meters"
    },
    rewards: ["Planet Protector badge", "Climate impact certificate", "Ambassador program access"]
  }
];

export const animalFacts = [
  {
    animal: "Cows",
    fact: "Cows have best friends and can become stressed when separated from them.",
    impact: "Each cow saved prevents 2.5 tons of CO2 emissions per year."
  },
  {
    animal: "Pigs",
    fact: "Pigs are highly intelligent, can learn their names, and even play video games!",
    impact: "Choosing plant-based saves 1,000 gallons of water per pig."
  },
  {
    animal: "Chickens",
    fact: "Chickens can recognize over 100 faces and have complex social hierarchies.",
    impact: "Every chicken saved prevents 4.5 kg of CO2 emissions."
  },
  {
    animal: "Fish",
    fact: "Fish can feel pain, have memories, and some species use tools.",
    impact: "Plant-based seafood prevents overfishing and ocean pollution."
  },
  {
    animal: "Lambs",
    fact: "Lambs recognize their mothers' voices and can distinguish between different emotions.",
    impact: "Each lamb saved prevents 28 kg of CO2 emissions."
  }
];

export const environmentalFacts = [
  {
    category: "Water",
    fact: "It takes 1,800 gallons of water to produce 1 pound of beef.",
    plantBased: "Plant-based alternatives use 90% less water."
  },
  {
    category: "Land",
    fact: "Animal agriculture uses 77% of agricultural land but provides only 18% of calories.",
    plantBased: "Plant-based diets free up land for reforestation."
  },
  {
    category: "Emissions",
    fact: "Animal agriculture produces 18% of global greenhouse gas emissions.",
    plantBased: "Plant-based alternatives produce 90% fewer emissions."
  },
  {
    category: "Forests",
    fact: "80% of Amazon deforestation is for cattle ranching.",
    plantBased: "Plant-based eating helps preserve rainforests."
  }
];

export const dailyTips = [
  "Start your day with a plant-based breakfast - try oat milk in your coffee!",
  "Experiment with mushrooms for that umami flavor you love in meat dishes.",
  "Join our community challenges to stay motivated on your plant-based journey.",
  "Share your favorite plant-based recipes with friends and family.",
  "Remember: every plant-based meal makes a difference, no matter how small!"
];

// Calculate user's current level based on their stats
export const calculateUserLevel = (userStats) => {
  const { searches = 0, favorites = 0, recipes_viewed = 0, reviews_written = 0, days_active = 0 } = userStats;
  
  // Find the highest level the user qualifies for
  for (let i = achievementLevels.length - 1; i >= 0; i--) {
    const level = achievementLevels[i];
    const req = level.requirements;
    
    if (
      searches >= (req.searches || 0) &&
      favorites >= (req.favorites || 0) &&
      recipes_viewed >= (req.recipes_viewed || 0) &&
      reviews_written >= (req.reviews_written || 0) &&
      days_active >= (req.days_active || 0)
    ) {
      return level;
    }
  }
  
  return achievementLevels[0]; // Default to first level
};

// Calculate progress to next level
export const calculateProgress = (userStats) => {
  const currentLevel = calculateUserLevel(userStats);
  const currentLevelIndex = achievementLevels.findIndex(level => level.id === currentLevel.id);
  
  if (currentLevelIndex === achievementLevels.length - 1) {
    return { progress: 100, nextLevel: null }; // Max level reached
  }
  
  const nextLevel = achievementLevels[currentLevelIndex + 1];
  const req = nextLevel.requirements;
  
  // Calculate progress based on the requirement that's furthest from completion
  const progresses = [];
  
  if (req.searches) progresses.push((userStats.searches || 0) / req.searches * 100);
  if (req.favorites) progresses.push((userStats.favorites || 0) / req.favorites * 100);
  if (req.recipes_viewed) progresses.push((userStats.recipes_viewed || 0) / req.recipes_viewed * 100);
  if (req.reviews_written) progresses.push((userStats.reviews_written || 0) / req.reviews_written * 100);
  if (req.days_active) progresses.push((userStats.days_active || 0) / req.days_active * 100);
  
  const overallProgress = Math.min(...progresses);
  
  return {
    progress: Math.min(overallProgress, 100),
    nextLevel: nextLevel
  };
};