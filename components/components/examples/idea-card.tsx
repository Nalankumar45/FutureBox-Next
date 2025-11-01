import { IdeaCard } from "../idea-card";

export default function IdeaCardExample() {
  return (
    <div className="p-6 space-y-4">
      <IdeaCard
        id="1"
        title="AI-Powered Customer Service Chatbot"
        description="Implement an intelligent chatbot that can handle common customer queries, reducing response time by 60% and improving customer satisfaction."
        author={{ name: "Sarah Chen", avatar: undefined }}
        category="Technology"
        tags={["AI", "Customer Service", "Automation"]}
        upvotes={42}
        comments={12}
        status="review"
        scores={{ feasibility: 8, impact: 9, cost: 7 }}
      />
    </div>
  );
}
