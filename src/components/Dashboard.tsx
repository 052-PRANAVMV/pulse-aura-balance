import { Heart, Activity, Brain, Target, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="health-card text-center">
        <div className="mb-4">
          <div className="w-20 h-20 mx-auto bg-gradient-aura rounded-full flex items-center justify-center mb-4 float">
            <span className="text-4xl">✨</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Welcome back, Alex!</h2>
          <p className="text-muted-foreground">Your digital twin is evolving beautifully</p>
        </div>
      </div>

      {/* Health Score */}
      <div className="health-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Overall Wellness Score</h3>
          <TrendingUp className="w-5 h-5 text-success" />
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold gradient-text mb-2">87</div>
          <p className="text-muted-foreground">Excellent Progress</p>
          <div className="w-full bg-glass rounded-full h-3 mt-4">
            <div className="bg-gradient-wellness h-3 rounded-full" style={{ width: "87%" }}></div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="health-card">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Heart Rate</p>
              <p className="text-xl font-bold">72 BPM</p>
            </div>
          </div>
        </Card>

        <Card className="health-card">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
              <Brain className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Mood</p>
              <p className="text-xl font-bold">Calm</p>
            </div>
          </div>
        </Card>

        <Card className="health-card">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
              <Activity className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Activity</p>
              <p className="text-xl font-bold">8,432</p>
            </div>
          </div>
        </Card>

        <Card className="health-card">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-warning/20 rounded-full flex items-center justify-center">
              <Target className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Goals</p>
              <p className="text-xl font-bold">3/4</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Today's Achievement */}
      <div className="health-card">
        <div className="flex items-center space-x-3 mb-4">
          <Award className="w-6 h-6 text-success" />
          <h3 className="text-lg font-semibold">Today's Achievement</h3>
        </div>
        <div className="bg-gradient-wellness p-4 rounded-xl">
          <h4 className="font-semibold text-success-foreground mb-2">Mindful Moment Master</h4>
          <p className="text-success-foreground/80">You completed 3 meditation sessions today! Your mind is finding its rhythm.</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="default" className="h-14 text-lg bg-primary hover:bg-primary/90 glow-primary">
          Start Meditation
        </Button>
        <Button variant="outline" className="h-14 text-lg border-glass-border hover:bg-glass">
          Log Activity
        </Button>
      </div>
    </div>
  );
};