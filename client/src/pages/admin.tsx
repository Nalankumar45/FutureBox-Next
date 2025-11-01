import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Settings,
  Users,
  Shield,
  FileText,
  Sparkles,
  Plus,
} from "lucide-react";

export default function AdminPolicy() {
  const categories = [
    "Technology",
    "Sustainability",
    "Operations",
    "HR & Culture",
    "Marketing",
    "Finance",
  ];

  const badgesList = [
    { name: "Innovator", points: 100, color: "blue" },
    { name: "Collaborator", points: 150, color: "purple" },
    { name: "Impact Champion", points: 200, color: "yellow" },
    { name: "Quick Win", points: 100, color: "green" },
  ];

  const users = [
    { name: "Sarah Chen", email: "sarah@company.com", role: "Admin", status: "Active" },
    { name: "Michael Rodriguez", email: "michael@company.com", role: "Manager", status: "Active" },
    { name: "Emily Johnson", email: "emily@company.com", role: "Employee", status: "Active" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" data-testid="text-page-title">Admin & Policy Hub</h1>
        <p className="text-muted-foreground">
          Governance, configuration, and role-based access management
        </p>
      </div>

      <Card className="p-4 bg-primary/5 border-primary/20 mb-8">
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium text-sm mb-1">AI-Assisted Moderation</p>
            <p className="text-sm text-muted-foreground">
              AI-powered content moderation, automatic policy suggestions, compliance reporting, and
              full audit trail for all activities.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Users</p>
              <p className="text-2xl font-bold">156</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
              <Settings className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Categories</p>
              <p className="text-2xl font-bold">{categories.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Badges</p>
              <p className="text-2xl font-bold">{badgesList.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <FileText className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Audit Logs</p>
              <p className="text-2xl font-bold">1.2k</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Categories</h2>
              <Button size="sm" data-testid="button-add-category">
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover-elevate"
                >
                  <span className="font-medium">{category}</span>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Badges & Points</h2>
              <Button size="sm" data-testid="button-add-badge">
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {badgesList.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover-elevate"
                >
                  <div>
                    <span className="font-medium">{badge.name}</span>
                    <p className="text-sm text-muted-foreground">
                      {badge.points} points
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">User Management</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr className="text-left">
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Email</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b last:border-b-0 hover-elevate">
                  <td className="p-4 font-medium">{user.name}</td>
                  <td className="p-4 text-muted-foreground">{user.email}</td>
                  <td className="p-4">
                    <Badge variant="outline">{user.role}</Badge>
                  </td>
                  <td className="p-4">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                      {user.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
