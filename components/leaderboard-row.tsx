import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

interface LeaderboardRowProps {
  rank: number;
  user: {
    name: string;
    avatar?: string;
    department: string;
  };
  points: number;
  badges: number;
  ideas: number;
}

export function LeaderboardRow({ rank, user, points, badges, ideas }: LeaderboardRowProps) {
  const getRankIcon = () => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
    if (rank === 3) return <Award className="h-5 w-5 text-amber-600" />;
    return <span className="text-muted-foreground font-medium">#{rank}</span>;
  };

  return (
    <div
      className="flex items-center gap-4 p-4 border-b last:border-b-0 hover-elevate"
      data-testid={`leaderboard-row-${rank}`}
    >
      <div className="flex items-center justify-center w-10">
        {getRankIcon()}
      </div>
      <Avatar className="h-10 w-10">
        <AvatarImage src={user.avatar} />
        <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className="font-medium" data-testid={`leaderboard-name-${rank}`}>{user.name}</p>
        <p className="text-sm text-muted-foreground">{user.department}</p>
      </div>
      <div className="flex gap-6 text-sm">
        <div className="text-center">
          <p className="font-semibold" data-testid={`leaderboard-points-${rank}`}>{points}</p>
          <p className="text-xs text-muted-foreground">Points</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">{badges}</p>
          <p className="text-xs text-muted-foreground">Badges</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">{ideas}</p>
          <p className="text-xs text-muted-foreground">Ideas</p>
        </div>
      </div>
    </div>
  );
}
