import { Heart, Moon, Footprints, Apple, Droplets, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PhysicalHealth = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="health-card text-center">
        <div className="w-16 h-16 mx-auto bg-gradient-wellness rounded-full flex items-center justify-center mb-4 pulse-health">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Physical Health</h2>
        <p className="text-muted-foreground">Your body's digital twin in real-time</p>
      </div>

      {/* Vital Signs */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Vital Signs</h3>
        
        <Card className="health-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center pulse-health">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Heart Rate</p>
                <p className="text-2xl font-bold">72 BPM</p>
                <p className="text-xs text-success">Optimal</p>
              </div>
            </div>
            <div className="text-right">
              <div className="w-16 h-16 bg-gradient-wellness rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">72</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="health-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Moon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sleep Quality</p>
                <p className="text-2xl font-bold">8.2/10</p>
                <p className="text-xs text-success">7h 42m last night</p>
              </div>
            </div>
            <div className="text-right">
              <div className="w-16 h-16 bg-gradient-mental rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">8.2</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="health-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                <Footprints className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Daily Steps</p>
                <p className="text-2xl font-bold">8,432</p>
                <p className="text-xs text-success">Goal: 10,000</p>
              </div>
            </div>
            <div className="text-right">
              <div className="w-full bg-glass rounded-full h-2 mb-1">
                <div className="bg-gradient-wellness h-2 rounded-full" style={{ width: "84%" }}></div>
              </div>
              <span className="text-xs text-muted-foreground">84%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Nutrition & Hydration */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Nutrition & Hydration</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <Card className="health-card">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-warning/20 rounded-full flex items-center justify-center mb-3">
                <Apple className="w-6 h-6 text-warning" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Calories</p>
              <p className="text-xl font-bold">1,847</p>
              <p className="text-xs text-muted-foreground">Goal: 2,200</p>
            </div>
          </Card>

          <Card className="health-card">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Water</p>
              <p className="text-xl font-bold">6/8</p>
              <p className="text-xs text-muted-foreground">Glasses</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Energy Level */}
      <Card className="health-card">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
            <Zap className="w-6 h-6 text-success" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Energy Level</p>
            <p className="text-2xl font-bold">High</p>
          </div>
        </div>
        <div className="w-full bg-glass rounded-full h-3">
          <div className="bg-gradient-wellness h-3 rounded-full" style={{ width: "78%" }}></div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Peak energy around 2 PM today</p>
      </Card>

      {/* Quick Actions */}
      <div className="space-y-3">
        <Button className="w-full h-12 bg-primary hover:bg-primary/90 glow-primary">
          Log Workout Session
        </Button>
        <Button variant="outline" className="w-full h-12 border-glass-border hover:bg-glass">
          Add Water Intake
        </Button>
      </div>
    </div>
  );
};