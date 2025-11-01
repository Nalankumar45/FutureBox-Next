import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import IdeaHub from "@/pages/ideahub";
import CollabSpace from "@/pages/collabspace";
import ImpactEngine from "@/pages/impact";
import ActionZone from "@/pages/actionzone";
import RecognitionArena from "@/pages/recognition";
import ProfileInsights from "@/pages/profile";
import AlertCenter from "@/pages/alerts";
import AdminPolicy from "@/pages/admin";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ideahub" component={IdeaHub} />
      <Route path="/collabspace" component={CollabSpace} />
      <Route path="/impact" component={ImpactEngine} />
      <Route path="/actionzone" component={ActionZone} />
      <Route path="/recognition" component={RecognitionArena} />
      <Route path="/profile" component={ProfileInsights} />
      <Route path="/alerts" component={AlertCenter} />
      <Route path="/admin" component={AdminPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="futurebox-ui-theme">
        <TooltipProvider>
          <SidebarProvider style={style as React.CSSProperties}>
            <div className="flex h-screen w-full">
              <AppSidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <header className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <SidebarTrigger data-testid="button-sidebar-toggle" />
                  <ThemeToggle />
                </header>
                <main className="flex-1 overflow-auto">
                  <Router />
                </main>
              </div>
            </div>
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
