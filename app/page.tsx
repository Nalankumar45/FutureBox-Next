import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {Lightbulb,Users,BarChart3,CheckSquare,Trophy,User,Bell,Settings,ArrowRight,Sparkles,Brain,Zap,Shield,} from "lucide-react";
import Image from "next/image";

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
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background" style={{backgroundImage: `linear-gradient(to bottom, rgba(var(--background), 0.95), rgba(var(--background), 0.98)), url(/hero-background.png)`,backgroundSize: "cover",backgroundPosition: "center",}}>
        <div className="max-w-7xl mx-auto px-6 py-28 md:py-40 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
              <Sparkles className="h-7 w-7 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                AI-Powered Innovation Platform
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in" data-testid="text-hero-title">
              Transform Ideas Into
              <br />
              <span className="text-primary">Innovation Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in">
              FutureBox helps organizations manage, evaluate, and track innovative ideas
              collaboratively with AI-powered workflows, ML analytics, and intelligent automation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
              <Link href="/ideahub">
                <Button size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/impact">
                <Button variant="outline" size="lg" className="text-base px-8 py-6 transition-all duration-300" data-testid="button-view-demo">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover-elevate">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-5 transition-transform hover:scale-105">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            {modules.length} Powerful Modules
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools for every stage of the innovation lifecycle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <Link key={index} href={module.url}>
              <Card className="p-6 h-full hover-elevate cursor-pointer group transition-all duration-300" data-testid={`card-module-${module.title.toLowerCase()}`}>
                <div className="flex flex-col h-full">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-muted mb-5 transition-transform group-hover:scale-105 ${module.color}`}>
                    <module.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{module.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{module.description}</p>
                  <div className="flex items-center text-primary text-sm font-semibold mt-5">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Card className="p-16 bg-primary/5 shadow-lg">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-5">Ready to Innovate?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join leading organizations transforming their innovation process with AI-powered
              collaboration and intelligent workflows.
            </p>
            <Link href="/ideahub">
              <Button size="lg" className="text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-start-innovating">
                Start Innovating Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
