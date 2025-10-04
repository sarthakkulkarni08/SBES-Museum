import { useRoute, Link } from "wouter";
import OrganismDetail from "@/components/OrganismDetail";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import butterflyImg from "@assets/generated_images/Blue_morpho_butterfly_specimen_b13e1e60.png";
import fernImg from "@assets/generated_images/Pressed_fern_botanical_specimen_ff04ec93.png";
import fishImg from "@assets/generated_images/Preserved_tropical_fish_specimen_d1c783f0.png";
import frogImg from "@assets/generated_images/Tree_frog_preserved_specimen_91731a0e.png";
import fossilImg from "@assets/generated_images/Ammonite_fossil_specimen_eaaadb4e.png";
import snakeImg from "@assets/generated_images/Snake_specimen_preserved_coiled_17179121.png";

const mockOrganismsData: Record<string, any> = {
  "1": {
    commonName: "Blue Morpho Butterfly",
    scientificName: "Morpho menelaus",
    kingdom: "Animalia",
    phylum: "Arthropoda",
    class: "Insecta",
    order: "Lepidoptera",
    family: "Nymphalidae",
    genus: "Morpho",
    species: "M. menelaus",
    morphology: "Large butterfly with wingspan of 12-20 cm. Wings are iridescent blue on the dorsal side due to microscopic scales that reflect light. Ventral side is brown with eyespots for camouflage. Six legs, segmented body with three main parts.",
    physiology: "Cold-blooded ectotherm. Open circulatory system with hemolymph. Breathes through spiracles connected to tracheal system. Feeds on rotting fruit using proboscis. Complete metamorphosis lifecycle.",
    habitat: "Tropical rainforest canopy and forest edges. Prefers areas with abundant fruit trees and flowering plants.",
    distribution: "Native to Central and South America, including Brazil, Peru, and Colombia. Found in lowland and montane rainforests.",
    imageUrl: butterflyImg,
    galleryImages: [butterflyImg, butterflyImg],
  },
  "2": {
    commonName: "Maidenhair Fern",
    scientificName: "Adiantum capillus-veneris",
    kingdom: "Plantae",
    phylum: "Pteridophyta",
    class: "Polypodiopsida",
    order: "Polypodiales",
    family: "Pteridaceae",
    genus: "Adiantum",
    species: "A. capillus-veneris",
    morphology: "Delicate perennial fern with fan-shaped fronds. Thin, dark brown to black stems (stipes). Individual leaflets are bright green, arranged alternately along the rachis.",
    physiology: "Reproduces via spores located on the underside of fronds. Vascular tissue transports water and nutrients. Photosynthesis occurs in the fronds.",
    habitat: "Moist, shaded areas near streams, waterfalls, and rock crevices. Prefers alkaline soil conditions.",
    distribution: "Widespread in temperate and tropical regions worldwide. Found in Europe, Asia, Africa, and the Americas.",
    imageUrl: fernImg,
    galleryImages: [fernImg],
  },
  "3": {
    commonName: "Clownfish",
    scientificName: "Amphiprion ocellaris",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Actinopterygii",
    order: "Perciformes",
    family: "Pomacentridae",
    genus: "Amphiprion",
    species: "A. ocellaris",
    morphology: "Small fish, 8-11 cm in length. Orange body with three distinctive white bands bordered by black. Rounded fins with black edges.",
    physiology: "Sequential hermaphrodite - all born male, dominant male becomes female. Gills for respiration. Lateral line system detects vibrations in water.",
    habitat: "Symbiotic relationship with sea anemones in coral reefs. Lives within the protective tentacles of host anemone.",
    distribution: "Indo-Pacific region, including waters around Southeast Asia, Australia, and the Philippines. Depth range 1-15 meters.",
    imageUrl: fishImg,
    galleryImages: [fishImg],
  },
  "4": {
    commonName: "Red-Eyed Tree Frog",
    scientificName: "Agalychnis callidryas",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Amphibia",
    order: "Anura",
    family: "Phyllomedusidae",
    genus: "Agalychnis",
    species: "A. callidryas",
    morphology: "Bright green body with blue and yellow striped sides. Distinctive red eyes. Orange toes with adhesive toe pads. Length 5-7 cm.",
    physiology: "Nocturnal carnivore. Breathes through skin and lungs. Three-chambered heart. External fertilization with aquatic tadpole stage.",
    habitat: "Rainforest canopy near ponds and streams. Arboreal lifestyle, resting on leaves during the day.",
    distribution: "Central America from southern Mexico to northern Colombia. Found in lowland and montane rainforests.",
    imageUrl: frogImg,
    galleryImages: [frogImg],
  },
  "5": {
    commonName: "Ammonite",
    scientificName: "Dactylioceras commune",
    kingdom: "Animalia",
    phylum: "Mollusca",
    class: "Cephalopoda",
    order: "Ammonitida",
    family: "Dactylioceratidae",
    genus: "Dactylioceras",
    species: "D. commune",
    morphology: "Spiral-shaped shell with intricate suture patterns. Chambered nautilus-like structure. Coiled in a flat spiral (planispiral). Diameter typically 5-15 cm.",
    physiology: "Extinct marine cephalopod. Lived in the outermost chamber, other chambers filled with gas for buoyancy. Jet propulsion for movement. Carnivorous predator.",
    habitat: "Ancient marine environments, typically in open ocean waters at various depths. Jurassic period seas.",
    distribution: "Fossil remains found worldwide. Particularly common in marine sedimentary rocks from the Early Jurassic period (approximately 180 million years ago).",
    imageUrl: fossilImg,
    galleryImages: [fossilImg],
  },
  "6": {
    commonName: "Ball Python",
    scientificName: "Python regius",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Reptilia",
    order: "Squamata",
    family: "Pythonidae",
    genus: "Python",
    species: "P. regius",
    morphology: "Stocky body with distinctive brown and black patterning. Adults reach 1-1.5 meters in length. Heat-sensing pits along the jaw. Smooth scales arranged in regular rows.",
    physiology: "Ectothermic constrictor. Jacobson's organ for chemical detection. Slow metabolism allows infrequent feeding. Sheds skin periodically as it grows.",
    habitat: "Terrestrial and semi-arboreal. Prefers grasslands, savannas, and sparse woodlands. Often found in termite mounds and mammal burrows.",
    distribution: "West and Central Africa, including Ghana, Togo, Benin, and Cameroon. Found in sub-Saharan regions.",
    imageUrl: snakeImg,
    galleryImages: [snakeImg],
  },
};

export default function OrganismDetailPage() {
  const [match, params] = useRoute("/organism/:id");

  if (!match || !params?.id) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Organism not found</p>
      </div>
    );
  }

  const organism = mockOrganismsData[params.id];

  if (!organism) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Organism not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" data-testid="button-back">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold flex-1" data-testid="text-page-title">Specimen Details</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <OrganismDetail {...organism} />
      </main>
    </div>
  );
}
