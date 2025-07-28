import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Mail } from "lucide-react";
import { toast } from "sonner";
import Logo from "../components/Logo";

const CommunityPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual API call to save email for community waiting list
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Thanks! We'll notify you when the community launches!");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <Logo />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Users className="h-12 w-12 text-green-600" />
          </div>
          
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Community Coming Soon!
          </h1>
          
          <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
            We're building a supportive community where kind eaters can share recipes, 
            celebrate milestones, and inspire each other on their plant-based journey.
          </p>
          
          <Card className="max-w-md mx-auto border-2 border-green-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2" />
                Get Early Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-green-200 focus:border-green-500"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Signing Up...
                    </>
                  ) : (
                    "Notify Me When It Launches!"
                  )}
                </Button>
              </form>
              
              <p className="text-sm text-green-600 mt-4 text-center">
                We'll only email you when the community is ready. Promise! 🌱
              </p>
            </CardContent>
          </Card>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-green-800 mb-2">Share & Support</h3>
              <p className="text-green-700 text-sm">
                Connect with others on similar journeys and share your wins
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-bold text-green-800 mb-2">Recipe Exchange</h3>
              <p className="text-green-700 text-sm">
                Discover and share amazing plant-based recipes
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-bold text-green-800 mb-2">Celebrate Progress</h3>
              <p className="text-green-700 text-sm">
                Track your impact and celebrate milestones together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;