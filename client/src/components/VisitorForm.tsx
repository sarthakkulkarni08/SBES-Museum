import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";

interface VisitorFormProps {
  onSubmit: (name: string, className: string) => void;
}

export default function VisitorForm({ onSubmit }: VisitorFormProps) {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!name || !className) {
      setError("Please fill in all fields");
      return;
    }
    
    onSubmit(name, className);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Biology Museum</CardTitle>
          <CardDescription>
            Please provide your information to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                data-testid="input-visitor-name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="class">Class</Label>
              <Input
                id="class"
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="Enter your class"
                data-testid="input-visitor-class"
              />
            </div>
            
            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertCircle className="h-4 w-4" />
                <p>{error}</p>
              </div>
            )}
            
            <Button type="submit" className="w-full" data-testid="button-visitor-submit">
              Continue
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
