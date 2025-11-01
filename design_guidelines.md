# FutureBox Design Guidelines

## Design Approach

**Selected Framework:** Design System Approach (Modern Enterprise Dashboard)
**Primary References:** Linear's minimalism + Notion's content hierarchy + Vercel's technical sophistication
**Rationale:** Enterprise productivity platform requiring clarity, scalability, and professional polish for complex data visualization and workflow management.

---

## Core Design Principles

1. **Information Clarity:** Dense data presented through clear hierarchy and visual breathing room
2. **Intelligent Simplicity:** Complex AI features made accessible through intuitive interfaces
3. **Enterprise Polish:** Professional aesthetic balancing functionality with visual appeal
4. **Modular Consistency:** Unified design language across 8 distinct modules

---

## Typography System

### Font Families
- **Primary:** Inter (headings, UI elements, buttons)
- **Secondary:** JetBrains Mono (code snippets, technical data, IDs)

### Type Scale
- **Display (Hero/Landing):** text-5xl to text-6xl, font-bold, tracking-tight
- **Page Titles:** text-3xl to text-4xl, font-semibold
- **Section Headings:** text-2xl, font-semibold
- **Subsection Headers:** text-xl, font-medium
- **Card Titles:** text-lg, font-semibold
- **Body Text:** text-base, font-normal, leading-relaxed
- **Secondary Text:** text-sm, font-normal
- **Captions/Metadata:** text-xs, font-medium, uppercase tracking-wide

### Typography Principles
- Line height: Use leading-relaxed (1.625) for body text, leading-tight for headings
- Letter spacing: tracking-tight for large headings, tracking-wide for small caps/labels
- Text hierarchy through size AND weight variation

---

## Layout System

### Spacing Primitives
**Core Units:** 2, 4, 6, 8, 12, 16, 24
- Micro spacing (gaps, padding): 2, 4
- Component spacing: 6, 8
- Section spacing: 12, 16
- Major divisions: 24

### Dashboard Layout Structure

**Sidebar Navigation:**
- Width: w-64 (desktop), hidden on mobile with overlay
- Padding: p-6
- Logo area: mb-8
- Nav groups: space-y-1, mb-6 per group
- Nav items: px-4 py-2, rounded-lg

**Main Content Area:**
- Max width: max-w-7xl mx-auto
- Padding: px-6 py-8 (mobile), px-8 py-12 (desktop)
- Section spacing: space-y-12

**Top Bar:**
- Height: h-16
- Padding: px-6
- Fixed positioning with backdrop blur

### Grid Systems
- **Dashboard Cards:** grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- **Analytics Panels:** grid grid-cols-1 lg:grid-cols-4 gap-4 (for metrics)
- **Idea Feed:** Single column with max-w-4xl for readability
- **Leaderboards:** grid grid-cols-1 md:grid-cols-2 gap-6

---

## Component Library

### Navigation Components
**Sidebar Menu:**
- Grouped by module with subtle dividers
- Active state: full-width visual treatment
- Icons: 20x20px (Lucide Icons)
- Hover state: subtle transform

**Breadcrumbs:**
- text-sm with separator (/)
- Last item unlinked and emphasized

### Card Components
**Standard Card:**
- Rounded: rounded-xl
- Padding: p-6
- Border treatment with subtle elevation
- Hover: subtle lift with transition-all duration-200

**Idea Card:**
- Two-column layout on desktop (main content + metadata sidebar)
- Header: flex justify-between items-start mb-4
- Tags: flex flex-wrap gap-2 with rounded-full badges
- Action bar: flex gap-4 with icon buttons

**Stat Card:**
- Compact design: p-4
- Large number display: text-3xl font-bold
- Label: text-sm
- Trend indicator with icon

### Form Components
**Input Fields:**
- Height: h-12 for text inputs
- Padding: px-4
- Rounded: rounded-lg
- Focus ring treatment

**Idea Submission Form:**
- Multi-step layout or single page with clear sections
- Rich text editor area: min-h-48
- AI suggestion panel: fixed sidebar (desktop) or expandable (mobile)
- Tag input with autocomplete dropdown
- File upload area: border-dashed with drag-drop zone

**Buttons:**
- Primary: px-6 py-3, rounded-lg, font-medium
- Secondary: outlined variant
- Icon buttons: p-2, rounded-md
- AI-action buttons: distinctive treatment with icon prefix

