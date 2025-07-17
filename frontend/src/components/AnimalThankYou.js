import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Play, X, Award } from "lucide-react";

const AnimalThankYou = ({ animalFriend, environmentalImpact, onClose }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full bg-white/95 backdrop-blur-sm border-2 border-green-200">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
            <img 
              src={animalFriend.image} 
              alt={animalFriend.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <CardTitle className="text-green-800 flex items-center justify-center gap-2">
            <Award className="h-5 w-5 text-amber-500" />
            New Level Unlocked!
          </CardTitle>
        </CardHeader>
        
        <CardContent className="text-center space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">{animalFriend.name} says:</h3>
            <p className="text-green-700 italic">"{animalFriend.message}"</p>
          </div>
          
          {showVideo ? (
            <div className="relative">
              <video 
                src={animalFriend.video} 
                controls 
                autoPlay 
                className="w-full rounded-lg"
                onEnded={() => setShowVideo(false)}
              />
            </div>
          ) : (
            <Button 
              onClick={() => setShowVideo(true)}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Play className="h-4 w-4 mr-2" />
              Watch Thank You Video
            </Button>
          )}
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Your Environmental Impact:</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-700">{environmentalImpact.co2Saved}</div>
                <div className="text-xs text-blue-600">CO₂ Saved</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-700">{environmentalImpact.waterSaved}</div>
                <div className="text-xs text-blue-600">Water Saved</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-700">{environmentalImpact.landSaved}</div>
                <div className="text-xs text-blue-600">Land Saved</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge className="bg-amber-100 text-amber-800">
              <Heart className="h-3 w-3 mr-1" />
              Animal Protector
            </Badge>
            <Badge className="bg-green-100 text-green-800">
              <Award className="h-3 w-3 mr-1" />
              Level Up!
            </Badge>
          </div>
          
          <Button 
            onClick={onClose}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Continue Your Journey
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimalThankYou;