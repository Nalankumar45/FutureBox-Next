import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkflowStageProps {
  stages: {
    label: string;
    status: "completed" | "current" | "pending";
  }[];
}

export function WorkflowStage({ stages }: WorkflowStageProps) {
  return (
    <div className="flex items-center" data-testid="workflow-stages">
      {stages.map((stage, index) => (
        <div key={index} className="flex items-center flex-1">
          <div className="flex flex-col items-center flex-1">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors",
                stage.status === "completed" &&
                  "border-primary bg-primary text-primary-foreground",
                stage.status === "current" &&
                  "border-primary bg-background text-primary",
                stage.status === "pending" &&
                  "border-muted bg-background text-muted-foreground"
              )}
              data-testid={`stage-${index}-${stage.status}`}
            >
              {stage.status === "completed" ? (
                <Check className="h-5 w-5" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>
            <p
              className={cn(
                "mt-2 text-xs font-medium text-center",
                stage.status === "pending" && "text-muted-foreground"
              )}
            >
              {stage.label}
            </p>
          </div>
          {index < stages.length - 1 && (
            <div
              className={cn(
                "h-0.5 flex-1 -mt-8",
                stage.status === "completed" ? "bg-primary" : "bg-muted"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
