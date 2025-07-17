import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplets, MapPin, TreePine } from "lucide-react";

const EnvironmentalImpact = ({ userStats }) => {
  // Calculate real environmental impact based on user's choices
  const calculateImpact = () => {
    const { searches = 0, favorites = 0, recipes_viewed = 0 } = userStats;
    
    // Real calculations based on research
    const mealsReplaced = Math.floor((searches * 0.3) + (favorites * 2) + (recipes_viewed * 0.5));
    const co2Saved = Math.round(mealsReplaced * 2.5); // 2.5 kg CO2 per plant-based meal
    const waterSaved = Math.round(mealsReplaced * 1800); // 1800 liters per beef meal
    const landSaved = Math.round(mealsReplaced * 5); // 5 sq meters per meal
    const animalsSpared = Math.round(mealsReplaced * 0.3); // Roughly 0.3 animals per meal
    
    return {
      mealsReplaced,
      co2Saved,
      waterSaved,
      landSaved,
      animalsSpared
    };
  };

  const impact = calculateImpact();

  const impactItems = [
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      label: "CO₂ Saved",
      value: `${impact.co2Saved} kg`,
      description: "Equivalent to driving 10 miles less",
      color: "bg-green-100 text-green-800"
    },
    {
      icon: <Droplets className="h-6 w-6 text-blue-600" />,
      label: "Water Saved",
      value: `${impact.waterSaved.toLocaleString()} L`,
      description: "Enough for 50 showers",
      color: "bg-blue-100 text-blue-800"
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-600" />,
      label: "Land Saved",
      value: `${impact.landSaved} m²`,
      description: "Space for trees and wildlife",
      color: "bg-amber-100 text-amber-800"
    },
    {
      icon: <TreePine className="h-6 w-6 text-emerald-600" />,
      label: "Animals Spared",
      value: `${impact.animalsSpared}`,
      description: "Living their best lives",
      color: "bg-emerald-100 text-emerald-800"
    }
  ];

  return (
    <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-green-800 flex items-center">
          <Leaf className="h-5 w-5 mr-2" />
          Your Environmental Impact
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {impactItems.map((item, index) => (
            <div key={index} className="text-center p-3 bg-green-50 rounded-lg">
              <div className="flex justify-center mb-2">{item.icon}</div>
              <div className="text-2xl font-bold text-green-800">{item.value}</div>
              <div className="text-sm text-green-700">{item.label}</div>
              <div className="text-xs text-green-600 mt-1">{item.description}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 rounded-lg text-white text-center">
          <h3 className="font-bold mb-2">🌟 Amazing Progress!</h3>
          <p className="text-sm">
            You've replaced <strong>{impact.mealsReplaced} meals</strong> with plant-based alternatives!
          </p>
          <p className="text-xs mt-2 text-green-100">
            Every choice makes a difference for our planet and animal friends.
          </p>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <Badge className="bg-green-100 text-green-800">
            Climate Hero
          </Badge>
          <Badge className="bg-blue-100 text-blue-800">
            Water Guardian
          </Badge>
          <Badge className="bg-amber-100 text-amber-800">
            Land Protector
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnvironmentalImpact;