import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface OrganismCardProps {
  id: string;
  commonName: string;
  scientificName: string;
  kingdom: string;
  imageUrl: string;
}

export default function OrganismCard({
  id,
  commonName,
  scientificName,
  kingdom,
  imageUrl,
}: OrganismCardProps) {
  return (
    <Link href={`/organism/${id}`}>
      <Card className="overflow-hidden hover-elevate active-elevate-2 transition-transform duration-200 cursor-pointer" data-testid={`card-organism-${id}`}>
        <div className="relative aspect-[4/3]">
          <img
            src={imageUrl}
            alt={commonName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <Badge className="absolute top-2 right-2" data-testid={`badge-kingdom-${id}`}>
            {kingdom}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1" data-testid={`text-common-name-${id}`}>
            {commonName}
          </h3>
          <p className="text-sm font-serif italic text-muted-foreground" data-testid={`text-scientific-name-${id}`}>
            {scientificName}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
