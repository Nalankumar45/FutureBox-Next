import { AIIndicator } from "../ai-indicator";

export default function AIIndicatorExample() {
  return (
    <div className="flex gap-4 p-6">
      <AIIndicator />
      <AIIndicator label="AI Suggested" variant="outline" />
    </div>
  );
}
