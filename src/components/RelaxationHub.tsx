import { Trees, Waves, Mountain, Sparkles, Play, Pause, Volume2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const RelaxationHub = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeEnvironment, setActiveEnvironment] = useState<string | null>(null);

  const environments = [
    {
      id: "forest",
      name: "Enchanted Forest",
      icon: Trees,
      description: "Gentle rustling leaves and distant bird songs",
      gradient: "from-green-400 to-emerald-600",
      duration: "15 min"
    },
    {
      id: "ocean",
      name: "Tranquil Ocean",
      icon: Waves,
      description: "Rhythmic waves on a peaceful shore",
      gradient: "from-blue-400 to-cyan-600",
      duration: "20 min"
    },
    {
      id: "mountain",
      name: "Mountain Peak",
      icon: Mountain,
      description: "Crisp air and gentle wind at altitude",
      gradient: "from-slate-400 to-blue-500",
      duration: "12 min"
    },
    {
      id: "cosmos",
      name: "Cosmic Journey",
      icon: Sparkles,
      description: "Floating through peaceful nebulae",
      gradient: "from-purple-400 to-pink-600",
      duration: "25 min"
    }
  ];

  const meditations = [
    { name: "Morning Clarity", duration: "10 min", type: "Focus" },
    { name: "Stress Release", duration: "15 min", type: "Relaxation" },
    { name: "Sleep Preparation", duration: "20 min", type: "Sleep" },
    { name: "Anxiety Relief", duration: "12 min", type: "Healing" }
  ];

  const handlePlayEnvironment = (envId: string) => {
    setActiveEnvironment(envId);
    setIsPlaying(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="health-card text-center">
        <div className="w-16 h-16 mx-auto bg-gradient-mental rounded-full flex items-center justify-center mb-4 float">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Relaxation Hub</h2>
        <p className="text-muted-foreground">Immersive AR/VR wellness environments</p>
      </div>

      {/* Current Session */}
      {activeEnvironment && (
        <Card className="health-card">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-gradient-aura rounded-full flex items-center justify-center mb-4 pulse-health">
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white" />
              )}
            </div>
            <h3 className="text-lg font-bold mb-2">
              {environments.find(env => env.id === activeEnvironment)?.name}
            </h3>
            <p className="text-muted-foreground mb-4">
              {environments.find(env => env.id === activeEnvironment)?.description}
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-primary hover:bg-primary/90"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button variant="outline" className="border-glass-border hover:bg-glass">
                <Volume2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* AR/VR Environments */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Immersive Environments</h3>
        
        <div className="grid grid-cols-1 gap-4">
          {environments.map((env) => {
            const IconComponent = env.icon;
            return (
              <Card key={env.id} className="health-card cursor-pointer hover:scale-[1.02] transition-all">
                <div 
                  className="flex items-center space-x-4"
                  onClick={() => handlePlayEnvironment(env.id)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${env.gradient} rounded-2xl flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{env.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{env.description}</p>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs bg-glass px-2 py-1 rounded-full">{env.duration}</span>
                      <span className="text-xs text-accent">AR/VR Ready</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-glass-border hover:bg-glass"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Guided Meditations */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Guided Meditations</h3>
        
        <div className="grid grid-cols-1 gap-3">
          {meditations.map((meditation, index) => (
            <Card key={index} className="health-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">{meditation.name}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">{meditation.duration}</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                        {meditation.type}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-glass-border hover:bg-glass">
                  Start
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Relaxation */}
      <div className="grid grid-cols-2 gap-4">
        <Button className="h-14 bg-gradient-mental hover:opacity-90 text-white">
          <div className="text-center">
            <div className="text-lg">🫁</div>
            <div className="text-sm">Breathing</div>
          </div>
        </Button>
        <Button className="h-14 bg-gradient-wellness hover:opacity-90 text-white">
          <div className="text-center">
            <div className="text-lg">🧘</div>
            <div className="text-sm">Quick Zen</div>
          </div>
        </Button>
      </div>

      {/* VR Setup Guide */}
      <Card className="health-card">
        <div className="text-center">
          <div className="text-4xl mb-3">🥽</div>
          <h4 className="font-semibold mb-2">Enhanced VR Experience</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Connect your VR headset for full immersive relaxation
          </p>
          <Button variant="outline" className="border-glass-border hover:bg-glass">
            Setup VR Device
          </Button>
        </div>
      </Card>
    </div>
  );
};