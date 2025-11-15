import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertCircle, Video } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

const mockPendingActions = [
  {
    id: 1,
    action: "light_off",
    location: "Cafeteria - Section C",
    timestamp: "2024-01-15T11:20:00",
    user: "David Kim",
    points: 10,
    confidence: 0.78,
  },
  {
    id: 2,
    action: "fan_off",
    location: "Student Lounge",
    timestamp: "2024-01-15T11:10:00",
    user: "Lisa Anderson",
    points: 8,
    confidence: 0.82,
  },
  {
    id: 3,
    action: "door_closed",
    location: "Lab 5",
    timestamp: "2024-01-15T11:00:00",
    user: "Carlos Martinez",
    points: 12,
    confidence: 0.75,
  },
];

const Admin = () => {
  const [pendingActions, setPendingActions] = useState(mockPendingActions);
  const { toast } = useToast();

  const handleVerify = (id: number, approved: boolean) => {
    setPendingActions(pendingActions.filter((action) => action.id !== id));
    
    toast({
      title: approved ? "Action Verified" : "Action Rejected",
      description: approved
        ? "Blockchain reward transaction has been created"
        : "The detected action has been marked as invalid",
    });
  };

  const getActionLabel = (action: string) => {
    return action
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return "text-success";
    if (confidence >= 0.8) return "text-primary";
    return "text-yellow-600";
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Verification Panel</h1>
          <p className="text-muted-foreground mt-2">
            Review and verify AI-detected actions before awarding blockchain points
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-card-foreground">{pendingActions.length}</div>
                <div className="text-sm text-muted-foreground">Pending Review</div>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-success">87</div>
                <div className="text-sm text-muted-foreground">Verified Today</div>
              </div>
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-destructive">12</div>
                <div className="text-sm text-muted-foreground">Rejected Today</div>
              </div>
              <XCircle className="w-8 h-8 text-destructive" />
            </div>
          </Card>
        </div>

        {/* Pending Actions */}
        <Card className="p-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-card-foreground">Pending Verifications</h2>

            {pendingActions.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>All actions have been reviewed</p>
              </div>
            ) : (
              <div className="space-y-4">
                {pendingActions.map((action) => (
                  <div
                    key={action.id}
                    className="p-4 rounded-lg border border-border space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-card-foreground">
                            {getActionLabel(action.action)}
                          </h3>
                          <Badge variant="outline">{action.location}</Badge>
                          <Badge variant="secondary">+{action.points} points</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Detected at {new Date(action.timestamp).toLocaleString("en-US", {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">User: </span>
                          <span className="font-medium text-foreground">{action.user}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">AI Confidence: </span>
                          <span className={`font-semibold ${getConfidenceColor(action.confidence)}`}>
                            {(action.confidence * 100).toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-border">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <Video className="w-4 h-4 mr-2" />
                        View Footage
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleVerify(action.id, true)}
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleVerify(action.id, false)}
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Admin;
