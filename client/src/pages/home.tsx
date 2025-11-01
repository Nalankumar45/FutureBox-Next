import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Lightbulb,
  Users,
  BarChart3,
  CheckSquare,
  Trophy,
  User,
  Bell,
  Settings,
  ArrowRight,
  Sparkles,
  Brain,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Innovation_network_hero_background_6fa41386.png";

const modules = [
  {
    title: "IdeaHub",
    description: "Submit, manage, and enhance ideas with AI-powered suggestions and duplicate detection.",
    icon: Lightbulb,
    url: "/ideahub",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "CollabSpace",
    description: "Collaborate through discussions, upvoting, and AI-suggested team connections.",
    icon: Users,
    url: "/collabspace",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Impact Engine",
    description: "Evaluate ideas with automated scoring, ROI forecasts, and predictive analytics.",
    icon: BarChart3,
    url: "/impact",
    color: "text-green-600 dark:text-green-400",
  },
  {
    title: "ActionZone",
    description: "Track workflow stages from submission to implementation with AI-powered alerts.",
    icon: CheckSquare,
    url: "/actionzone",
    color: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Recognition Arena",
    description: "Gamification with points, badges, and AI-personalized recognition messages.",
    icon: Trophy,
    url: "/recognition",
    color: "text-yellow-600 dark:text-yellow-400",
  },
  {
    title: "Profile & Insights",
    description: "Analytics dashboards with innovation stats, heatmaps, and AI recommendations.",
    icon: User,
    url: "/profile",
    color: "text-indigo-600 dark:text-indigo-400",
  },
  {
    title: "Alert Center",
    description: "Smart notifications with AI-curated prompts and sentiment analysis.",
    icon: Bell,
    url: "/alerts",
    color: "text-red-600 dark:text-red-400",
  },
  {
    title: "Admin & Policy",
    description: "Governance tools with role-based access and AI-assisted content moderation.",
    icon: Settings,
    url: "/admin",
    color: "text-gray-600 dark:text-gray-400",
  },
];

const features = [
  {
    title: "AI-Powered Intelligence",
    description: "NLP tagging, semantic search, predictive analytics, and automated scoring.",
    icon: Brain,
  },
  {
    title: "Real-Time Collaboration",
    description: "Threaded discussions, instant updates, and smart team suggestions.",
    icon: Zap,
  },
  {
    title: "Enterprise Security",
    description: "Role-based access, audit trails, and compliance reporting.",
    icon: Shield,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <div
        className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(var(--background), 0.95), rgba(var(--background), 0.98)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wide">
                AI-Powered Innovation Platform
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
              Transform Ideas Into
              <br />
              <span className="text-primary">Innovation Reality</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              FutureBox helps organizations manage, evaluate, and track innovative ideas
              collaboratively with AI-powered workflows, ML analytics, and intelligent automation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/ideahub">
                <Button size="lg" data-testid="button-get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/impact">
                <Button variant="outline" size="lg" data-testid="button-view-demo">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover-elevate">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            8 Powerful Modules
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools for every stage of the innovation lifecycle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <Link key={index} href={module.url}>
              <Card className="p-6 h-full hover-elevate cursor-pointer" data-testid={`card-module-${module.title.toLowerCase()}`}>
                <div className="flex flex-col h-full">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-muted mb-4 ${module.color}`}>
                    <module.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{module.description}</p>
                  <div className="flex items-center text-primary text-sm font-medium mt-4">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-background">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Innovate?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join leading organizations transforming their innovation process with AI-powered
              collaboration and intelligent workflows.
            </p>
            <Link href="/ideahub">
              <Button size="lg" data-testid="button-start-innovating">
                Start Innovating Today
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
