import { StatCard } from "../stat-card";
import { Lightbulb } from "lucide-react";

export default function StatCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      <StatCard
        title="Total Ideas"
        value={247}
        icon={Lightbulb}
        trend={{ value: 12, isPositive: true }}
        testId="stat-total-ideas"
      />
    </div>
  );
}
