import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import VisitorForm from "@/components/VisitorForm";
import HomePage from "@/pages/HomePage";
import ScannerPage from "@/pages/ScannerPage";
import OrganismDetailPage from "@/pages/OrganismDetailPage";
import AdminPage from "@/pages/AdminPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/scanner" component={ScannerPage} />
      <Route path="/organism/:id" component={OrganismDetailPage} />
      <Route path="/admin" component={AdminPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [hasRegistered, setHasRegistered] = useState(false);

  useEffect(() => {
    const registered = sessionStorage.getItem("visitorRegistered");
    setHasRegistered(registered === "true");
  }, []);

  const handleVisitorSubmit = (name: string, className: string) => {
    console.log("Visitor registered:", { name, class: className });
    sessionStorage.setItem("visitorRegistered", "true");
    sessionStorage.setItem("visitorName", name);
    sessionStorage.setItem("visitorClass", className);
    setHasRegistered(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {!hasRegistered && <VisitorForm onSubmit={handleVisitorSubmit} />}
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
