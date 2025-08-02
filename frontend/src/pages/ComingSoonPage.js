import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, Heart, Users, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import Logo from "../components/Logo";

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);
    
    try {
      // For now, we'll just show success and store locally
      // In future, this will integrate with the backend
      const existingEmails = JSON.parse(localStorage.getItem('communitySignups') || '[]');
      if (existingEmails.includes(email)) {
        toast.info("You're already on our waitlist!");
      } else {
        existingEmails.push(email);
        localStorage.setItem('communitySignups', JSON.stringify(existingEmails));
        toast.success("Thank you! We'll notify you when the community launches.");
        setEmail("");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubscribing(false);
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
                  Back to Home
                </Button>
              </Link>
              <Logo />
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/search">
                <Button variant="ghost" className="text-green-700 hover:text-green-900 hover:bg-green-100">
                  Search
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <Users className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-5xl font-bold text-green-800 mb-4">
            CraveKind Community
          </h1>
          <p className="text-2xl text-green-700 mb-6 font-medium">
            Coming Soon!
          </p>
          <p className="text-xl text-green-600 max-w-2xl mx-auto leading-relaxed">
            We're building an amazing community space where plant-based food lovers can 
            share recipes, support each other, and celebrate their journey together.
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-3">
              <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-green-800 text-lg">Recipe Sharing</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-green-700 text-sm">
                Share your favorite plant-based recipes and discover new ones from the community.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-3">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-green-800 text-lg">Support Groups</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-green-700 text-sm">
                Connect with like-minded individuals on their plant-based journey.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-3">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-green-800 text-lg">Challenges</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-green-700 text-sm">
                Participate in fun monthly challenges and track your progress.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Email Signup */}
        <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-green-800 flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              Join the Waitlist
            </CardTitle>
            <p className="text-green-700 mt-2">
              Be the first to know when our community launches! We'll send you an invitation 
              and exclusive early access benefits.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-green-200 focus:border-green-500"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubscribing}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                {isSubscribing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Joining...
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Notify Me When It's Ready
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <Clock className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Expected Launch: Spring 2025
            </h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              We're working hard to create the perfect community experience. 
              Join our waitlist to be among the first to explore all the amazing features!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/search">
                <Button
                  size="lg"
                  className="bg-white hover:bg-green-50 text-green-700 font-semibold px-8"
                >
                  Explore Alternatives
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;