"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { IdeaCard } from "@/components/idea-card";
import { ThumbsUp, MessageSquare, Send, Sparkles } from "lucide-react";

export default function CollabSpace() {
  const [newComment, setNewComment] = useState("");

  const mockIdea = {
    id: "1",
    title: "AI-Powered Customer Service Chatbot",
    description: "Implement an intelligent chatbot that can handle common customer queries, reducing response time by 60% and improving customer satisfaction. This solution would integrate with our existing CRM and use natural language processing to understand customer intent.",
    author: { name: "Sarah Chen" },
    category: "Technology",
    tags: ["AI", "Customer Service", "Automation"],
    upvotes: 42,
    comments: 12,
    status: "review",
    scores: { feasibility: 8, impact: 9, cost: 7 },
  };

  const mockComments = [
    {
      id: "1",
      author: { name: "Michael Rodriguez", avatar: undefined },
      content: "This is a great idea! We could start with a pilot in the support department and measure the impact before rolling out company-wide.",
      timestamp: "2 hours ago",
      upvotes: 5,
    },
    {
      id: "2",
      author: { name: "Emily Johnson", avatar: undefined },
      content: "Have we considered the integration complexity with our legacy systems? We should probably do a technical feasibility study first.",
      timestamp: "1 hour ago",
      upvotes: 3,
    },
    {
      id: "3",
      author: { name: "David Park", avatar: undefined },
      content: "I can help with the NLP implementation. I've worked on similar projects before. Let's connect!",
      timestamp: "30 minutes ago",
      upvotes: 7,
    },
  ];

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      console.log("Submitting comment:", newComment);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" data-testid="text-page-title">CollabSpace</h1>
        <p className="text-muted-foreground">
          Collaborate through discussions, upvoting, and team connections
        </p>
      </div>

      <Card className="p-4 bg-primary/5 border-primary/20 mb-8">
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium text-sm mb-1">AI Collaboration Features</p>
            <p className="text-sm text-muted-foreground">
              AI suggests co-authors based on skills, summarizes discussions, identifies trending
              topics, and enables cross-department idea linking.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <IdeaCard {...mockIdea} />

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Discussion ({mockComments.length})
            </h3>

            <div className="space-y-4 mb-6">
              {mockComments.map((comment) => (
                <div key={comment.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={comment.author.avatar} />
                      <AvatarFallback>
                        {comment.author.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{comment.author.name}</span>
                        <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                      </div>
                      <p className="text-sm mb-3">{comment.content}</p>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" data-testid={`button-upvote-comment-${comment.id}`}>
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          {comment.upvotes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  placeholder="Add your thoughts..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="mb-2"
                  data-testid="input-new-comment"
                />
                <Button onClick={handleSubmitComment} data-testid="button-submit-comment">
                  <Send className="h-4 w-4 mr-2" />
                  Comment
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              AI Suggested Collaborators
            </h3>
            <div className="space-y-3">
              {[
                { name: "Alex Morgan", role: "ML Engineer", match: 95 },
                { name: "Jessica Liu", role: "Product Manager", match: 88 },
                { name: "Ryan Cooper", role: "UX Designer", match: 82 },
              ].map((person, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover-elevate">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{person.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{person.name}</p>
                    <p className="text-xs text-muted-foreground">{person.role}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {person.match}%
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold mb-4">Related Ideas</h3>
            <div className="space-y-3">
              {[
                "Voice-Activated Support System",
                "Customer Sentiment Analysis Tool",
                "Automated Email Response System",
              ].map((idea, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg border hover-elevate cursor-pointer"
                  data-testid={`related-idea-${index}`}
                >
                  <p className="text-sm font-medium">{idea}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
