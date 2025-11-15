import { Card } from "@/components/ui/card";
import { TrendingUp, Zap, Award, Users } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      label: "Total Actions Detected",
      value: "1,234",
      change: "+12.5%",
      icon: Zap,
      color: "text-primary",
    },
    {
      label: "Points Awarded",
      value: "12,450",
      change: "+18.2%",
      icon: Award,
      color: "text-success",
    },
    {
      label: "Active Users",
      value: "342",
      change: "+8.4%",
      icon: Users,
      color: "text-accent",
    },
    {
      label: "Campus Impact",
      value: "95%",
      change: "+5.1%",
      icon: TrendingUp,
      color: "text-primary",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
                <p className="text-xs text-success">{stat.change} from last week</p>
              </div>
              <div className={`p-2 rounded-lg bg-secondary`}>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCards;
