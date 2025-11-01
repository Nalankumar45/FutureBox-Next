import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, MessageSquare, BarChart, Sparkles } from "lucide-react";
import { useState } from "react";

interface IdeaCardProps {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  upvotes: number;
  comments: number;
  status: string;
  scores?: {
    feasibility?: number;
    impact?: number;
    cost?: number;
  };
}

export function IdeaCard({
  id,
  title,
  description,
  author,
  category,
  tags,
  upvotes,
  comments,
  status,
  scores,
}: IdeaCardProps) {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [currentUpvotes, setCurrentUpvotes] = useState(upvotes);

  const handleUpvote = () => {
    if (isUpvoted) {
      setCurrentUpvotes(currentUpvotes - 1);
    } else {
      setCurrentUpvotes(currentUpvotes + 1);
    }
    setIsUpvoted(!isUpvoted);
    console.log(`Upvote toggled for idea ${id}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft":
        return "bg-muted text-muted-foreground";
      case "submitted":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "approved":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "implementing":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="p-6 hover-elevate" data-testid={`card-idea-${id}`}>
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold" data-testid={`text-idea-title-${id}`}>
                  {title}
                </h3>
                {scores && (
                  <div className="flex items-center gap-1 text-primary" title="AI Enhanced">
                    <Sparkles className="h-4 w-4" />
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {description}
              </p>
            </div>
            <Badge className={getStatusColor(status)} data-testid={`badge-status-${id}`}>
              {status}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" data-testid={`badge-category-${id}`}>{category}</Badge>
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {scores && (
            <div className="flex gap-4 mb-4 text-sm">
              <div className="flex items-center gap-1">
                <BarChart className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Feasibility:</span>
                <span className="font-medium">{scores.feasibility}/10</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground">Impact:</span>
                <span className="font-medium">{scores.impact}/10</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground">Cost:</span>
                <span className="font-medium">{scores.cost}/10</span>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={author.avatar} />
                <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">{author.name}</span>
            </div>

            <div className="flex gap-2">
              <Button
                variant={isUpvoted ? "default" : "outline"}
                size="sm"
                onClick={handleUpvote}
                data-testid={`button-upvote-${id}`}
              >
                <ThumbsUp className={`h-4 w-4 mr-2 ${isUpvoted ? "fill-current" : ""}`} />
                {currentUpvotes}
              </Button>
              <Button variant="outline" size="sm" data-testid={`button-comments-${id}`}>
                <MessageSquare className="h-4 w-4 mr-2" />
                {comments}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
