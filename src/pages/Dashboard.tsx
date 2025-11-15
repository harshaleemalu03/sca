import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Play, Loader2, CheckCircle, Download, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/DashboardLayout";
import StatsCards from "@/components/dashboard/StatsCards";
import DetectionViewer from "@/components/dashboard/DetectionViewer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [detectionResults, setDetectionResults] = useState<any[]>([]);
  const [filterAction, setFilterAction] = useState<string>("all");
  const { toast } = useToast();

  // Calculate dynamic statistics
  const stats = useMemo(() => {
    const totalActions = detectionResults.length;
    const totalCredits = detectionResults.reduce((sum, d) => sum + d.pointsAwarded, 0);
    const averageConfidence = detectionResults.length > 0
      ? Math.round(detectionResults.reduce((sum, d) => sum + d.confidence, 0) / detectionResults.length * 100)
      : 0;
    const uniqueLocations = new Set(detectionResults.map(d => d.location)).size;

    return { totalActions, totalCredits, averageConfidence, uniqueLocations };
  }, [detectionResults]);

  // Filter detection results
  const filteredResults = useMemo(() => {
    if (filterAction === "all") return detectionResults;
    return detectionResults.filter(d => d.action === filterAction);
  }, [detectionResults, filterAction]);

  // Get unique action types for filter
  const actionTypes = useMemo(() => {
    return Array.from(new Set(detectionResults.map(d => d.action)));
  }, [detectionResults]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("video/")) {
        toast({
          title: "Invalid file type",
          description: "Please upload a video file",
          variant: "destructive",
        });
        return;
      }
      setVideoFile(file);
      setDetectionResults([]);
    }
  };

  const handleProcessVideo = async () => {
    if (!videoFile) return;

    setIsProcessing(true);
    
    // Simulate AI processing with more realistic results
    setTimeout(() => {
      const actions = ["light_off", "fan_off", "door_closed", "pc_shutdown", "ac_off"];
      const locations = [
        "CS Lab 3 - Room 301",
        "Library - Section B",
        "Conference Room 2",
        "Admin Block - Floor 2",
        "Cafeteria - Main Hall",
        "Electronics Lab 5",
      ];
      
      const mockResults = Array.from({ length: Math.floor(Math.random() * 5) + 3 }, (_, i) => ({
        id: i + 1,
        timestamp: new Date(Date.now() - i * 45000).toISOString(),
        action: actions[Math.floor(Math.random() * actions.length)],
        location: locations[Math.floor(Math.random() * locations.length)],
        confidence: 0.85 + Math.random() * 0.13,
        pointsAwarded: Math.floor(Math.random() * 8) + 8,
      }));

      setDetectionResults(prev => [...mockResults, ...prev]);
      setIsProcessing(false);
      
      toast({
        title: "Detection Complete",
        description: `Found ${mockResults.length} energy-saving actions`,
      });
    }, 3000);
  };

  const handleExportResults = () => {
    if (detectionResults.length === 0) return;

    const csvContent = [
      ["ID", "Timestamp", "Action", "Location", "Confidence", "Credits Awarded"],
      ...detectionResults.map(d => [
        d.id,
        new Date(d.timestamp).toLocaleString(),
        d.action,
        d.location,
        `${(d.confidence * 100).toFixed(1)}%`,
        d.pointsAwarded
      ])
    ].map(row => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sca-detections-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Export Complete",
      description: "Detection results exported as CSV",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Detection Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Upload CCTV footage to detect energy-saving actions and earn blockchain-verified credits
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Detecting: Lights OFF, Fans OFF, AC OFF, PC Shutdown, Door Closing
          </p>
        </div>

        {/* Stats */}
        <StatsCards 
          totalActions={stats.totalActions}
          totalCredits={stats.totalCredits}
          averageConfidence={stats.averageConfidence}
          uniqueLocations={stats.uniqueLocations}
        />

        {/* Upload Section */}
        <Card className="p-8">
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                  <Upload className="w-8 h-8 text-secondary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">Upload CCTV Footage</h3>
                <p className="text-sm text-muted-foreground">
                  Support for MP4, AVI, MOV formats
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <input
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="hidden"
                id="video-upload"
              />
              <label htmlFor="video-upload">
                <Button variant="outline" className="cursor-pointer" asChild>
                  <span>Choose Video File</span>
                </Button>
              </label>
              
              {videoFile && (
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  {videoFile.name}
                </div>
              )}

              <Button
                onClick={handleProcessVideo}
                disabled={!videoFile || isProcessing}
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Start AI Detection
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>

        {/* Detection Results */}
        {detectionResults.length > 0 && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <Select value={filterAction} onValueChange={setFilterAction}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Filter by action" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Actions</SelectItem>
                    {actionTypes.map(action => (
                      <SelectItem key={action} value={action}>
                        {action.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Badge variant="secondary">
                  {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""}
                </Badge>
              </div>
              <Button 
                variant="outline" 
                onClick={handleExportResults}
                disabled={detectionResults.length === 0}
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
            <DetectionViewer results={filteredResults} />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
