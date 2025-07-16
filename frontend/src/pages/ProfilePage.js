import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  User, 
  Mail, 
  LogOut, 
  ArrowLeft, 
  Heart, 
  TrendingUp, 
  Award,
  Calendar,
  Target,
  Phone,
  MapPin
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useFavorites } from "../contexts/FavoritesContext";
import { toast } from "sonner";

const ProfilePage = () => {
  const { user, login, signup, logout } = useAuth();
  const { favorites } = useFavorites();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    age: "",
    dietaryGoals: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (isLoginMode) {
        const result = await login(formData.email, formData.password);
        if (result.success) {
          toast.success("Logged in successfully!");
        } else {
          toast.error(result.error || "Login failed");
        }
      } else {
        const result = await signup(formData.name, formData.email, formData.password, formData.phone, formData.location, formData.age, formData.dietaryGoals);
        if (result.success) {
          toast.success("Account created successfully!");
        } else {
          toast.error(result.error || "Signup failed");
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDietaryGoalChange = (goal, checked) => {
    setFormData(prev => ({
      ...prev,
      dietaryGoals: checked 
        ? [...prev.dietaryGoals, goal]
        : prev.dietaryGoals.filter(g => g !== goal)
    }));
  };

  const dietaryGoalOptions = [
    "Reduce meat consumption",
    "Improve health",
    "Environmental impact",
    "Animal welfare",
    "Weight management",
    "Allergies/Intolerances"
  ];

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
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded-full relative">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-600 rounded-full ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-green-800">CraveKind</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-md mx-auto px-4 py-20">
          <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-800">
                {isLoginMode ? "Welcome Back!" : "Join CraveKind"}
              </CardTitle>
              <p className="text-green-700">
                {isLoginMode ? "Sign in to your account" : "Create your account"}
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLoginMode && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        type="text"
                        placeholder="City, Country"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age Group</Label>
                      <Select value={formData.age} onValueChange={(value) => handleInputChange("age", value)}>
                        <SelectTrigger className="border-green-200 focus:border-green-500">
                          <SelectValue placeholder="Select your age group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="18-25">18-25</SelectItem>
                          <SelectItem value="26-35">26-35</SelectItem>
                          <SelectItem value="36-45">36-45</SelectItem>
                          <SelectItem value="46-55">46-55</SelectItem>
                          <SelectItem value="56+">56+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Dietary Goals</Label>
                      <div className="grid grid-cols-1 gap-2">
                        {dietaryGoalOptions.map((goal) => (
                          <div key={goal} className="flex items-center space-x-2">
                            <Checkbox
                              id={goal}
                              checked={formData.dietaryGoals.includes(goal)}
                              onCheckedChange={(checked) => handleDietaryGoalChange(goal, checked)}
                            />
                            <Label htmlFor={goal} className="text-sm text-green-700">
                              {goal}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="border-green-200 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    required
                    className="border-green-200 focus:border-green-500"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  {isLoginMode ? "Sign In" : "Create Account"}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-green-700">
                  {isLoginMode ? "Don't have an account?" : "Already have an account?"}
                  <Button
                    variant="link"
                    className="text-green-600 hover:text-green-800 p-0 ml-1"
                    onClick={() => setIsLoginMode(!isLoginMode)}
                  >
                    {isLoginMode ? "Sign up" : "Sign in"}
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
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
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full relative">
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full ml-1"></div>
                    </div>
                  </div>
                </div>
                <span className="text-2xl font-bold text-green-800">CraveKind</span>
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <Avatar className="h-24 w-24 mx-auto mb-4">
            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
            <AvatarFallback className="text-2xl bg-green-100 text-green-800">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold text-green-800 mb-2">{user.name}</h1>
          <p className="text-green-700">{user.email}</p>
          {user.location && (
            <p className="text-green-600 text-sm flex items-center justify-center">
              <MapPin className="h-4 w-4 mr-1" />
              {user.location}
            </p>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm text-center">
            <CardContent className="pt-6">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-800">{favorites.length}</div>
              <div className="text-sm text-green-700">Favorites Saved</div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-800">12</div>
              <div className="text-sm text-green-700">Searches Made</div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm text-center">
            <CardContent className="pt-6">
              <Award className="h-8 w-8 text-amber-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-800">Plant Explorer</div>
              <div className="text-sm text-green-700">Current Badge</div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="journey">Journey</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-800">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-green-800">Searched for beef alternatives</p>
                        <p className="text-xs text-green-600">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-green-800">Added Beyond Beef to favorites</p>
                        <p className="text-xs text-green-600">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-green-800">Searched for chicken alternatives</p>
                        <p className="text-xs text-green-600">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-800">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        <Award className="h-3 w-3 mr-1" />
                        First Search
                      </Badge>
                      <span className="text-sm text-green-700">Completed your first search</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        <Heart className="h-3 w-3 mr-1" />
                        Favorite Collector
                      </Badge>
                      <span className="text-sm text-green-700">Saved 5+ favorites</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                        <Target className="h-3 w-3 mr-1" />
                        Plant Explorer
                      </Badge>
                      <span className="text-sm text-green-700">Explored multiple meat alternatives</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="journey" className="mt-6">
            <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-800">Your Plant-Based Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">Journey Started</h3>
                      <p className="text-sm text-green-700">{user.joinDate || 'January 2025'} - Beginning your plant-based exploration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">First Favorites</h3>
                      <p className="text-sm text-green-700">Found alternatives you love and saved them</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">Growing Knowledge</h3>
                      <p className="text-sm text-green-700">Learning about nutrition and plant-based alternatives</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="mt-6">
            <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-800">Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm text-green-700">Name</p>
                        <p className="font-semibold text-green-800">{user.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm text-green-700">Email</p>
                        <p className="font-semibold text-green-800">{user.email}</p>
                      </div>
                    </div>
                    {user.phone && (
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="text-sm text-green-700">Phone</p>
                          <p className="font-semibold text-green-800">{user.phone}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    {user.location && (
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="text-sm text-green-700">Location</p>
                          <p className="font-semibold text-green-800">{user.location}</p>
                        </div>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-green-700 mb-2">Dietary Goals</p>
                      <div className="flex flex-wrap gap-2">
                        {user.dietaryGoals?.length > 0 ? (
                          user.dietaryGoals.map((goal, index) => (
                            <Badge key={index} className="bg-green-100 text-green-800">
                              {goal}
                            </Badge>
                          ))
                        ) : (
                          <Badge className="bg-green-100 text-green-800">
                            Healthier Lifestyle
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;