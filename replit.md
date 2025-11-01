# FutureBox - AI-Powered Innovation Platform

## Overview

FutureBox is an AI-powered innovation management platform built with Next.js 15+. The application enables organizations to crowdsource, evaluate, and implement ideas through eight integrated modules: IdeaHub for idea submission, CollabSpace for team collaboration, Impact Engine for analytics and scoring, ActionZone for workflow tracking, Recognition Arena for gamification, Profile & Insights for personal analytics, Alert Center for smart notifications, and Admin & Policy for governance. The platform emphasizes AI-enhanced features throughout, from duplicate detection to predictive ROI forecasting.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### UI Quality Improvements (November 2025)
Achieved 9/10 premium UI quality through comprehensive design refinements:

**Development Environment**
- Disabled Next.js development indicators via `next.config.mjs` configuration
- Set `devIndicators.buildActivity`, `devIndicators.appIsrStatus`, and `experimental.devIndicators` to false
- Added CSS fallback selectors in `app/globals.css` to suppress any residual dev overlays
- **Note**: Future Next.js upgrades should re-validate these settings

**Visual Design Refinements**
- Removed excessive animations, keeping only essential hero section transitions
- Simplified borders from `border-2` to `border` throughout for cleaner aesthetic
- Eliminated heavy gradients, retaining minimal accent on hero text
- Enhanced typography hierarchy with consistent sizing and weights
- Improved spacing and padding across all components for better visual rhythm
- Applied subtle hover effects and smooth transitions on interactive elements only

**Component Updates**
- **Home page**: Clean hero section, refined feature and module cards
- **Dashboard layout**: Simplified header, removed gradient backgrounds
- **IdeaHub**: Professional header design, subtle AI features banner
- **Idea cards**: Cleaner typography, simplified badges and button styling
- **Sidebar**: Enhanced logo treatment, consistent border styling

## System Architecture

### Frontend Architecture

**Framework & Routing**
- Next.js 15+ with App Router for file-based routing and server components
- TypeScript for type safety across the codebase
- React Server Components used by default, with "use client" directives for interactive components
- Grouped routes under `(dashboard)` layout for authenticated areas

**UI Component System**
- shadcn/ui (Radix UI primitives) for accessible, composable components
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for component variant management
- Custom CSS variables for theming (light/dark mode support)
- Hover/active elevation effects via custom CSS classes (`hover-elevate`, `active-elevate-2`)

**State Management**
- TanStack Query (React Query) for server state management and caching
- React hooks (useState, useContext) for local component state
- Custom theme provider using React Context for dark/light mode persistence
- Query invalidation and optimistic updates pattern ready

**Styling Approach**
- HSL-based color system for easy theme customization
- Separate color definitions for card, popover, sidebar, and primary components
- Border colors defined as CSS variables for consistency
- Responsive design with mobile-first breakpoints (768px mobile threshold)

### Data Layer

**ORM & Database**
- Drizzle ORM configured for type-safe database operations
- Schema validation using drizzle-zod for runtime type checking
- Neon Database serverless driver (@neondatabase/serverless) for PostgreSQL connections
- Connection pooling handled by Neon's serverless architecture

**API Design**
- Custom `apiRequest` utility for consistent fetch calls with error handling
- Credential-based authentication using cookies ("include" credentials)
- RESTful pattern with queryKey-based fetching for TanStack Query
- 401 handling with configurable behavior (returnNull vs throw)

### Module Architecture

**Eight Core Modules**
1. **IdeaHub** (`/ideahub`) - Idea submission and management with AI suggestions
2. **CollabSpace** (`/collabspace`) - Discussion threads and team connections
3. **Impact Engine** (`/impact`) - Analytics dashboards with ROI forecasts
4. **ActionZone** (`/actionzone`) - Workflow stage tracking with visual progress
5. **Recognition Arena** (`/recognition`) - Gamification with points and badges
6. **Profile & Insights** (`/profile`) - Personal analytics and AI recommendations
7. **Alert Center** (`/alerts`) - Smart notifications with sentiment analysis
8. **Admin & Policy** (`/admin`) - System configuration and role-based access

**Component Patterns**
- Reusable presentational components (IdeaCard, StatCard, LeaderboardRow, etc.)
- Custom hooks for common functionality (useIsMobile, useToast, useTheme)
- Compound component pattern for complex UI (Sidebar, Dialog, Command)
- Data visualization using Recharts for charts and analytics

### Layout & Navigation

**Dashboard Layout**
- Collapsible sidebar with mobile sheet variant
- Responsive navigation with icon/text toggle
- Theme toggle in header for accessibility
- Toast notification system for user feedback
- Sidebar state persisted in cookies

**Typography & Fonts**
- Inter for sans-serif UI text
- JetBrains Mono for monospace/code
- Font optimization via next/font for performance

## External Dependencies

### UI & Styling
- **@radix-ui/*** - Accessible component primitives (20+ packages for dialogs, dropdowns, tooltips, etc.)
- **tailwindcss** - Utility-first CSS framework
- **class-variance-authority** - Component variant styling
- **clsx** & **tailwind-merge** - Conditional class merging
- **lucide-react** - Icon library
- **embla-carousel-react** - Carousel/slider components
- **recharts** - Data visualization and charting
- **vaul** - Drawer component primitive
- **cmdk** - Command menu component

### Forms & Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Form validation resolvers
- **zod** (via drizzle-zod) - Schema validation

### State & Data
- **@tanstack/react-query** - Server state management with caching
- **drizzle-orm** - Type-safe SQL ORM
- **@neondatabase/serverless** - Serverless PostgreSQL driver
- **date-fns** - Date manipulation and formatting

### Development
- **TypeScript** - Type system
- **next** - React framework with App Router
- **react** & **react-dom** - UI library
- **autoprefixer** - CSS vendor prefixing
- **postcss** - CSS transformation

### Session & Authentication
- **connect-pg-simple** - PostgreSQL session store (suggests session-based auth planned)

### Additional Utilities
- **input-otp** - OTP input component
- **react-day-picker** - Date picker component
- **react-resizable-panels** - Resizable panel layouts
- **sonner** (likely) - Toast notifications