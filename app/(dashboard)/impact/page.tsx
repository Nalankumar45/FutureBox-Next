"use client";

import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/stat-card";
import { Lightbulb, TrendingUp, DollarSign, Users, Sparkles } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyData = [
  { month: "Jan", ideas: 12, implemented: 3 },
  { month: "Feb", ideas: 19, implemented: 5 },
  { month: "Mar", ideas: 15, implemented: 4 },
  { month: "Apr", ideas: 22, implemented: 7 },
  { month: "May", ideas: 28, implemented: 9 },
  { month: "Jun", ideas: 24, implemented: 8 },
];

const categoryData = [
  { name: "Technology", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Sustainability", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Operations", value: 20, color: "hsl(var(--chart-3))" },
  { name: "HR & Culture", value: 15, color: "hsl(var(--chart-4))" },
  { name: "Other", value: 5, color: "hsl(var(--chart-5))" },
];

const impactData = [
  { name: "Q1", roi: 125, cost: 45, impact: 85 },
  { name: "Q2", roi: 142, cost: 52, impact: 92 },
  { name: "Q3", roi: 158, cost: 48, impact: 88 },
  { name: "Q4", roi: 175, cost: 55, impact: 95 },
];

export default function ImpactEngine() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" data-testid="text-page-title">Impact Engine</h1>
        <p className="text-muted-foreground">
          Automated scoring, ROI forecasts, and predictive analytics
        </p>
      </div>

      <Card className="p-4 bg-primary/5 border-primary/20 mb-8">
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium text-sm mb-1">AI-Powered Analysis</p>
            <p className="text-sm text-muted-foreground">
              Uses ML clustering, predictive analytics, and automated scoring for feasibility, cost,
              and impact assessment. ROI forecasting and Quick Wins identification powered by AI.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Ideas"
          value={247}
          icon={Lightbulb}
          trend={{ value: 12, isPositive: true }}
          testId="stat-total-ideas"
        />
        <StatCard
          title="Avg Impact Score"
          value="8.4"
          icon={TrendingUp}
          trend={{ value: 5, isPositive: true }}
          testId="stat-impact"
        />
        <StatCard
          title="Potential ROI"
          value="$2.4M"
          icon={DollarSign}
          trend={{ value: 18, isPositive: true }}
          testId="stat-roi"
        />
        <StatCard
          title="Active Contributors"
          value={156}
          icon={Users}
          trend={{ value: 8, isPositive: true }}
          testId="stat-contributors"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Idea Submission Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
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
              <Bar dataKey="implemented" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Ideas by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Impact & ROI Analysis</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={impactData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="name" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px",
              }}
            />
            <Line
              type="monotone"
              dataKey="roi"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-1))" }}
            />
            <Line
              type="monotone"
              dataKey="impact"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-2))" }}
            />
            <Line
              type="monotone"
              dataKey="cost"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-3))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
