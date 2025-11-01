import { WorkflowStage } from "../workflow-stage";
import { Card } from "@/components/ui/card";

export default function WorkflowStageExample() {
  const stages = [
    { label: "Submitted", status: "completed" as const },
    { label: "Review", status: "completed" as const },
    { label: "Approved", status: "current" as const },
    { label: "Planning", status: "pending" as const },
    { label: "Implementation", status: "pending" as const },
  ];

  return (
    <Card className="p-8">
      <WorkflowStage stages={stages} />
    </Card>
  );
}
