import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface OrganismDetailProps {
  commonName: string;
  scientificName: string;
  kingdom: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  species: string;
  morphology: string;
  physiology: string;
  habitat: string;
  distribution: string;
  imageUrl: string;
  galleryImages?: string[];
}

export default function OrganismDetail({
  commonName,
  scientificName,
  kingdom,
  phylum,
  class: className,
  order,
  family,
  genus,
  species,
  morphology,
  physiology,
  habitat,
  distribution,
  imageUrl,
  galleryImages = [],
}: OrganismDetailProps) {
  return (
    <div className="space-y-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt={commonName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h1 className="text-4xl font-bold text-white mb-2" data-testid="text-organism-name">
            {commonName}
          </h1>
          <p className="text-xl font-serif italic text-white/90" data-testid="text-organism-scientific">
            {scientificName}
          </p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start" data-testid="tabs-organism-info">
          <TabsTrigger value="overview" data-testid="tab-overview">Overview</TabsTrigger>
          <TabsTrigger value="morphology" data-testid="tab-morphology">Morphology</TabsTrigger>
          <TabsTrigger value="physiology" data-testid="tab-physiology">Physiology</TabsTrigger>
          <TabsTrigger value="classification" data-testid="tab-classification">Classification</TabsTrigger>
          {galleryImages.length > 0 && (
            <TabsTrigger value="gallery" data-testid="tab-gallery">Gallery</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Habitat & Distribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                  Habitat
                </h4>
                <p className="leading-relaxed" data-testid="text-habitat">{habitat}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                  Distribution
                </h4>
                <p className="leading-relaxed" data-testid="text-distribution">{distribution}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="morphology">
          <Card>
            <CardHeader>
              <CardTitle>Morphological Characteristics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed" data-testid="text-morphology">{morphology}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="physiology">
          <Card>
            <CardHeader>
              <CardTitle>Physiological Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed" data-testid="text-physiology">{physiology}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="classification">
          <Card>
            <CardHeader>
              <CardTitle>Taxonomic Classification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    Kingdom
                  </h4>
                  <Badge variant="secondary" data-testid="badge-kingdom">{kingdom}</Badge>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    Phylum
                  </h4>
                  <Badge variant="secondary" data-testid="badge-phylum">{phylum}</Badge>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    Class
                  </h4>
                  <Badge variant="secondary" data-testid="badge-class">{className}</Badge>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    Order
                  </h4>
                  <Badge variant="secondary" data-testid="badge-order">{order}</Badge>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    Family
                  </h4>
                  <Badge variant="secondary" data-testid="badge-family">{family}</Badge>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    Genus
                  </h4>
                  <Badge variant="secondary" data-testid="badge-genus">{genus}</Badge>
                </div>
                <div className="col-span-2">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    Species
                  </h4>
                  <Badge variant="secondary" data-testid="badge-species">{species}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {galleryImages.length > 0 && (
          <TabsContent value="gallery">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={`${commonName} ${idx + 1}`}
                    className="w-full h-full object-cover"
                    data-testid={`img-gallery-${idx}`}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
