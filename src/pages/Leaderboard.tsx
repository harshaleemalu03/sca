import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";

const mockLeaderboard = [
  { id: 1, name: "Sarah Johnson", points: 1250, actions: 125, rank: 1, badge: "Eco Champion" },
  { id: 2, name: "Michael Chen", points: 1180, actions: 118, rank: 2, badge: "Sustainability Hero" },
  { id: 3, name: "Emily Rodriguez", points: 1050, actions: 105, rank: 3, badge: "Green Guardian" },
  { id: 4, name: "James Wilson", points: 980, actions: 98, rank: 4, badge: "Energy Saver" },
  { id: 5, name: "Priya Patel", points: 920, actions: 92, rank: 5, badge: "Eco Warrior" },
  { id: 6, name: "David Kim", points: 870, actions: 87, rank: 6, badge: "Planet Protector" },
  { id: 7, name: "Lisa Anderson", points: 810, actions: 81, rank: 7, badge: "Conservation Star" },
  { id: 8, name: "Carlos Martinez", points: 750, actions: 75, rank: 8, badge: "Green Pioneer" },
];

const Leaderboard = () => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Campus Leaderboard</h1>
          <p className="text-muted-foreground mt-2">
            Top sustainability champions making a difference
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6">
          {mockLeaderboard.slice(0, 3).map((user) => (
            <Card
              key={user.id}
              className={`p-6 text-center space-y-4 ${
                user.rank === 1 ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="flex justify-center">{getRankIcon(user.rank)}</div>
              <Avatar className="w-20 h-20 mx-auto">
                <AvatarFallback className="bg-gradient-eco text-primary-foreground text-xl">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg text-card-foreground">{user.name}</h3>
                <Badge variant="secondary" className="mt-2">
                  {user.badge}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-primary">{user.points}</div>
                  <div className="text-xs text-muted-foreground">Points</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-card-foreground">{user.actions}</div>
                  <div className="text-xs text-muted-foreground">Actions</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard Table */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-card-foreground">All Rankings</h2>
            </div>
            <div className="space-y-3">
              {mockLeaderboard.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 flex justify-center">{getRankIcon(user.rank)}</div>
                    <Avatar>
                      <AvatarFallback className="bg-secondary text-secondary-foreground">
                        {getInitials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-card-foreground">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.badge}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{user.points}</div>
                      <div className="text-xs text-muted-foreground">Points</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-card-foreground">{user.actions}</div>
                      <div className="text-xs text-muted-foreground">Actions</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Leaderboard;
