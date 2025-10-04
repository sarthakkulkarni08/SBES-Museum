import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OrganismFormData {
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
}

interface AdminFormProps {
  onSubmit: (data: OrganismFormData) => void;
  initialData?: Partial<OrganismFormData>;
  isLoading?: boolean;
}

export default function AdminForm({
  onSubmit,
  initialData,
  isLoading = false,
}: AdminFormProps) {
  const form = useForm<OrganismFormData>({
    defaultValues: {
      commonName: initialData?.commonName || "",
      scientificName: initialData?.scientificName || "",
      kingdom: initialData?.kingdom || "",
      phylum: initialData?.phylum || "",
      class: initialData?.class || "",
      order: initialData?.order || "",
      family: initialData?.family || "",
      genus: initialData?.genus || "",
      species: initialData?.species || "",
      morphology: initialData?.morphology || "",
      physiology: initialData?.physiology || "",
      habitat: initialData?.habitat || "",
      distribution: initialData?.distribution || "",
      imageUrl: initialData?.imageUrl || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="commonName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Common Name</FormLabel>
                  <FormControl>
                    <Input {...field} data-testid="input-common-name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="scientificName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Scientific Name</FormLabel>
                  <FormControl>
                    <Input {...field} data-testid="input-scientific-name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input {...field} data-testid="input-image-url" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taxonomic Classification</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="kingdom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kingdom</FormLabel>
                  <FormControl>
                    <Input {...field} data-testid="input-kingdom" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phylum"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phylum</FormLabel>
                  <FormControl>
                    <Input {...field} data-testid="input-phylum" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="class"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class</FormLabel>
                  <FormControl>
                    <Input {...field} data-testid="input-class" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="order"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Order</FormLabel>
                  <FormControl>
                    <Input {...field} data-testid="input-order" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="family"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Family</FormLabel>
                  <FormControl>
                    <Input {...field} data-testid="input-family" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="genus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genus</FormLabel>
                  <FormControl>
                    <Input {...field} data-testid="input-genus" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="species"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Species</FormLabel>
                  <FormControl>
                    <Input {...field} data-testid="input-species" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detailed Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="morphology"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Morphology</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={4} data-testid="input-morphology" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="physiology"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Physiology</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={4} data-testid="input-physiology" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="habitat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Habitat</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={3} data-testid="input-habitat" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="distribution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Distribution</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={3} data-testid="input-distribution" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-end">
          <Button
            type="submit"
            disabled={isLoading}
            data-testid="button-submit"
          >
            {isLoading ? "Saving..." : initialData ? "Update Organism" : "Add Organism"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
