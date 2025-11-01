"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NotificationItem } from "@/components/notification-item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Sparkles, CheckCheck } from "lucide-react";

export default function AlertCenter() {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "approval" as const,
      title: "Idea Approved",
      message: "Your idea 'AI Customer Service Chatbot' has been approved for implementation!",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: "2",
      type: "comment" as const,
      title: "New Comment",
      message: "Michael Rodriguez commented: 'Great idea! We should start with a pilot program.'",
      time: "1 hour ago",
      read: false,
    },
    {
      id: "3",
      type: "recognition" as const,
      title: "New Badge Earned",
      message: "Congratulations! You've earned the 'Impact Champion' badge.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "4",
      type: "update" as const,
      title: "Workflow Update",
      message: "Your idea 'Sustainable Packaging' moved to Planning stage.",
      time: "3 hours ago",
      read: true,
    },
    {
      id: "5",
      type: "approval" as const,
      title: "Review Complete",
      message: "Your idea 'Remote Wellness Program' has completed review phase.",
      time: "5 hours ago",
      read: true,
    },
    {
      id: "6",
      type: "comment" as const,
      title: "Mentioned in Discussion",
      message: "Emily Johnson mentioned you in a discussion about customer experience.",
      time: "1 day ago",
      read: true,
    },
  ]);

  const handleMarkAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    console.log(`Notification ${id} marked as read`);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
    console.log("All notifications marked as read");
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Alert Center</h1>
            {unreadCount > 0 && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                {unreadCount}
              </span>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleMarkAllAsRead}
            disabled={unreadCount === 0}
            data-testid="button-mark-all-read"
          >
            <CheckCheck className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
        </div>
        <p className="text-muted-foreground">
          Stay updated with approvals, comments, and recognitions
        </p>
      </div>

      <Card className="p-4 bg-primary/5 border-primary/20 mb-8">
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium text-sm mb-1">AI-Curated Notifications</p>
            <p className="text-sm text-muted-foreground">
              Smart prioritization based on importance, sentiment analysis on feedback, and
              AI-generated prompts for action items.
            </p>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all" data-testid="tab-all">
            All ({notifications.length})
          </TabsTrigger>
          <TabsTrigger value="unread" data-testid="tab-unread">
            Unread ({unreadCount})
          </TabsTrigger>
          <TabsTrigger value="approval" data-testid="tab-approval">
            Approvals
          </TabsTrigger>
          <TabsTrigger value="comment" data-testid="tab-comment">
            Comments
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  {...notification}
                  onMarkAsRead={handleMarkAsRead}
                />
              ))
            ) : (
              <div className="p-12 text-center">
                <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No notifications</p>
              </div>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="unread">
          <Card>
            {notifications.filter((n) => !n.read).length > 0 ? (
              notifications
                .filter((n) => !n.read)
                .map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    {...notification}
                    onMarkAsRead={handleMarkAsRead}
                  />
                ))
            ) : (
              <div className="p-12 text-center">
                <CheckCheck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">All caught up!</p>
              </div>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="approval">
          <Card>
            {notifications.filter((n) => n.type === "approval").length > 0 ? (
              notifications
                .filter((n) => n.type === "approval")
                .map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    {...notification}
                    onMarkAsRead={handleMarkAsRead}
                  />
                ))
            ) : (
              <div className="p-12 text-center">
                <p className="text-muted-foreground">No approval notifications</p>
              </div>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="comment">
          <Card>
            {notifications.filter((n) => n.type === "comment").length > 0 ? (
              notifications
                .filter((n) => n.type === "comment")
                .map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    {...notification}
                    onMarkAsRead={handleMarkAsRead}
                  />
                ))
            ) : (
              <div className="p-12 text-center">
                <p className="text-muted-foreground">No comment notifications</p>
              </div>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
