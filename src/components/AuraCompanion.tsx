import { useState } from "react";
import { Sparkles, Send, Heart, Star, Smile, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const AuraCompanion = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "aura",
      content: "Hello beautiful soul! ✨ I'm Aura, your wellness companion. I've been watching your journey today and I'm so proud of your meditation streak! How are you feeling right now?",
      timestamp: "2 min ago"
    },
    {
      id: 2,
      type: "user",
      content: "Feeling a bit stressed with work deadlines",
      timestamp: "1 min ago"
    },
    {
      id: 3,
      type: "aura",
      content: "I understand that pressure, dear. Let's take a moment together. Your heart rate shows you're calm underneath it all. Would you like me to guide you through a 3-minute breathing exercise to reset your energy? 🌸",
      timestamp: "Just now"
    }
  ]);

  const encouragements = [
    { icon: "🌟", text: "You've meditated 7 days in a row!", action: "Amazing streak!" },
    { icon: "💪", text: "Your sleep quality improved 15%", action: "Keep it up!" },
    { icon: "🧘", text: "Stress levels are at an all-time low", action: "You're thriving!" },
    { icon: "❤️", text: "Your heart rate variability is excellent", action: "So healthy!" }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: chatMessages.length + 1,
      type: "user" as const,
      content: message,
      timestamp: "Just now"
    };
    
    setChatMessages([...chatMessages, newMessage]);
    setMessage("");
    
    // Simulate Aura's response
    setTimeout(() => {
      const auraResponse = {
        id: chatMessages.length + 2,
        type: "aura" as const,
        content: "I hear you, and your feelings are completely valid. Remember, every challenge is an opportunity for growth. You're stronger than you know! 💙✨",
        timestamp: "Just now"
      };
      setChatMessages(prev => [...prev, auraResponse]);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="health-card text-center">
        <div className="w-20 h-20 mx-auto bg-gradient-aura rounded-full flex items-center justify-center mb-4 float">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Meet Aura</h2>
        <p className="text-muted-foreground">Your empathetic AI wellness companion</p>
      </div>

      {/* Aura Status */}
      <Card className="health-card">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-aura rounded-full flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <p className="font-semibold">Aura is online</p>
            </div>
            <p className="text-sm text-muted-foreground">Analyzing your wellness patterns...</p>
            <p className="text-xs text-accent">Last sync: Just now</p>
          </div>
        </div>
      </Card>

      {/* Daily Encouragements */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Today's Celebrations</h3>
        
        {encouragements.map((item, index) => (
          <Card key={index} className="health-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <p className="font-semibold">{item.text}</p>
                  <p className="text-sm text-muted-foreground">{item.action}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-glass-border hover:bg-glass">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Chat Interface */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Chat with Aura</h3>
        
        <Card className="health-card">
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gradient-aura text-white'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex space-x-2 mt-4">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share how you're feeling..."
              className="flex-1 bg-glass border-glass-border"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-primary hover:bg-primary/90"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>

      {/* Quick Wellness Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-16 flex-col space-y-1 border-glass-border hover:bg-glass">
          <Smile className="w-6 h-6" />
          <span className="text-sm">Mood Check</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col space-y-1 border-glass-border hover:bg-glass">
          <Star className="w-6 h-6" />
          <span className="text-sm">Daily Affirmation</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col space-y-1 border-glass-border hover:bg-glass">
          <Zap className="w-6 h-6" />
          <span className="text-sm">Energy Boost</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col space-y-1 border-glass-border hover:bg-glass">
          <Heart className="w-6 h-6" />
          <span className="text-sm">Gratitude</span>
        </Button>
      </div>
    </div>
  );
};