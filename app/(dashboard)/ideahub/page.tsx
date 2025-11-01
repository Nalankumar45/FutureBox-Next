"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IdeaCard } from "@/components/idea-card";
import { AIIndicator } from "@/components/ai-indicator";
import { Card } from "@/components/ui/card";
import { Plus, Search, Filter, Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function IdeaHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const mockIdeas = [
    {
      id: "1",
      title: "AI-Powered Customer Service Chatbot",
      description: "Implement an intelligent chatbot that can handle common customer queries, reducing response time by 60% and improving customer satisfaction.",
      author: { name: "Sarah Chen" },
      category: "Technology",
      tags: ["AI", "Customer Service", "Automation"],
      upvotes: 42,
      comments: 12,
      status: "review",
      scores: { feasibility: 8, impact: 9, cost: 7 },
    },
    {
      id: "2",
      title: "Sustainable Packaging Initiative",
      description: "Replace all plastic packaging with biodegradable alternatives to reduce environmental impact and appeal to eco-conscious consumers.",
      author: { name: "Michael Rodriguez" },
      category: "Sustainability",
      tags: ["Environment", "Packaging", "ESG"],
      upvotes: 38,
      comments: 8,
      status: "approved",
      scores: { feasibility: 7, impact: 8, cost: 6 },
    },
    {
      id: "3",
      title: "Remote Work Wellness Program",
      description: "Create a comprehensive wellness program for remote employees including virtual fitness classes, mental health support, and ergonomic equipment stipends.",
      author: { name: "Emily Johnson" },
      category: "HR & Culture",
      tags: ["Wellness", "Remote Work", "Employee Benefits"],
      upvotes: 35,
      comments: 15,
      status: "implementing",
    },
    {
      id: "4",
      title: "Data Analytics Dashboard Overhaul",
      description: "Modernize our analytics dashboard with real-time data visualization, predictive insights, and customizable reporting for better decision-making.",
      author: { name: "David Park" },
      category: "Technology",
      tags: ["Analytics", "Data", "Dashboard"],
      upvotes: 29,
      comments: 6,
      status: "submitted",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2" data-testid="text-page-title">IdeaHub</h1>
            <p className="text-muted-foreground">
              Submit, manage, and collaborate on innovative ideas
            </p>
          </div>
          <Button size="lg" data-testid="button-submit-idea">
            <Plus className="h-5 w-5 mr-2" />
            Submit Idea
          </Button>
        </div>

        <Card className="p-4 bg-primary/5 border-primary/20 mb-6">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium text-sm mb-1">AI Features Available</p>
              <p className="text-sm text-muted-foreground">
                This module includes AI-powered title suggestions, duplicate detection using semantic
                search, NLP auto-tagging, and automated idea enhancement.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex gap-4 mb-6 flex-wrap">
          <div className="flex-1 min-w-[300px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search ideas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-ideas"
              />
            </div>
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[200px]" data-testid="select-category">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="sustainability">Sustainability</SelectItem>
              <SelectItem value="hr">HR & Culture</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" data-testid="button-filter">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {mockIdeas.map((idea) => (
          <IdeaCard key={idea.id} {...idea} />
        ))}
      </div>
    </div>
  );
}
