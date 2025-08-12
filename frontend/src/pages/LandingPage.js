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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100 relative overflow-hidden">
      {/* CUTE ANIMAL DECORATIONS - Visible but not disruptive */}
      <div className="fixed inset-0 pointer-events-none z-20">
        {/* Animals in side margins only - visible above content but not blocking */}
        <div className="absolute top-1/4 left-4 w-16 h-16 bg-cover bg-center rounded-full border-2 border-white shadow-lg opacity-90" style={{backgroundImage: "url('https://images.unsplash.com/photo-1674980750262-260775bf2212?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxjdXRlJTIwYW5pbWFsJTIwZmFjZXN8ZW58MHx8fHwxNzU1MDMxMDU1fDA&ixlib=rb-4.1.0&q=85')"}}></div>
        <div className="absolute top-1/2 left-4 w-20 h-20 bg-cover bg-center rounded-full border-2 border-white shadow-lg opacity-85" style={{backgroundImage: "url('https://images.unsplash.com/photo-1710780126902-a29d3a89bf7f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxjdXRlJTIwYW5pbWFsJTIwZmFjZXN8ZW58MHx8fHwxNzU1MDMxMDU1fDA&ixlib=rb-4.1.0&q=85')"}}></div>
        <div className="absolute top-3/4 left-4 w-18 h-18 bg-cover bg-center rounded-full border-2 border-white shadow-lg opacity-90" style={{backgroundImage: "url('https://images.unsplash.com/photo-1628788985444-27871e39a1df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxjdXRlJTIwYW5pbWFsJTIwZmFjZXN8ZW58MHx8fHwxNzU1MDMxMDU1fDA&ixlib=rb-4.1.0&q=85')"}}></div>
        
        <div className="absolute top-1/4 right-4 w-18 h-18 bg-cover bg-center rounded-full border-2 border-white shadow-lg opacity-90" style={{backgroundImage: "url('https://images.unsplash.com/photo-1726562530228-704147f55249?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHxjdXRlJTIwYW5pbWFsJTIwZmFjZXN8ZW58MHx8fHwxNzU1MDMxMDU1fDA&ixlib=rb-4.1.0&q=85')"}}></div>
        <div className="absolute top-1/2 right-4 w-16 h-16 bg-cover bg-center rounded-full border-2 border-white shadow-lg opacity-85" style={{backgroundImage: "url('https://images.unsplash.com/photo-1609103566358-ccab56549f8d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxhbmltYWwlMjBwb3J0cmFpdHN8ZW58MHx8fHwxNzU1MDMxMDYzfDA&ixlib=rb-4.1.0&q=85')"}}></div>
        <div className="absolute top-3/4 right-4 w-20 h-20 bg-cover bg-center rounded-full border-2 border-white shadow-lg opacity-90" style={{backgroundImage: "url('https://images.pexels.com/photos/2123375/pexels-photo-2123375.jpeg')"}}></div>
      </div>

      {/* Main Content with higher z-index */}
      <div className="relative z-10">
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
              <Link to="/contact">
                <Button variant="ghost" className="text-green-700 hover:text-green-900 hover:bg-green-100">
                  Contact
                </Button>
              </Link>
              <Link to="/search">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Find Alternatives
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-amber-50 to-green-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 h-24 bg-cover bg-center rounded-full" style={{backgroundImage: "url('https://images.unsplash.com/photo-1578956919791-af7615c94b90?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxjdXRlJTIwYW5pbWFsc3xlbnwwfHx8fDE3NTUwMjY5OTF8MA&ixlib=rb-4.1.0&q=85')"}}></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-cover bg-center rounded-full" style={{backgroundImage: "url('https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg')"}}></div>
          <div className="absolute bottom-32 left-20 w-28 h-28 bg-cover bg-center rounded-full" style={{backgroundImage: "url('https://images.unsplash.com/photo-1484557985045-edf25e08da73?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxmYXJtJTIwYW5pbWFsc3xlbnwwfHx8fDE3NTUwMjY5OTh8MA&ixlib=rb-4.1.0&q=85')"}}></div>
          <div className="absolute bottom-20 right-32 w-24 h-24 bg-cover bg-center rounded-full" style={{backgroundImage: "url('https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg')"}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Logo />
          </div>
          <h1 className="text-6xl font-bold text-green-800 mb-6 tracking-tight">
            Crave <span className="text-amber-600">Kind</span>
          </h1>
          <p className="text-2xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover delicious vegan alternatives for every meat craving. 
            <br />
            <span className="text-lg text-green-600">Kind to animals, kind to your taste buds, kind to the planet.</span>
          </p>
          
          {/* Cute Animal Feature */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-cover bg-center rounded-full border-3 border-white shadow-md" style={{backgroundImage: "url('https://images.unsplash.com/photo-1454179083322-198bb4daae41?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxmYXJtJTIwYW5pbWFsc3xlbnwwfHx8fDE3NTUwMjY5OTh8MA&ixlib=rb-4.1.0&q=85')"}}></div>
                <span className="text-3xl">💚</span>
                <div className="w-16 h-16 bg-cover bg-center rounded-full border-3 border-white shadow-md" style={{backgroundImage: "url('https://images.unsplash.com/photo-1578956919791-af7615c94b90?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxjdXRlJTIwYW5pbWFsc3xlbnwwfHx8fDE3NTUwMjY5OTF8MA&ixlib=rb-4.1.0&q=85')"}}></div>
              </div>
              <p className="text-green-700 font-medium">Every choice matters to them 🐾</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/search">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg">
                🔍 Find Your Alternative
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 font-semibold px-8 py-4 text-lg">
                💬 Get Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Help replace 2.5 million meals, save 15,000 tons of CO₂, and spare 75,000 animals - one craving at a time.
            </h2>
            <p className="text-lg text-green-700">
              Together, we're making a meaningful impact on our planet and its creatures.
            </p>
          </div>
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
              Why Choose CraveKind?
            </h2>
            <p className="text-xl text-green-700 max-w-2xl mx-auto">
              We make the transition to plant-based eating kind, intuitive, and crave-worthy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Understand Your Cravings</CardTitle>
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
                <CardTitle className="text-green-800">Swap Smarter</CardTitle>
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
                <CardTitle className="text-green-800">Recipe Inspiration</CardTitle>
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
              <h3 className="font-semibold mb-4">Quick Access</h3>
              <ul className="space-y-2 text-green-200">
                <li>
                  <Link to="/search" className="hover:text-white transition-colors cursor-pointer">
                    Find Alternatives
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors cursor-pointer">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/coming-soon" className="hover:text-white transition-colors cursor-pointer">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-green-200">
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors cursor-pointer">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    cravekind@gmail.com
                  </span>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); alert('Privacy Policy page coming soon!'); }}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); alert('Terms of Service page coming soon!'); }}>
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2025 CraveKind. Made with ❤️ for animals and the planet.</p>
          </div>
        </div>
      </footer>
      
      </div>
    </div>
  );
};

export default LandingPage;