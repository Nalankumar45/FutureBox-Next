import { Bell, CheckCircle, MessageSquare, TrendingUp, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotificationItemProps {
  id: string;
  type: "approval" | "comment" | "update" | "recognition";
  title: string;
  message: string;
  time: string;
  read: boolean;
  onMarkAsRead?: (id: string) => void;
}

export function NotificationItem({
  id,
  type,
  title,
  message,
  time,
  read,
  onMarkAsRead,
}: NotificationItemProps) {
  const getIcon = () => {
    switch (type) {
      case "approval":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "comment":
        return <MessageSquare className="h-5 w-5 text-blue-600" />;
      case "update":
        return <TrendingUp className="h-5 w-5 text-purple-600" />;
      case "recognition":
        return <Award className="h-5 w-5 text-yellow-600" />;
      default:
        return <Bell className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <div
      className={cn(
        "p-4 border-b hover-elevate cursor-pointer",
        !read && "bg-primary/5"
      )}
      onClick={() => onMarkAsRead?.(id)}
      data-testid={`notification-${id}`}
    >
      <div className="flex gap-3">
        <div className="mt-1">{getIcon()}</div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm mb-1" data-testid={`notification-title-${id}`}>
            {title}
          </p>
          <p className="text-sm text-muted-foreground line-clamp-2">{message}</p>
          <p className="text-xs text-muted-foreground mt-2">{time}</p>
        </div>
        {!read && (
          <div className="h-2 w-2 rounded-full bg-primary mt-2" data-testid={`unread-indicator-${id}`} />
        )}
      </div>
    </div>
  );
}
