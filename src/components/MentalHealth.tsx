import { Brain, Smile, Focus, Zap, TrendingUp, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const MentalHealth = () => {
  const moodData = [
    { emotion: "😌", label: "Calm", level: 8 },
    { emotion: "😊", label: "Happy", level: 7 },
    { emotion: "🔥", label: "Energetic", level: 6 },
    { emotion: "😴", label: "Tired", level: 3 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="health-card text-center">
        <div className="w-16 h-16 mx-auto bg-gradient-mental rounded-full flex items-center justify-center mb-4 float">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Mental Health</h2>
        <p className="text-muted-foreground">Your mind's emotional landscape</p>
      </div>

      {/* Current Mood */}
      <Card className="health-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Current Mood</h3>
          <TrendingUp className="w-5 h-5 text-success" />
        </div>
        <div className="text-center">
          <div className="text-6xl mb-4">😌</div>
          <p className="text-2xl font-bold mb-2">Calm & Focused</p>
          <p className="text-muted-foreground">You're in a peaceful state today</p>
        </div>
      </Card>

      {/* Mood Tracking */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Mood Analysis</h3>
        
        {moodData.map((mood, index) => (
          <Card key={index} className="health-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{mood.emotion}</div>
                <div>
                  <p className="font-semibold">{mood.label}</p>
                  <p className="text-sm text-muted-foreground">Level {mood.level}/10</p>
                </div>
              </div>
              <div className="text-right">
                <div className="w-20 bg-glass rounded-full h-2">
                  <div 
                    className="bg-gradient-mental h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${mood.level * 10}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Stress Level */}
      <Card className="health-card">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Stress Level</p>
            <p className="text-2xl font-bold">Low</p>
          </div>
        </div>
        <div className="w-full bg-glass rounded-full h-3 mb-2">
          <div className="bg-gradient-wellness h-3 rounded-full" style={{ width: "25%" }}></div>
        </div>
        <p className="text-xs text-muted-foreground">Great job managing stress today!</p>
      </Card>

      {/* Focus & Productivity */}
      <Card className="health-card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
              <Focus className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Focus Score</p>
              <p className="text-2xl font-bold">85%</p>
            </div>
          </div>
          <div className="text-right">
            <div className="w-16 h-16 bg-gradient-mental rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">85</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Peak focus time: 10 AM - 12 PM</p>
      </Card>

      {/* Meditation Stats */}
      <Card className="health-card">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6 text-success" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Meditation Today</p>
            <p className="text-2xl font-bold">15 min</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <p className="text-lg font-bold text-success">7</p>
            <p className="text-xs text-muted-foreground">Day Streak</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-accent">3</p>
            <p className="text-xs text-muted-foreground">Sessions</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-primary">45</p>
            <p className="text-xs text-muted-foreground">Total Min</p>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="space-y-3">
        <Button className="w-full h-12 bg-accent hover:bg-accent/90 glow-accent">
          Start Guided Meditation
        </Button>
        <Button variant="outline" className="w-full h-12 border-glass-border hover:bg-glass">
          Log Current Mood
        </Button>
        <Button variant="outline" className="w-full h-12 border-glass-border hover:bg-glass">
          Breathing Exercise
        </Button>
      </div>
    </div>
  );
};