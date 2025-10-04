import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import AdminForm from "@/components/AdminForm";
import QRCodeDisplay from "@/components/QRCodeDisplay";
import AdminLogin from "@/components/AdminLogin";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Plus, Pencil, Trash2, QrCode, LogOut } from "lucide-react";
import butterflyImg from "@assets/generated_images/Blue_morpho_butterfly_specimen_b13e1e60.png";
import fernImg from "@assets/generated_images/Pressed_fern_botanical_specimen_ff04ec93.png";
import fishImg from "@assets/generated_images/Preserved_tropical_fish_specimen_d1c783f0.png";

const mockOrganisms = [
  {
    id: "1",
    commonName: "Blue Morpho Butterfly",
    scientificName: "Morpho menelaus",
    kingdom: "Animalia",
    imageUrl: butterflyImg,
  },
  {
    id: "2",
    commonName: "Maidenhair Fern",
    scientificName: "Adiantum capillus-veneris",
    kingdom: "Plantae",
    imageUrl: fernImg,
  },
  {
    id: "3",
    commonName: "Clownfish",
    scientificName: "Amphiprion ocellaris",
    kingdom: "Animalia",
    imageUrl: fishImg,
  },
];

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "administratorSBES";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const authStatus = sessionStorage.getItem("adminAuth");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleLogin = (username: string, password: string) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      sessionStorage.setItem("adminAuth", "true");
      setIsAuthenticated(true);
    } else {
      alert("Incorrect username or password");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
    setLocation("/");
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }
  const [activeTab, setActiveTab] = useState("list");
  const [selectedOrganism, setSelectedOrganism] = useState<string | null>(null);

  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
    setActiveTab("list");
  };

  const handleEdit = (id: string) => {
    setSelectedOrganism(id);
    setActiveTab("form");
  };

  const handleDelete = (id: string) => {
    console.log("Delete organism:", id);
  };

  const handleGenerateQR = (id: string) => {
    setSelectedOrganism(id);
    setActiveTab("qr");
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
          <h1 className="text-xl font-bold flex-1" data-testid="text-page-title">Admin Panel</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              data-testid="button-logout"
            >
              <LogOut className="h-5 w-5" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="list" data-testid="tab-list">Organisms</TabsTrigger>
              <TabsTrigger value="form" data-testid="tab-form">
                {selectedOrganism ? "Edit" : "Add New"}
              </TabsTrigger>
              {selectedOrganism && (
                <TabsTrigger value="qr" data-testid="tab-qr">QR Code</TabsTrigger>
              )}
            </TabsList>
            {activeTab === "list" && (
              <Button
                onClick={() => {
                  setSelectedOrganism(null);
                  setActiveTab("form");
                }}
                data-testid="button-add-organism"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Organism
              </Button>
            )}
          </div>

          <TabsContent value="list" className="space-y-4">
            {mockOrganisms.map((organism) => (
              <Card key={organism.id} data-testid={`card-organism-${organism.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={organism.imageUrl}
                      alt={organism.commonName}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{organism.commonName}</h3>
                      <p className="text-sm font-serif italic text-muted-foreground">
                        {organism.scientificName}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Kingdom: {organism.kingdom}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleGenerateQR(organism.id)}
                        data-testid={`button-qr-${organism.id}`}
                      >
                        <QrCode className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEdit(organism.id)}
                        data-testid={`button-edit-${organism.id}`}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDelete(organism.id)}
                        data-testid={`button-delete-${organism.id}`}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="form">
            <AdminForm onSubmit={handleSubmit} />
          </TabsContent>

          {selectedOrganism && (
            <TabsContent value="qr">
              <div className="flex justify-center">
                <QRCodeDisplay
                  value={`${window.location.origin}/organism/${selectedOrganism}`}
                  organismName={
                    mockOrganisms.find((o) => o.id === selectedOrganism)?.commonName || ""
                  }
                />
              </div>
            </TabsContent>
          )}
        </Tabs>
      </main>
    </div>
  );
}
