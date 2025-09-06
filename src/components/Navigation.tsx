import { LayoutDashboard, Heart, Brain, Sparkles, Waves } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const navItems = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      gradient: "from-primary to-primary-glow"
    },
    {
      id: "physical",
      icon: Heart,
      label: "Physical",
      gradient: "from-success to-success-glow"
    },
    {
      id: "mental",
      icon: Brain,
      label: "Mental",
      gradient: "from-accent to-accent-glow"
    },
    {
      id: "aura",
      icon: Sparkles,
      label: "Aura",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      id: "relax",
      icon: Waves,
      label: "Relax",
      gradient: "from-blue-400 to-cyan-400"
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-card mx-4 mb-4 p-2 rounded-2xl">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center space-y-1 p-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? `bg-gradient-to-br ${item.gradient} text-white shadow-lg scale-110` 
                  : 'text-muted-foreground hover:text-foreground hover:bg-glass'
              }`}
            >
              <IconComponent className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};