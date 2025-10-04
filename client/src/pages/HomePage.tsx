import { useState } from "react";
import { Link } from "wouter";
import SearchBar from "@/components/SearchBar";
import OrganismCard from "@/components/OrganismCard";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { QrCode, Settings } from "lucide-react";
import butterflyImg from "@assets/generated_images/Blue_morpho_butterfly_specimen_b13e1e60.png";
import fernImg from "@assets/generated_images/Pressed_fern_botanical_specimen_ff04ec93.png";
import fishImg from "@assets/generated_images/Preserved_tropical_fish_specimen_d1c783f0.png";
import frogImg from "@assets/generated_images/Tree_frog_preserved_specimen_91731a0e.png";
import fossilImg from "@assets/generated_images/Ammonite_fossil_specimen_eaaadb4e.png";
import snakeImg from "@assets/generated_images/Snake_specimen_preserved_coiled_17179121.png";

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
  {
    id: "4",
    commonName: "Red-Eyed Tree Frog",
    scientificName: "Agalychnis callidryas",
    kingdom: "Animalia",
    imageUrl: frogImg,
  },
  {
    id: "5",
    commonName: "Ammonite",
    scientificName: "Dactylioceras commune",
    kingdom: "Animalia",
    imageUrl: fossilImg,
  },
  {
    id: "6",
    commonName: "Ball Python",
    scientificName: "Python regius",
    kingdom: "Animalia",
    imageUrl: snakeImg,
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredOrganisms = mockOrganisms.filter(
    (org) =>
      org.commonName.toLowerCase().includes(search.toLowerCase()) ||
      org.scientificName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold" data-testid="text-app-title">Biology Museum</h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-2">Explore Our Collection</h2>
            <p className="text-muted-foreground">
              Search our specimen database or scan a QR code to learn more about organisms in our museum
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <SearchBar value={search} onChange={setSearch} />
            </div>
            <Link href="/scanner">
              <Button className="w-full sm:w-auto" data-testid="link-scanner">
                <QrCode className="mr-2 h-5 w-5" />
                Scan QR Code
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrganisms.map((organism) => (
            <OrganismCard key={organism.id} {...organism} />
          ))}
        </div>

        {filteredOrganisms.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground" data-testid="text-no-results">
              No organisms found matching your search.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
