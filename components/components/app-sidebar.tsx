import {
  Lightbulb,
  Users,
  BarChart3,
  CheckSquare,
  Trophy,
  User,
  Bell,
  Settings,
  Sparkles,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "wouter";

const modules = [
  {
    title: "IdeaHub",
    url: "/ideahub",
    icon: Lightbulb,
  },
  {
    title: "CollabSpace",
    url: "/collabspace",
    icon: Users,
  },
  {
    title: "Impact Engine",
    url: "/impact",
    icon: BarChart3,
  },
  {
    title: "ActionZone",
    url: "/actionzone",
    icon: CheckSquare,
  },
  {
    title: "Recognition Arena",
    url: "/recognition",
    icon: Trophy,
  },
  {
    title: "Profile & Insights",
    url: "/profile",
    icon: User,
  },
  {
    title: "Alert Center",
    url: "/alerts",
    icon: Bell,
  },
  {
    title: "Admin & Policy",
    url: "/admin",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-6">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold">FutureBox</span>
              <span className="text-xs text-muted-foreground">Innovation Platform</span>
            </div>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Modules</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {modules.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location === item.url}
                    data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Link href={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
