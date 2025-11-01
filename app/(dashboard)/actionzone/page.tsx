"use client";

import { Card } from "@/components/ui/card";
import { WorkflowStage } from "@/components/workflow-stage";
import { IdeaCard } from "@/components/idea-card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, AlertCircle } from "lucide-react";

export default function ActionZone() {
  const mockIdeas = [
    {
      id: "1",
      title: "AI-Powered Customer Service Chatbot",
      description: "Implement an intelligent chatbot for customer support automation.",
      author: { name: "Sarah Chen" },
      category: "Technology",
      tags: ["AI", "Customer Service"],
      upvotes: 42,
      comments: 12,
      status: "implementing",
      stages: [
        { label: "Submitted", status: "completed" as const },
        { label: "Review", status: "completed" as const },
        { label: "Approved", status: "completed" as const },
        { label: "Planning", status: "current" as const },
        { label: "Implementation", status: "pending" as const },
      ],
    },
    {
      id: "2",
      title: "Sustainable Packaging Initiative",
      description: "Replace plastic packaging with biodegradable alternatives.",
      author: { name: "Michael Rodriguez" },
      category: "Sustainability",
      tags: ["Environment", "ESG"],
      upvotes: 38,
      comments: 8,
      status: "approved",
      stages: [
        { label: "Submitted", status: "completed" as const },
        { label: "Review", status: "completed" as const },
        { label: "Approved", status: "current" as const },
        { label: "Planning", status: "pending" as const },
        { label: "Implementation", status: "pending" as const },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" data-testid="text-page-title">ActionZone</h1>
        <p className="text-muted-foreground">
          Track workflow stages from submission to implementation
        </p>
      </div>

      <Card className="p-4 bg-primary/5 border-primary/20 mb-8">
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium text-sm mb-1">AI Workflow Management</p>
            <p className="text-sm text-muted-foreground">
              AI agent suggests next actions, assigns SMEs, identifies stalled ideas, and generates
              automatic progress summaries. Integration ready for Asana and other project tools.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
              <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">In Progress</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">At Risk</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">AI Alerts</p>
              <p className="text-2xl font-bold">5</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        {mockIdeas.map((idea) => (
          <Card key={idea.id} className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{idea.title}</h3>
                <Badge>{idea.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{idea.description}</p>
            </div>
            <WorkflowStage stages={idea.stages} />
          </Card>
        ))}
      </div>
    </div>
  );
}
