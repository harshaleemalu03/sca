import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Coins } from "lucide-react";

interface Detection {
  id: number;
  timestamp: string;
  action: string;
  location: string;
  confidence: number;
  pointsAwarded: number;
}

interface DetectionViewerProps {
  results: Detection[];
}

const DetectionViewer = ({ results }: DetectionViewerProps) => {
  const getActionLabel = (action: string) => {
    return action
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-card-foreground flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-success" />
            Detection Results
          </h2>
          <Badge variant="secondary">{results.length} actions found</Badge>
        </div>

        <div className="space-y-4">
          {results.map((detection) => (
            <div
              key={detection.id}
              className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-card-foreground">
                      {getActionLabel(detection.action)}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {(detection.confidence * 100).toFixed(0)}% confidence
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {detection.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {formatTimestamp(detection.timestamp)}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-success font-bold text-lg">
                    <Coins className="w-5 h-5" />
                    +{detection.pointsAwarded}
                  </div>
                  <div className="text-xs text-muted-foreground">Energy Credits</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default DetectionViewer;
