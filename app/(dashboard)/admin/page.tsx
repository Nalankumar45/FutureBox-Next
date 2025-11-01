"use client";

import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Settings,
  Users,
  Shield,
  FileText,
  Sparkles,
  Plus,
} from "lucide-react";
import { useToast } from "@/lib/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";

export default function AdminPolicy() {
  const { toast } = useToast();
  const [categoryDialog, setCategoryDialog] = useState(false);
  const [badgeDialog, setBadgeDialog] = useState(false);
  const [userDialog, setUserDialog] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const [newCategory, setNewCategory] = useState({ name: "" });
  const [newBadge, setNewBadge] = useState({ name: "", points: 0, color: "blue" });
  const [editUser, setEditUser] = useState({ name: "", email: "", role: "", status: "" });

  const { data: categories = [] } = useQuery<any[]>({
    queryKey: ["/api/categories"],
  });

  const { data: badges = [] } = useQuery<any[]>({
    queryKey: ["/api/badges"],
  });

  const { data: users = [] } = useQuery<any[]>({
    queryKey: ["/api/users"],
  });

  const categoryMutation = useMutation({
    mutationFn: async (data: any) => {
      if (editingItem) {
        return apiRequest("PATCH", `/api/categories/${editingItem.id}`, data);
      }
      return apiRequest("POST", "/api/categories", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/categories"] });
      setCategoryDialog(false);
      setEditingItem(null);
      setNewCategory({ name: "" });
      toast({ title: "Success", description: "Category saved successfully!" });
    },
    onError: () => {
      toast({ variant: "destructive", title: "Error", description: "Failed to save category." });
    },
  });

  const badgeMutation = useMutation({
    mutationFn: async (data: any) => {
      if (editingItem) {
        return apiRequest("PATCH", `/api/badges/${editingItem.id}`, data);
      }
      return apiRequest("POST", "/api/badges", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/badges"] });
      setBadgeDialog(false);
      setEditingItem(null);
      setNewBadge({ name: "", points: 0, color: "blue" });
      toast({ title: "Success", description: "Badge saved successfully!" });
    },
    onError: () => {
      toast({ variant: "destructive", title: "Error", description: "Failed to save badge." });
    },
  });

  const userMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest("PATCH", `/api/users/${editingItem.id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/users"] });
      setUserDialog(false);
      setEditingItem(null);
      toast({ title: "Success", description: "User updated successfully!" });
    },
    onError: () => {
      toast({ variant: "destructive", title: "Error", description: "Failed to update user." });
    },
  });

  const handleAddCategory = () => {
    setEditingItem(null);
    setNewCategory({ name: "" });
    setCategoryDialog(true);
  };

  const handleEditCategory = (category: any) => {
    setEditingItem(category);
    setNewCategory({ name: category.name });
    setCategoryDialog(true);
  };

  const handleAddBadge = () => {
    setEditingItem(null);
    setNewBadge({ name: "", points: 0, color: "blue" });
    setBadgeDialog(true);
  };

  const handleEditBadge = (badge: any) => {
    setEditingItem(badge);
    setNewBadge({ name: badge.name, points: badge.points, color: badge.color });
    setBadgeDialog(true);
  };

  const handleEditUser = (user: any) => {
    setEditingItem(user);
    setEditUser({ name: user.name, email: user.email, role: user.role, status: user.status });
    setUserDialog(true);
  };

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
              <p className="text-2xl font-bold">{users.length}</p>
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
              <p className="text-2xl font-bold">{badges.length}</p>
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
              <Button size="sm" onClick={handleAddCategory} data-testid="button-add-category">
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {categories.map((category: any) => (
                <div
                  key={category.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover-elevate"
                >
                  <span className="font-medium">{category.name}</span>
                  <Button variant="ghost" size="sm" onClick={() => handleEditCategory(category)} data-testid={`button-edit-category-${category.id}`}>
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
              <Button size="sm" onClick={handleAddBadge} data-testid="button-add-badge">
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {badges.map((badge: any) => (
                <div
                  key={badge.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover-elevate"
                >
                  <div>
                    <span className="font-medium">{badge.name}</span>
                    <p className="text-sm text-muted-foreground">
                      {badge.points} points
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => handleEditBadge(badge)} data-testid={`button-edit-badge-${badge.id}`}>
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
              {users.map((user: any) => (
                <tr key={user.id} className="border-b last:border-b-0 hover-elevate">
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
                    <Button variant="ghost" size="sm" onClick={() => handleEditUser(user)} data-testid={`button-edit-user-${user.id}`}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Dialog open={categoryDialog} onOpenChange={setCategoryDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingItem ? "Edit Category" : "Add Category"}</DialogTitle>
            <DialogDescription>
              {editingItem ? "Update the category name." : "Create a new category for ideas."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); categoryMutation.mutate(newCategory); }} className="space-y-4">
            <div>
              <Label htmlFor="category-name">Category Name *</Label>
              <Input
                id="category-name"
                data-testid="input-category-name"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ name: e.target.value })}
                required
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" onClick={() => setCategoryDialog(false)}>Cancel</Button>
              <Button type="submit" disabled={categoryMutation.isPending} data-testid="button-save-category">
                {categoryMutation.isPending ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={badgeDialog} onOpenChange={setBadgeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingItem ? "Edit Badge" : "Add Badge"}</DialogTitle>
            <DialogDescription>
              {editingItem ? "Update badge details." : "Create a new badge for recognition."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); badgeMutation.mutate(newBadge); }} className="space-y-4">
            <div>
              <Label htmlFor="badge-name">Badge Name *</Label>
              <Input
                id="badge-name"
                data-testid="input-badge-name"
                value={newBadge.name}
                onChange={(e) => setNewBadge({ ...newBadge, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="badge-points">Points *</Label>
              <Input
                id="badge-points"
                type="number"
                data-testid="input-badge-points"
                value={newBadge.points}
                onChange={(e) => setNewBadge({ ...newBadge, points: parseInt(e.target.value) || 0 })}
                required
              />
            </div>
            <div>
              <Label htmlFor="badge-color">Color *</Label>
              <Select value={newBadge.color} onValueChange={(value) => setNewBadge({ ...newBadge, color: value })}>
                <SelectTrigger data-testid="select-badge-color">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="yellow">Yellow</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" onClick={() => setBadgeDialog(false)}>Cancel</Button>
              <Button type="submit" disabled={badgeMutation.isPending} data-testid="button-save-badge">
                {badgeMutation.isPending ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={userDialog} onOpenChange={setUserDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>Update user information and permissions.</DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); userMutation.mutate(editUser); }} className="space-y-4">
            <div>
              <Label htmlFor="user-name">Name *</Label>
              <Input
                id="user-name"
                data-testid="input-user-name"
                value={editUser.name}
                onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="user-email">Email *</Label>
              <Input
                id="user-email"
                type="email"
                data-testid="input-user-email"
                value={editUser.email}
                onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="user-role">Role *</Label>
              <Select value={editUser.role} onValueChange={(value) => setEditUser({ ...editUser, role: value })}>
                <SelectTrigger data-testid="select-user-role">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Manager">Manager</SelectItem>
                  <SelectItem value="Employee">Employee</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="user-status">Status *</Label>
              <Select value={editUser.status} onValueChange={(value) => setEditUser({ ...editUser, status: value })}>
                <SelectTrigger data-testid="select-user-status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" onClick={() => setUserDialog(false)}>Cancel</Button>
              <Button type="submit" disabled={userMutation.isPending} data-testid="button-save-user">
                {userMutation.isPending ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
