import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Leaf, Heart, Shield, Users, Star, ArrowRight, Search, BookOpen, TrendingUp } from "lucide-react";
import { mockTestimonials, mockStats } from "../data/mock";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">PlantCrave</span>
            </div>
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
              <Button 
                variant="outline" 
                size="lg" 
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{mockStats.usersHelped}</div>
              <div className="text-green-700">Users Helped</div>
            </div>
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
              Why Choose PlantCrave?
            </h2>
            <p className="text-xl text-green-700 max-w-2xl mx-auto">
              We make the transition to plant-based eating simple, informed, and delicious
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
                  Discover what nutritional deficiencies might be causing your meat cravings 
                  and how to address them naturally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Personalized Alternatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-center">
                  Get tailored recommendations for vegan alternatives that match your taste 
                  preferences and nutritional needs.
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
                  Access delicious recipes and cooking tips to make your plant-based 
                  alternatives taste amazing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-green-700">
              Real people, real transformations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2 border-green-200 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex justify-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {testimonial.transition}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 text-center italic">
                    "{testimonial.text}"
                  </p>
                  <p className="text-green-600 text-center font-semibold mt-2">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
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
            Join thousands of people who have discovered the joy of plant-based eating
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
                <Leaf className="h-6 w-6" />
                <span className="text-xl font-bold">PlantCrave</span>
              </div>
              <p className="text-green-200">
                Helping people make compassionate food choices for a healthier planet.
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
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2025 PlantCrave. Made with ❤️ for animals and the planet.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;