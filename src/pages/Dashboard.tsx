import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Play, Loader2, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import StatsCards from "@/components/dashboard/StatsCards";
import DetectionViewer from "@/components/dashboard/DetectionViewer";

const Dashboard = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [detectionResults, setDetectionResults] = useState<any[]>([]);
  const { toast } = useToast();

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
    
    // Simulate AI processing
    setTimeout(() => {
      const mockResults = [
        {
          id: 1,
          timestamp: new Date().toISOString(),
          action: "light_off",
          location: "Lab 3 - Room 301",
          confidence: 0.94,
          pointsAwarded: 10,
        },
        {
          id: 2,
          timestamp: new Date(Date.now() - 30000).toISOString(),
          action: "fan_off",
          location: "Library - Section B",
          confidence: 0.89,
          pointsAwarded: 8,
        },
        {
          id: 3,
          timestamp: new Date(Date.now() - 60000).toISOString(),
          action: "door_closed",
          location: "Conference Room 2",
          confidence: 0.92,
          pointsAwarded: 12,
        },
      ];

      setDetectionResults(mockResults);
      setIsProcessing(false);
      
      toast({
        title: "Detection Complete",
        description: `Found ${mockResults.length} energy-saving actions`,
      });
    }, 3000);
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
        <StatsCards />

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
          <DetectionViewer results={detectionResults} />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
