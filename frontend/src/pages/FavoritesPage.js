import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  ArrowLeft, 
  Leaf, 
  ShoppingCart, 
  TrendingUp, 
  Trash2,
  Search
} from "lucide-react";
import { mockMeatAlternatives } from "../data/mock";
import { useAuth } from "../contexts/AuthContext";
import { useFavorites } from "../contexts/FavoritesContext";
import { toast } from "sonner";

const FavoritesPage = () => {
  const { user } = useAuth();
  const { favorites, removeFromFavorites } = useFavorites();
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    if (favorites.length > 0) {
      const items = [];
      Object.values(mockMeatAlternatives).forEach(meat => {
        meat.alternatives.forEach(alternative => {
          if (favorites.includes(alternative.id)) {
            items.push({
              ...alternative,
              meatType: meat.name
            });
          }
        });
      });
      setFavoriteItems(items);
    } else {
      setFavoriteItems([]);
    }
  }, [favorites]);

  const handleRemoveFavorite = (alternativeId) => {
    removeFromFavorites(alternativeId);
    toast.success("Removed from favorites");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-green-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <Link to="/">
                  <Button variant="ghost" size="sm" className="text-green-700 hover:text-green-900 hover:bg-green-100">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                </Link>
                <div className="flex items-center space-x-2">
                  <Leaf className="h-8 w-8 text-green-600" />
                  <span className="text-2xl font-bold text-green-800">PlantCrave</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Heart className="h-16 w-16 mx-auto mb-4 text-green-400" />
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Please Log In
          </h1>
          <p className="text-xl text-green-700 mb-8">
            You need to be logged in to view your favorites
          </p>
          <Link to="/profile">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Log In / Sign Up
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-green-700 hover:text-green-900 hover:bg-green-100">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold text-green-800">PlantCrave</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/search">
                <Button variant="ghost" className="text-green-700 hover:text-green-900 hover:bg-green-100">
                  <Search className="h-4 w-4 mr-2" />
                  Search
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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Your Favorite Alternatives
          </h1>
          <p className="text-xl text-green-700">
            Your saved plant-based alternatives for easy access
          </p>
        </div>

        {favoriteItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 mx-auto mb-4 text-green-400" />
            <h3 className="text-2xl font-semibold text-green-800 mb-2">
              No favorites yet
            </h3>
            <p className="text-green-700 mb-6">
              Start exploring and save your favorite vegan alternatives
            </p>
            <Link to="/search">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Search className="h-4 w-4 mr-2" />
                Start Searching
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteItems.map((alternative) => (
              <Card key={alternative.id} className="border-2 border-green-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-green-800">{alternative.name}</CardTitle>
                      <p className="text-green-600 text-sm">{alternative.brand}</p>
                      <div className="flex space-x-2 mt-2">
                        <Badge variant="outline" className="text-green-700 border-green-300">
                          {alternative.type}
                        </Badge>
                        <Badge variant="secondary" className="text-green-700 bg-green-100">
                          {alternative.meatType} Alternative
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveFavorite(alternative.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
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
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;