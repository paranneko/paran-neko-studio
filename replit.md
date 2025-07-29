# 3D Print Portfolio Application

## Overview

This is a modern full-stack web application showcasing a 3D printing portfolio. The application features a sleek, responsive design built with React and TypeScript on the frontend, with an Express.js backend. It's designed to display 3D printing projects in an elegant gallery format with detailed modal views.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite with hot module replacement and development optimizations

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reloading with tsx for TypeScript execution

### Data Storage
- **Primary Database**: PostgreSQL via Neon Database (serverless)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Migrations**: Drizzle Kit for database schema management
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Current Schema**: Basic user management with username/password authentication

### Design System
- **Component Library**: Shadcn/ui with "new-york" style variant
- **Theme**: Neutral color palette with CSS custom properties
- **Typography**: Inter font family from Google Fonts
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Frontend Components
- **Portfolio Gallery**: Interactive image gallery with modal details
- **Image Modal**: Full-screen project details with specifications
- **Rainbow Text**: Custom gradient text component for branding
- **Navigation**: Fixed header with smooth scrolling navigation
- **UI Components**: Complete set of reusable components (buttons, cards, dialogs, etc.)

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Centralized API route management
- **Vite Integration**: Development server with HMR support
- **Error Handling**: Centralized error middleware

### Shared Resources
- **Schema Definitions**: Type-safe database schema with Zod validation
- **Type Safety**: End-to-end TypeScript with strict configuration
- **Path Aliases**: Organized imports with @ and @shared aliases

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express.js handles REST API endpoints with `/api` prefix
3. **Storage Layer**: Abstracted storage interface allows switching between implementations
4. **Database**: Drizzle ORM manages PostgreSQL connections and queries
5. **Response Handling**: Structured error handling with consistent JSON responses

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **connect-pg-simple**: PostgreSQL session store

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations apply schema changes

### Environment Configuration
- **Development**: Hot reloading with Vite dev server proxy
- **Production**: Static file serving with Express.js
- **Database**: Environment-based connection via `DATABASE_URL`

### Scripts
- `npm run dev`: Development mode with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Apply database schema changes

The application is designed for easy deployment to platforms like Replit, Vercel, or similar services that support Node.js applications with PostgreSQL databases.