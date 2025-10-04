import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, Camera } from "lucide-react";

interface QRScannerProps {
  onScan: (result: string) => void;
}

export default function QRScanner({ onScan }: QRScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string>("");
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const elementId = "qr-reader";

  const startScanning = async () => {
    try {
      setError("");
      const scanner = new Html5Qrcode(elementId);
      scannerRef.current = scanner;

      await scanner.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          stopScanning();
          onScan(decodedText);
        },
        () => {}
      );
      setIsScanning(true);
    } catch (err) {
      setError("Unable to access camera. Please check permissions.");
      console.error("QR Scanner error:", err);
    }
  };

  const stopScanning = () => {
    if (scannerRef.current) {
      scannerRef.current
        .stop()
        .then(() => {
          scannerRef.current?.clear();
          setIsScanning(false);
        })
        .catch((err) => console.error("Error stopping scanner:", err));
    }
  };

  useEffect(() => {
    return () => {
      stopScanning();
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      <div
        id={elementId}
        className={`w-full ${isScanning ? "block" : "hidden"}`}
      />

      {!isScanning && (
        <Card className="p-8 text-center">
          <Camera className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h3 className="text-lg font-semibold mb-2">Scan Specimen QR Code</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Point your camera at the QR code on any specimen display to view
            detailed information
          </p>
          <Button onClick={startScanning} data-testid="button-start-scan">
            Start Scanning
          </Button>
        </Card>
      )}

      {isScanning && (
        <Card className="p-4 text-center w-full">
          <p className="text-sm text-muted-foreground mb-2">
            Point camera at QR code
          </p>
          <Button
            variant="outline"
            onClick={stopScanning}
            data-testid="button-stop-scan"
          >
            Stop Scanning
          </Button>
        </Card>
      )}

      {error && (
        <Card className="p-4 border-destructive bg-destructive/10">
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm">{error}</p>
          </div>
        </Card>
      )}
    </div>
  );
}
