import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, Award, TrendingUp, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-eco flex items-center justify-center">
              <Video className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SCA - Sustainable Campus Automation</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link to="/leaderboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Leaderboard
            </Link>
            <Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors">
              Events
            </Link>
          </nav>
          <Link to="/dashboard">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Sustainable Campus Automation
            <span className="block text-primary mt-2">AI Vision + Blockchain Rewards</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SCA addresses the 30-40% campus energy waste through AI-powered CCTV monitoring and blockchain-verified 
            rewards, targeting 20-30% reduction in power consumption while gamifying sustainable behavior.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">11</span>
              </div>
              <span>SDG 11</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">12</span>
              </div>
              <span>SDG 12</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">13</span>
              </div>
              <span>SDG 13</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <Button size="lg" className="px-8">
                Launch Dashboard
              </Button>
            </Link>
            <Link to="/leaderboard">
              <Button size="lg" variant="outline" className="px-8">
                View Leaderboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Problem</h2>
          <p className="text-lg text-muted-foreground">
            Campus buildings waste <span className="text-primary font-bold">35-40% energy</span> through idle loads: 
            lights left ON after hours, PCs running overnight, air conditioners cooling empty rooms, and fans operating 
            in unoccupied spaces. This results in massive power wastage and unnecessary carbon emissions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary">40%</div>
              <div className="text-sm text-muted-foreground mt-1">Idle Load Waste</div>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Unmonitored Equipment</div>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary">High</div>
              <div className="text-sm text-muted-foreground mt-1">Carbon Footprint</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Solution</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">AI Vision Detection</h3>
            <p className="text-muted-foreground text-sm">
              YOLO-based computer vision analyzes CCTV footage to detect energy-saving actions like switching off 
              lights, fans, ACs, and PCs. Prototype testing identified powered-on computers after hours - a major 
              phantom load opportunity.
            </p>
          </div>

          <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Blockchain Credits</h3>
            <p className="text-muted-foreground text-sm">
              Immutable, redeemable energy credit tokens on a private blockchain. Each verified action generates a 
              tamper-proof reward that can be tracked and redeemed for campus benefits.
            </p>
          </div>

          <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Gamification</h3>
            <p className="text-muted-foreground text-sm">
              Compete on leaderboards, earn badges, and track your sustainability impact across campus.
            </p>
          </div>

          <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Impact Analytics</h3>
            <p className="text-muted-foreground text-sm">
              Real-time monitoring of campus energy trends with projected 20-30% power reduction through behavioral 
              change and automated interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Traction & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-card-foreground mb-2">🏆 i2i Finalist</h3>
              <p className="text-sm text-muted-foreground">Selected among top innovations in sustainable technology</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-card-foreground mb-2">🥇 AISSMS Ideathon Winner</h3>
              <p className="text-sm text-muted-foreground">First place in campus innovation challenge</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-card-foreground mb-2">🤖 IEEE AI Idea-thon</h3>
              <p className="text-sm text-muted-foreground">Recognized for AI-driven sustainability solution</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-card-foreground mb-2">📄 IJIRCCE Publication</h3>
              <p className="text-sm text-muted-foreground">Research published in international journal</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-eco rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join the Sustainability Revolution
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Be part of the movement to reduce campus energy waste by 20-30% through gamified, blockchain-verified sustainable actions.
          </p>
          <Link to="/dashboard">
            <Button size="lg" variant="secondary" className="px-8">
              Access Dashboard
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground text-sm">
          <p>© 2025 SCA - Sustainable Campus Automation. AI-powered energy solutions for a greener future.</p>
          <p className="mt-2">Supporting UN SDGs 11, 12 & 13 | Reducing campus energy waste by 20-30%</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
