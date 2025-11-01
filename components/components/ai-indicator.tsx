import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AIIndicatorProps {
  label?: string;
  variant?: "default" | "outline";
}

export function AIIndicator({ label = "AI Enhanced", variant = "default" }: AIIndicatorProps) {
  return (
    <Badge variant={variant} className="gap-1" data-testid="ai-indicator">
      <Sparkles className="h-3 w-3" />
      {label}
    </Badge>
  );
}
