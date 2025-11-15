import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, TrendingUp, Award, History, Shield } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const mockTransactions = [
  {
    id: "tx_001",
    action: "Light switched off",
    points: 10,
    timestamp: "2024-01-15T10:30:00",
    hash: "0x7f9a...3b2c",
    location: "Lab 3",
  },
  {
    id: "tx_002",
    action: "Fan turned off",
    points: 8,
    timestamp: "2024-01-15T09:45:00",
    hash: "0x3c4d...8a1f",
    location: "Library",
  },
  {
    id: "tx_003",
    action: "Door closed (AC room)",
    points: 12,
    timestamp: "2024-01-15T09:15:00",
    hash: "0x1a2b...5e7d",
    location: "Conference Room",
  },
  {
    id: "tx_004",
    action: "Projector powered down",
    points: 10,
    timestamp: "2024-01-15T08:30:00",
    hash: "0x9f8e...4c3b",
    location: "Lecture Hall",
  },
];

const Wallet = () => {
  const totalPoints = 1250;
  const weeklyGain = 185;
  const totalActions = 125;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blockchain Wallet</h1>
          <p className="text-muted-foreground mt-2">
            Your verified sustainability rewards on the blockchain
          </p>
        </div>

        {/* Balance Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-eco text-primary-foreground">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Coins className="w-8 h-8" />
                <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                  Balance
                </Badge>
              </div>
              <div>
                <div className="text-4xl font-bold">{totalPoints}</div>
                <div className="text-primary-foreground/80">EcoPoints</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <TrendingUp className="w-8 h-8 text-success" />
                <Badge variant="outline">This Week</Badge>
              </div>
              <div>
                <div className="text-4xl font-bold text-card-foreground">+{weeklyGain}</div>
                <div className="text-muted-foreground">Points Earned</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Award className="w-8 h-8 text-primary" />
                <Badge variant="outline">Total</Badge>
              </div>
              <div>
                <div className="text-4xl font-bold text-card-foreground">{totalActions}</div>
                <div className="text-muted-foreground">Actions Verified</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blockchain Info */}
        <Card className="p-6 bg-secondary">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-secondary-foreground flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-semibold text-card-foreground">Blockchain-Verified Rewards</h3>
              <p className="text-sm text-muted-foreground">
                All reward transactions are recorded on an immutable blockchain ledger. Each action you perform 
                generates a cryptographic hash that links to the previous transaction, creating a tamper-proof 
                chain of your sustainability contributions.
              </p>
            </div>
          </div>
        </Card>

        {/* Transaction History */}
        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <History className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-card-foreground">Transaction History</h2>
            </div>

            <div className="space-y-4">
              {mockTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-start justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-card-foreground">{tx.action}</span>
                      <Badge variant="outline" className="text-xs">
                        {tx.location}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(tx.timestamp).toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">
                      Hash: {tx.hash}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-success">+{tx.points}</div>
                    <div className="text-xs text-muted-foreground">Points</div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full">
              Load More Transactions
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Wallet;
