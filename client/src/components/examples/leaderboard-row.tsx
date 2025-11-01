import { LeaderboardRow } from "../leaderboard-row";
import { Card } from "@/components/ui/card";

export default function LeaderboardRowExample() {
  const leaders = [
    {
      rank: 1,
      user: { name: "Sarah Chen", department: "Engineering" },
      points: 2450,
      badges: 12,
      ideas: 24,
    },
    {
      rank: 2,
      user: { name: "Michael Rodriguez", department: "Product" },
      points: 2180,
      badges: 10,
      ideas: 19,
    },
    {
      rank: 3,
      user: { name: "Emily Johnson", department: "Marketing" },
      points: 1950,
      badges: 9,
      ideas: 15,
    },
  ];

  return (
    <Card className="max-w-2xl">
      {leaders.map((leader) => (
        <LeaderboardRow key={leader.rank} {...leader} />
      ))}
    </Card>
  );
}
