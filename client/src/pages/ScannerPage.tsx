import { useLocation } from "wouter";
import QRScanner from "@/components/QRScanner";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ScannerPage() {
  const [, setLocation] = useLocation();

  const handleScan = (result: string) => {
    console.log("Scanned QR code:", result);
    const url = new URL(result);
    const pathname = url.pathname;
    if (pathname.startsWith("/organism/")) {
      setLocation(pathname);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" data-testid="button-back">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold flex-1" data-testid="text-page-title">Scan Specimen</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <QRScanner onScan={handleScan} />
      </main>
    </div>
  );
}
