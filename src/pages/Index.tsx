import { useState } from "react";
import { Dashboard } from "@/components/Dashboard";
import { PhysicalHealth } from "@/components/PhysicalHealth";
import { MentalHealth } from "@/components/MentalHealth";
import { AuraCompanion } from "@/components/AuraCompanion";
import { RelaxationHub } from "@/components/RelaxationHub";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "physical":
        return <PhysicalHealth />;
      case "mental":
        return <MentalHealth />;
      case "aura":
        return <AuraCompanion />;
      case "relax":
        return <RelaxationHub />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Header */}
      <header className="glass-card mx-4 mt-4 mb-6 p-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold gradient-text">Pulse & Aura</h1>
            <p className="text-muted-foreground text-sm">Your Digital Twin of Well-being</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-aura flex items-center justify-center">
            <span className="text-2xl">🌟</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-20">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;