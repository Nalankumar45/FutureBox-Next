import { db } from "./index";
import { users, categories, badges, ideas } from "./schema";

async function seed() {
  console.log("Seeding database...");

  await db.delete(ideas);
  await db.delete(badges);
  await db.delete(categories);
  await db.delete(users);

  const [user1, user2, user3] = await db.insert(users).values([
    {
      name: "Sarah Chen",
      email: "sarah@company.com",
      role: "Admin",
      status: "Active",
      points: 250,
    },
    {
      name: "Michael Rodriguez",
      email: "michael@company.com",
      role: "Manager",
      status: "Active",
      points: 180,
    },
    {
      name: "Emily Johnson",
      email: "emily@company.com",
      role: "Employee",
      status: "Active",
      points: 150,
    },
  ]).returning();

  await db.insert(categories).values([
    { name: "Technology" },
    { name: "Sustainability" },
    { name: "Operations" },
    { name: "HR & Culture" },
    { name: "Marketing" },
    { name: "Finance" },
  ]);

  await db.insert(badges).values([
    { name: "Innovator", points: 100, color: "blue" },
    { name: "Collaborator", points: 150, color: "purple" },
    { name: "Impact Champion", points: 200, color: "yellow" },
    { name: "Quick Win", points: 100, color: "green" },
  ]);

  await db.insert(ideas).values([
    {
      title: "AI-Powered Customer Service Chatbot",
      description: "Implement an intelligent chatbot that can handle common customer queries, reducing response time by 60% and improving customer satisfaction.",
      category: "Technology",
      tags: ["AI", "Customer Service", "Automation"],
      status: "review",
      upvotes: 42,
      authorId: user1.id,
      feasibilityScore: 8,
      impactScore: 9,
      costScore: 7,
    },
    {
      title: "Sustainable Packaging Initiative",
      description: "Replace all plastic packaging with biodegradable alternatives to reduce environmental impact and appeal to eco-conscious consumers.",
      category: "Sustainability",
      tags: ["Environment", "Packaging", "ESG"],
      status: "approved",
      upvotes: 38,
      authorId: user2.id,
      feasibilityScore: 7,
      impactScore: 8,
      costScore: 6,
    },
    {
      title: "Remote Work Wellness Program",
      description: "Create a comprehensive wellness program for remote employees including virtual fitness classes, mental health support, and ergonomic equipment stipends.",
      category: "HR & Culture",
      tags: ["Wellness", "Remote Work", "Employee Benefits"],
      status: "implementing",
      upvotes: 35,
      authorId: user3.id,
    },
    {
      title: "Data Analytics Dashboard Overhaul",
      description: "Modernize our analytics dashboard with real-time data visualization, predictive insights, and customizable reporting for better decision-making.",
      category: "Technology",
      tags: ["Analytics", "Data", "Dashboard"],
      status: "submitted",
      upvotes: 29,
      authorId: user1.id,
    },
  ]);

  console.log("Database seeded successfully!");
}

seed().catch(console.error).finally(() => process.exit());
