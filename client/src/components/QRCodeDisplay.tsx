import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

interface QRCodeDisplayProps {
  value: string;
  organismName: string;
}

export default function QRCodeDisplay({ value, organismName }: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        value,
        {
          width: 300,
          margin: 2,
        },
        (error: Error | null | undefined) => {
          if (error) console.error("QR generation error:", error);
        }
      );
    }
  }, [value]);

  const downloadQRCode = () => {
    if (canvasRef.current) {
      const url = canvasRef.current.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = `qr-${organismName.toLowerCase().replace(/\s+/g, "-")}.png`;
      link.click();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>QR Code for {organismName}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <canvas ref={canvasRef} data-testid="canvas-qr-code" />
        <Button onClick={downloadQRCode} data-testid="button-download-qr">
          <Download className="mr-2 h-4 w-4" />
          Download QR Code
        </Button>
      </CardContent>
    </Card>
  );
}
