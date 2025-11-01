"use client";

import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { IdeaCard } from "@/components/idea-card";
import { Card } from "@/components/ui/card";
import { Plus, Search, Filter, Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/lib/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";

export default function IdeaHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newIdea, setNewIdea] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    authorId: 1,
  });
  const { toast } = useToast();

  const { data: ideas = [], isLoading } = useQuery<any[]>({
    queryKey: ["/api/ideas", { search: searchQuery, category: selectedCategory }],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (searchQuery) params.append("search", searchQuery);
      if (selectedCategory) params.append("category", selectedCategory);
      const res = await fetch(`/api/ideas?${params}`);
      if (!res.ok) throw new Error("Failed to fetch ideas");
      return res.json();
    },
  });

  const { data: categories = [] } = useQuery<any[]>({
    queryKey: ["/api/categories"],
  });

  const submitMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest("POST", "/api/ideas", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ideas"] });
      setDialogOpen(false);
      setNewIdea({
        title: "",
        description: "",
        category: "",
        tags: "",
        authorId: 1,
      });
      toast({
        title: "Success",
        description: "Your idea has been submitted successfully!",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit idea. Please try again.",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagsArray = newIdea.tags.split(",").map((tag) => tag.trim()).filter((tag) => tag);
    submitMutation.mutate({
      ...newIdea,
      tags: tagsArray,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
              IdeaHub
            </h1>
            <p className="text-lg text-muted-foreground">
              Submit, manage, and collaborate on innovative ideas
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="shadow-md hover:shadow-lg transition-all duration-300"
                data-testid="button-submit-idea"
              >
                <Plus className="h-5 w-5 mr-2" />
                Submit Idea
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Submit New Idea</DialogTitle>
                <DialogDescription>
                  Share your innovative idea with the team. Fill in the details below.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    data-testid="input-idea-title"
                    placeholder="Enter idea title..."
                    value={newIdea.title}
                    onChange={(e) => setNewIdea({ ...newIdea, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    data-testid="input-idea-description"
                    placeholder="Describe your idea in detail..."
                    value={newIdea.description}
                    onChange={(e) => setNewIdea({ ...newIdea, description: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={newIdea.category}
                    onValueChange={(value) => setNewIdea({ ...newIdea, category: value })}
                    required
                  >
                    <SelectTrigger data-testid="select-idea-category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat: any) => (
                        <SelectItem key={cat.id} value={cat.name}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    data-testid="input-idea-tags"
                    placeholder="e.g. AI, Innovation, Cost Saving"
                    value={newIdea.tags}
                    onChange={(e) => setNewIdea({ ...newIdea, tags: e.target.value })}
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={submitMutation.isPending} data-testid="button-submit-idea-form">
                    {submitMutation.isPending ? "Submitting..." : "Submit Idea"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
          <div className="flex items-start gap-4">
            <Sparkles className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold text-base mb-2">AI Features Available</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This module includes AI-powered title suggestions, duplicate detection using semantic
                search, NLP auto-tagging, and automated idea enhancement.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex gap-4 mb-8 flex-wrap">
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
              {categories.map((cat: any) => (
                <SelectItem key={cat.id} value={cat.name.toLowerCase()}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-8 text-muted-foreground">Loading ideas...</div>
      ) : ideas.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No ideas found. Be the first to submit an idea!
        </div>
      ) : (
        <div className="space-y-4">
          {ideas.map((idea: any) => (
            <IdeaCard key={idea.id} {...idea} />
          ))}
        </div>
      )}
    </div>
  );
}
