import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LeaderboardRow } from "@/components/leaderboard-row";
import { Trophy, Award, Star, Zap, Target, Rocket, Sparkles } from "lucide-react";

export default function RecognitionArena() {
  const topContributors = [
    {
      rank: 1,
      user: { name: "Sarah Chen", department: "Engineering", avatar: undefined },
      points: 2450,
      badges: 12,
      ideas: 24,
    },
    {
      rank: 2,
      user: { name: "Michael Rodriguez", department: "Product", avatar: undefined },
      points: 2180,
      badges: 10,
      ideas: 19,
    },
    {
      rank: 3,
      user: { name: "Emily Johnson", department: "Marketing", avatar: undefined },
      points: 1950,
      badges: 9,
      ideas: 15,
    },
    {
      rank: 4,
      user: { name: "David Park", department: "Operations", avatar: undefined },
      points: 1820,
      badges: 8,
      ideas: 14,
    },
    {
      rank: 5,
      user: { name: "Lisa Wang", department: "Design", avatar: undefined },
      points: 1650,
      badges: 7,
      ideas: 12,
    },
  ];

  const badges = [
    { name: "Innovator", description: "Submit 10 ideas", icon: Rocket, color: "text-blue-600" },
    { name: "Collaborator", description: "100 comments", icon: Star, color: "text-purple-600" },
    { name: "Impact Champion", description: "3 high-impact ideas", icon: Trophy, color: "text-yellow-600" },
    { name: "Quick Win", description: "Idea implemented in 30 days", icon: Zap, color: "text-green-600" },
    { name: "Visionary", description: "Top voted idea", icon: Target, color: "text-pink-600" },
    { name: "Trendsetter", description: "Start a trending topic", icon: Award, color: "text-orange-600" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" data-testid="text-page-title">Recognition Arena</h1>
        <p className="text-muted-foreground">
          Gamification, rewards, and contributor leaderboards
        </p>
      </div>

      <Card className="p-4 bg-primary/5 border-primary/20 mb-8">
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium text-sm mb-1">AI-Powered Recognition</p>
            <p className="text-sm text-muted-foreground">
              AI generates personalized recognition messages, predicts emerging innovators, and
              identifies top contributors. FutureCoins reward system for impactful ideas.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Trophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Your Rank</p>
              <p className="text-2xl font-bold">#12</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Top 8% of contributors</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Star className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Your Points</p>
              <p className="text-2xl font-bold">1,245</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">+180 this month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Badges Earned</p>
              <p className="text-2xl font-bold">6</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">2 more to next level</p>
        </Card>
      </div>

      <Card className="mb-8">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Leaderboard</h2>
        </div>
        {topContributors.map((contributor) => (
          <LeaderboardRow key={contributor.rank} {...contributor} />
        ))}
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-6">Available Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <Card key={index} className="p-6 hover-elevate">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-muted mb-4 ${badge.color}`}>
                <badge.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-1">{badge.name}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
