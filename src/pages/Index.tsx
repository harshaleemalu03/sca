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
            <span className="text-xl font-bold text-foreground">EcoWatch Campus</span>
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
            <span className="block text-primary mt-2">Powered by AI & Blockchain</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            EcoWatch Campus uses computer vision to detect energy-saving actions from CCTV footage and rewards 
            sustainability champions with blockchain-verified points.
          </p>
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

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">AI-Powered Detection</h3>
            <p className="text-muted-foreground text-sm">
              Computer vision analyzes CCTV footage to automatically detect energy-saving actions in real-time.
            </p>
          </div>

          <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Blockchain Rewards</h3>
            <p className="text-muted-foreground text-sm">
              Transparent, tamper-proof reward system built on blockchain technology for verified incentives.
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
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Real-Time Analytics</h3>
            <p className="text-muted-foreground text-sm">
              Monitor campus-wide energy-saving trends and measure environmental impact instantly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-eco rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Start Your Sustainability Journey Today
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Join the movement to make your campus more sustainable through AI-powered monitoring and blockchain-verified rewards.
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
          <p>© 2024 EcoWatch Campus. Sustainable automation for a greener future.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
