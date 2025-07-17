import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Heart, 
  ShoppingCart, 
  Clock, 
  Users, 
  TrendingUp, 
  AlertCircle,
  ArrowLeft,
  BookOpen,
  ChefHat
} from "lucide-react";
import { mockMeatAlternatives, mockNutritionalSupplements } from "../data/mock";
import { useAuth } from "../contexts/AuthContext";
import { useFavorites } from "../contexts/FavoritesContext";
import { toast } from "sonner";
import Logo from "../components/Logo";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [selectedMeat, setSelectedMeat] = useState(null);
  const { user } = useAuth();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleSearch = (term) => {
    const normalizedTerm = term.toLowerCase().trim();
    
    // Extended search mapping for better results
    const searchMap = {
      'beef': ['beef', 'steak', 'burger', 'ground beef', 'beef roast', 'brisket'],
      'chicken': ['chicken', 'chicken breast', 'chicken thigh', 'poultry', 'chicken nugget', 'chicken wing'],
      'pork': ['pork', 'bacon', 'ham', 'sausage', 'pork chop', 'pork belly', 'pepperoni'],
      'fish': ['fish', 'salmon', 'tuna', 'cod', 'tilapia', 'halibut', 'seafood'],
      'lamb': ['lamb', 'mutton', 'lamb chop'],
      'duck': ['duck', 'duck breast'],
      'turkey': ['turkey', 'turkey breast'],
      'shrimp': ['shrimp', 'prawns', 'shellfish'],
      'crab': ['crab', 'crab meat', 'shellfish'],
      'oysters': ['oysters', 'clams', 'mussels', 'shellfish'],
      'tenderloin': ['tenderloin', 'beef tenderloin', 'pork tenderloin']
    };
    
    // Find matching meat type
    let matchedMeatType = null;
    for (const [meatType, searchTerms] of Object.entries(searchMap)) {
      if (searchTerms.some(term => term.includes(normalizedTerm) || normalizedTerm.includes(term))) {
        matchedMeatType = meatType;
        break;
      }
    }
    
    // If no direct match, try partial matching
    if (!matchedMeatType) {
      const allMeatTypes = Object.keys(mockMeatAlternatives);
      matchedMeatType = allMeatTypes.find(meat => 
        meat.toLowerCase().includes(normalizedTerm) || 
        normalizedTerm.includes(meat.toLowerCase())
      );
    }
    
    if (matchedMeatType && mockMeatAlternatives[matchedMeatType]) {
      setSearchResults(mockMeatAlternatives[matchedMeatType]);
      setSelectedMeat(matchedMeatType);
    } else {
      setSearchResults(null);
      setSelectedMeat(null);
    }
  };

  const handleFavoriteToggle = (alternativeId) => {
    if (!user) {
      toast.error("Please log in to save favorites");
      return;
    }

    if (isFavorite(alternativeId)) {
      removeFromFavorites(alternativeId);
      toast.success("Removed from favorites");
    } else {
      addToFavorites(alternativeId);
      toast.success("Added to favorites");
    }
  };

  const quickSearchOptions = ["beef", "chicken", "pork", "fish", "lamb", "duck", "turkey", "shrimp", "sausage"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-green-700 hover:text-green-900 hover:bg-green-100">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <Logo />
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/favorites">
                <Button variant="ghost" className="text-green-700 hover:text-green-900 hover:bg-green-100">
                  <Heart className="h-4 w-4 mr-2" />
                  Favorites
                </Button>
              </Link>
              <Link to="/profile">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-800 mb-4">
              Find Your Perfect Plant-Based Alternative
            </h1>
            <p className="text-xl text-green-700 max-w-2xl mx-auto">
              Search for the meat you're craving and discover amazing vegan alternatives
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500" />
                <Input
                  placeholder="What meat are you craving? (e.g., beef, chicken, pork)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchTerm)}
                  className="pl-10 h-12 border-2 border-green-200 focus:border-green-500 text-lg"
                />
              </div>
              <Button 
                onClick={() => handleSearch(searchTerm)}
                className="bg-green-600 hover:bg-green-700 text-white h-12 px-6"
              >
                Search
              </Button>
            </div>

            {/* Quick Search Options */}
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm text-green-700 mr-2">Quick search:</span>
              {quickSearchOptions.map((option) => (
                <Badge
                  key={option}
                  variant="secondary"
                  className="cursor-pointer hover:bg-green-100 text-green-700 capitalize"
                  onClick={() => {
                    setSearchTerm(option);
                    handleSearch(option);
                  }}
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Search Results */}
        {searchResults && (
          <div className="space-y-8">
            {/* Deficiency Explanation */}
            <Card className="border-2 border-amber-200 bg-amber-50/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Understanding Your {searchResults.name} Craving
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">Possible Deficiencies:</h3>
                    <p className="text-amber-700 mb-4">{searchResults.deficiency}</p>
                    <p className="text-amber-700">{searchResults.deficiencyExplanation}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">Potential Side Effects of {searchResults.name}:</h3>
                    <ul className="space-y-1">
                      {searchResults.meatSideEffects.map((effect, index) => (
                        <li key={index} className="flex items-start text-amber-700">
                          <span className="text-red-500 mr-2">•</span>
                          {effect}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternatives */}
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
                Vegan Alternatives for {searchResults.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.alternatives.map((alternative) => (
                  <Card key={alternative.id} className="border-2 border-green-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-green-800">{alternative.name}</CardTitle>
                          <p className="text-green-600 text-sm">{alternative.brand}</p>
                          <Badge variant="outline" className="mt-2 text-green-700 border-green-300">
                            {alternative.type}
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFavoriteToggle(alternative.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Heart className={`h-4 w-4 ${isFavorite(alternative.id) ? 'fill-current' : ''}`} />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="nutrition" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                          <TabsTrigger value="benefits">Benefits</TabsTrigger>
                          <TabsTrigger value="where">Where</TabsTrigger>
                        </TabsList>
                        <TabsContent value="nutrition" className="mt-4">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-green-700">Protein:</span>
                              <span className="text-sm font-semibold text-green-800">{alternative.nutrition.protein}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-green-700">Iron:</span>
                              <span className="text-sm font-semibold text-green-800">{alternative.nutrition.iron}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-green-700">Calories:</span>
                              <span className="text-sm font-semibold text-green-800">{alternative.nutrition.calories}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-green-700">Fiber:</span>
                              <span className="text-sm font-semibold text-green-800">{alternative.nutrition.fiber}</span>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="benefits" className="mt-4">
                          <ul className="space-y-1">
                            {alternative.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start text-sm text-green-700">
                                <TrendingUp className="h-3 w-3 mr-2 mt-0.5 text-green-500" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="where" className="mt-4">
                          <div className="flex items-center text-sm text-green-700">
                            <ShoppingCart className="h-4 w-4 mr-2 text-green-500" />
                            {alternative.availability}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recipes */}
            {searchResults.recipes && (
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
                  Recipe Ideas
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {searchResults.recipes.map((recipe) => (
                    <Card key={recipe.id} className="border-2 border-green-200 bg-white/80 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-green-800 flex items-center">
                            <ChefHat className="h-5 w-5 mr-2" />
                            {recipe.title}
                          </CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-green-700 border-green-300">
                              <Clock className="h-3 w-3 mr-1" />
                              {recipe.time}
                            </Badge>
                            <Badge variant="outline" className="text-green-700 border-green-300">
                              <Users className="h-3 w-3 mr-1" />
                              {recipe.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-green-800 mb-2">Ingredients:</h4>
                            <ul className="text-sm text-green-700 space-y-1">
                              {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  {ingredient}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-800 mb-2">Instructions:</h4>
                            <p className="text-sm text-green-700">{recipe.instructions}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Nutritional Supplements */}
            <Card className="border-2 border-blue-200 bg-blue-50/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Recommended Nutritional Supplements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {mockNutritionalSupplements.map((supplement) => (
                    <div key={supplement.nutrient} className="text-center p-4 bg-white/60 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">{supplement.nutrient}</h3>
                      <p className="text-sm text-blue-700 mb-2">{supplement.supplement}</p>
                      <p className="text-xs text-blue-600 mb-2">{supplement.dosage}</p>
                      <p className="text-xs text-blue-600">Natural sources: {supplement.source}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* No Results */}
        {searchTerm && !searchResults && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-green-800 mb-2">
              No results found for "{searchTerm}"
            </h3>
            <p className="text-green-700 mb-6">
              Try searching for: beef, chicken, pork, fish, or lamb
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {quickSearchOptions.map((option) => (
                <Badge
                  key={option}
                  variant="secondary"
                  className="cursor-pointer hover:bg-green-100 text-green-700 capitalize"
                  onClick={() => {
                    setSearchTerm(option);
                    handleSearch(option);
                  }}
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;