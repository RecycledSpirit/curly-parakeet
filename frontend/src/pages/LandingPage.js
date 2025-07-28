import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Heart, Shield, Users, ArrowRight, Search, BookOpen, TrendingUp, Mail } from "lucide-react";
import { mockStats } from "../data/mock";
import Logo from "../components/Logo";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            <div className="flex items-center space-x-4">
              <Link to="/search">
                <Button variant="ghost" className="text-green-700 hover:text-green-900 hover:bg-green-100">
                  Search
                </Button>
              </Link>
              <Link to="/favorites">
                <Button variant="ghost" className="text-green-700 hover:text-green-900 hover:bg-green-100">
                  Favorites
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" className="text-green-700 hover:text-green-900 hover:bg-green-100">
                  Contact
                </Button>
              </Link>
              <Link to="/profile">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6 leading-tight">
              Discover Your Perfect
              <span className="block bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">
                Plant-Based Alternative
              </span>
            </h1>
            <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your meat cravings into healthy, compassionate choices. 
              Understand what your body needs and discover amazing vegan alternatives 
              that satisfy both your taste buds and nutritional requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/search">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Find Your Alternative
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Get Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{mockStats.mealsReplaced}</div>
              <div className="text-green-700">Meals Replaced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{mockStats.co2Saved}</div>
              <div className="text-green-700">CO₂ Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{mockStats.animalsSpared}</div>
              <div className="text-green-700">Animals Spared</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Help replace 2.5 million meals, save 15,000 tons of CO₂, and spare 75,000 animals - one craving at a time.
            </h2>
            <p className="text-xl text-green-700 max-w-2xl mx-auto">
              We make the transition to plant-based eating kind, intuitive, and crave-worthy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">🛡️ Decode Your Cravings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-center">
                  Learn what your cravings might be telling you—whether it's a missing nutrient, 
                  a nostalgic comfort, or just habit. CraveKind helps you connect the dots with compassion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">💚 Swap Smarter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-center">
                  Get simple suggestions for plant-based alternatives to common meat cravings—so you can 
                  satisfy your taste buds while honoring your values.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">👩‍🍳 Crave-Worthy Recipes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-center">
                  Explore delicious, vegan-friendly recipes and tips that make plant-based eating 
                  feel exciting—not restrictive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Eating Habits?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join the movement towards compassionate, healthy eating choices
          </p>
          <Link to="/search">
            <Button 
              size="lg" 
              className="bg-white hover:bg-green-50 text-green-700 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 relative">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill="white"
                    />
                    <path
                      d="M7 2c-1.5 0-2.5 1-2.5 2.5 0 1.5 1 2.5 2.5 2.5 0.5 0 1-0.2 1.4-0.6L9 5.5c0.3-0.4 0.5-0.9 0.5-1.5C9.5 3 8.5 2 7 2z"
                      fill="#22c55e"
                    />
                    <path
                      d="M17 2c1.5 0 2.5 1 2.5 2.5 0 1.5-1 2.5-2.5 2.5-0.5 0-1-0.2-1.4-0.6L15 5.5c-0.3-0.4-0.5-0.9-0.5-1.5C14.5 3 15.5 2 17 2z"
                      fill="#22c55e"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold">CraveKind</span>
              </div>
              <p className="text-green-200">
                Satisfy your cravings, stay kind.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-green-200">
                <li>Craving Analysis</li>
                <li>Vegan Alternatives</li>
                <li>Recipe Database</li>
                <li>Nutritional Info</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-green-200">
                <li>Getting Started</li>
                <li>Nutrition Guide</li>
                <li>Recipe Collection</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-green-200">
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="mailto:cravekind@gmail.com" className="hover:text-white transition-colors">
                    Business Inquiries
                  </a>
                </li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2025 CraveKind. Made with ❤️ for animals and the planet.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;