### Data Display
**Tables:**
- Zebra striping optional
- Header: sticky top-0 with backdrop
- Row height: h-14
- Cell padding: px-4 py-3
- Sortable headers with icon indicators

**Charts (Recharts):**
- Container: aspect-video or aspect-square
- Minimal grid lines
- Clear axis labels
- Tooltips with card-style design
- Legend placement: bottom or right

**Progress Indicators:**
- Workflow stages: horizontal timeline with connecting lines
- Progress bars: h-2, rounded-full
- Step indicators: circular with numbers

### Feedback Components
**Badges:**
- Sizes: text-xs px-2.5 py-0.5 (small), text-sm px-3 py-1 (medium)
- Rounded: rounded-full
- Status badges: leading dot indicator

**Notifications:**
- Card-based: max-w-sm
- Icon area (left), content (center), action/dismiss (right)
- Timestamp: text-xs

**AI Indicators:**
- Distinctive "AI-powered" badges
- Sparkle/star icon prefix for AI features
- Loading states: skeleton pulses for AI processing

### Modal/Overlay Components
**Dialog:**
- Max width: max-w-2xl
- Padding: p-6
- Header with close button
- Footer with action buttons (right-aligned)

**Chatbot/Voice Assistant:**
- Fixed bottom-right position (desktop)
- Expandable chat window: w-96 h-[500px]
- Message bubbles: user (right-aligned), AI (left-aligned)
- Input area: sticky bottom with rounded-full input

---

## Module-Specific Layouts

### Homepage/Landing
**Hero Section:**
- Full viewport height hero with centered content
- Headline: text-5xl md:text-6xl font-bold
- Subheadline: text-xl md:text-2xl max-w-3xl
- CTA group: flex gap-4 with primary + secondary buttons
- Background: gradient overlay on subtle pattern

**Features Grid:**
- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8
- Each module: icon (48x48), title, description, "Learn more" link
- Subtle hover lift effect

**Stats Bar:**
- grid grid-cols-2 md:grid-cols-4 gap-8
- Large numbers with labels

### IdeaHub (Idea Management)
- Filter bar: sticky top with category pills, search, sort dropdown
- Idea cards: space-y-4 in single column feed
- Quick actions: floating action button for "Submit Idea"

### Impact Engine (Analytics Dashboard)
- KPI cards row: grid grid-cols-4 gap-4
- Main chart area: full-width with tabs for different views
- Side panel: top ideas list

### CollabSpace
- Split view: Idea detail (left 60%) + Discussion thread (right 40%)
- Comment thread: space-y-4 with nested replies (ml-8)

### Recognition Arena
- Leaderboard: table format with rank, avatar, name, points, badges
- Badge showcase: grid grid-cols-3 md:grid-cols-5 gap-4
- Point animation on award

---

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (sidebar toggles, 2-column grids)
- Desktop: > 1024px (persistent sidebar, multi-column layouts)

**Mobile Adaptations:**
- Bottom navigation for primary modules
- Collapsible sections with accordions
- Horizontal scroll for data tables
- Full-width cards (no grid)

---

## Animation & Interaction

**Micro-interactions (Minimal):**
- Card hover: translate-y-[-2px]
- Button press: scale-95
- Page transitions: fade-in with duration-200
- AI processing: subtle pulse on indicator

**No Animation:**
- Avoid complex scroll effects
- No parallax
- Minimal page transitions

---

## Images

**Hero Section Image:**
- Large, modern illustration or abstract visualization representing innovation/collaboration
- Placement: Background with gradient overlay OR right-side split (40% width)
- Style: Abstract geometric shapes, network connections, or stylized lightbulb/idea concepts
- Treatment: Subtle opacity, integrated with gradient

**Module Icons/Illustrations:**
- Each of 8 modules gets distinctive icon in navigation (Lucide Icons)
- Feature cards: small illustrative icons (line-style, not photo-realistic)

**User Avatars:**
- Circular, 32x32 (small), 48x48 (medium), 96x96 (large)
- Placeholder: gradient backgrounds with initials

**Empty States:**
- Centered illustrations for "No ideas yet", "No notifications"
- Simple, friendly line-art style

---

## Accessibility & Polish

- Focus indicators: visible ring with offset
- Sufficient contrast ratios (maintain regardless of theme)
- ARIA labels on icon-only buttons
- Keyboard navigation support throughout
- Skip links for main content
- Form validation: inline error messages with icons