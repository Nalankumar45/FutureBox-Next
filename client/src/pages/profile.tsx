import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/stat-card";
import { Lightbulb, ThumbsUp, MessageSquare, TrendingUp, Sparkles } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const activityData = [
  { month: "Jan", ideas: 3, comments: 12 },
  { month: "Feb", ideas: 5, comments: 18 },
  { month: "Mar", ideas: 4, comments: 15 },
  { month: "Apr", ideas: 6, comments: 22 },
  { month: "May", ideas: 7, comments: 25 },
  { month: "Jun", ideas: 5, comments: 20 },
];

const skillsData = [
  { skill: "Innovation", value: 85 },
  { skill: "Collaboration", value: 92 },
  { skill: "Impact", value: 78 },
  { skill: "Execution", value: 88 },
  { skill: "Leadership", value: 75 },
];

export default function ProfileInsights() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" data-testid="text-page-title">Profile & Insights</h1>
        <p className="text-muted-foreground">
          Your innovation stats and AI-driven recommendations
        </p>
      </div>

      <Card className="p-4 bg-primary/5 border-primary/20 mb-8">
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium text-sm mb-1">AI-Powered Insights</p>
            <p className="text-sm text-muted-foreground">
              Personalized recommendations, predictive analytics, innovation heatmaps, and
              departmental performance metrics powered by machine learning.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 mb-8">
        <div className="flex items-center gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={undefined} />
            <AvatarFallback className="text-2xl">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">John Doe</h2>
            <p className="text-muted-foreground mb-3">Product Manager • Engineering</p>
            <div className="flex gap-2 flex-wrap">
              <Badge>Innovator</Badge>
              <Badge>Collaborator</Badge>
              <Badge>Impact Champion</Badge>
            </div>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-primary">1,245</p>
            <p className="text-sm text-muted-foreground">Total Points</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Ideas Submitted"
          value={18}
          icon={Lightbulb}
          trend={{ value: 15, isPositive: true }}
          testId="stat-ideas"
        />
        <StatCard
          title="Ideas Approved"
          value={12}
          icon={ThumbsUp}
          trend={{ value: 20, isPositive: true }}
          testId="stat-approved"
        />
        <StatCard
          title="Total Comments"
          value={89}
          icon={MessageSquare}
          trend={{ value: 8, isPositive: true }}
          testId="stat-comments"
        />
        <StatCard
          title="Avg Impact Score"
          value="8.2"
          icon={TrendingUp}
          trend={{ value: 5, isPositive: true }}
          testId="stat-impact-score"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Activity Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Bar dataKey="ideas" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="comments" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Innovation Profile</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={skillsData}>
              <PolarGrid className="stroke-muted" />
              <PolarAngleAxis dataKey="skill" className="text-xs" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} className="text-xs" />
              <Radar
                name="Your Score"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.3}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Recommendations
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Collaborate More",
              description: "You have strong technical ideas. Consider partnering with marketing team members to increase implementation impact.",
            },
            {
              title: "Explore New Categories",
              description: "Based on your skills, you might excel in Sustainability initiatives. 3 opportunities match your profile.",
            },
            {
              title: "Quick Win Opportunity",
              description: "Your 'Dashboard Overhaul' idea has high feasibility. Push for approval this week for faster implementation.",
            },
          ].map((rec, index) => (
            <div key={index} className="p-4 rounded-lg border hover-elevate">
              <h4 className="font-medium mb-1">{rec.title}</h4>
              <p className="text-sm text-muted-foreground">{rec.description}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
