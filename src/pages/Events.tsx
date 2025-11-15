import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Zap, Fan, Lightbulb, DoorClosed, Monitor } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const mockEvents = [
  {
    id: 1,
    action: "light_off",
    location: "Lab 3 - Room 301",
    timestamp: "2024-01-15T10:30:00",
    points: 10,
    user: "Sarah Johnson",
    verified: true,
  },
  {
    id: 2,
    action: "fan_off",
    location: "Library - Section B",
    timestamp: "2024-01-15T10:25:00",
    points: 8,
    user: "Michael Chen",
    verified: true,
  },
  {
    id: 3,
    action: "door_closed",
    location: "Conference Room 2",
    timestamp: "2024-01-15T10:20:00",
    points: 12,
    user: "Emily Rodriguez",
    verified: true,
  },
  {
    id: 4,
    action: "ac_off",
    location: "Admin Block - Room 105",
    timestamp: "2024-01-15T10:15:00",
    points: 15,
    user: "James Wilson",
    verified: true,
  },
  {
    id: 5,
    action: "projector_off",
    location: "Lecture Hall A",
    timestamp: "2024-01-15T10:10:00",
    points: 10,
    user: "Priya Patel",
    verified: true,
  },
  {
    id: 6,
    action: "light_off",
    location: "Cafeteria",
    timestamp: "2024-01-15T10:05:00",
    points: 10,
    user: "David Kim",
    verified: false,
  },
];

const getActionIcon = (action: string) => {
  switch (action) {
    case "light_off":
      return <Lightbulb className="w-5 h-5" />;
    case "fan_off":
      return <Fan className="w-5 h-5" />;
    case "door_closed":
      return <DoorClosed className="w-5 h-5" />;
    case "ac_off":
      return <Zap className="w-5 h-5" />;
    case "projector_off":
      return <Monitor className="w-5 h-5" />;
    default:
      return <Zap className="w-5 h-5" />;
  }
};

const getActionLabel = (action: string) => {
  return action
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const Events = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Event History</h1>
          <p className="text-muted-foreground mt-2">
            Real-time log of all detected energy-saving actions across campus
          </p>
        </div>

        {/* Events Timeline */}
        <Card className="p-6">
          <div className="space-y-6">
            {mockEvents.map((event, index) => (
              <div key={event.id} className="relative">
                {index !== mockEvents.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-border" />
                )}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
                      {getActionIcon(event.action)}
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-card-foreground">
                            {getActionLabel(event.action)}
                          </h3>
                          {event.verified ? (
                            <Badge variant="default" className="text-xs">
                              Verified
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="text-xs">
                              Pending
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            +{event.points} points
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {formatTimestamp(event.timestamp)}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Detected action by <span className="font-medium text-foreground">{event.user}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Events;
