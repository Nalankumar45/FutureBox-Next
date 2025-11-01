import { NotificationItem } from "../notification-item";
import { useState } from "react";

export default function NotificationItemExample() {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "approval" as const,
      title: "Idea Approved",
      message: "Your idea 'AI Customer Service' has been approved for implementation!",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: "2",
      type: "comment" as const,
      title: "New Comment",
      message: "John Smith commented on your idea",
      time: "1 hour ago",
      read: true,
    },
  ]);

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
    console.log(`Notification ${id} marked as read`);
  };

  return (
    <div className="max-w-md">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          {...notification}
          onMarkAsRead={handleMarkAsRead}
        />
      ))}
    </div>
  );
}
