# Luna Del Elys - AI Chat Assistant

## Overview

Luna Del Elys is a mood-based AI chat assistant application built with React frontend and Express backend. The application allows users to interact with an AI assistant named Luna who can respond with different personalities based on configurable moods (neutral, happy, sad, angry). The system uses OpenAI's GPT-4o model to generate contextual responses and stores chat sessions in a PostgreSQL database.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Comprehensive set of Radix UI components via shadcn/ui

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful endpoints for chat operations
- **Development**: Hot reload with tsx for development
- **Production**: Compiled with esbuild for optimal performance

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database (@neondatabase/serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Fallback**: In-memory storage implementation for development/testing

## Key Components

### Database Schema
- **users**: User authentication and profiles
- **chat_sessions**: Individual chat session tracking
- **chat_messages**: Message storage with mood context

### Core Features
1. **Mood-Based Responses**: Four distinct mood states (neutral, happy, sad, angry) that affect AI personality
2. **Session Management**: Persistent chat sessions with unique identifiers
3. **Real-time Chat**: Message exchange with typing indicators and response streaming
4. **API Key Management**: Secure OpenAI API key handling via client-side storage

### Frontend Components
- **ChatHeader**: Mood selector and branding
- **ChatMessages**: Message display with mood-based styling
- **ChatInput**: Message composition with character limits and quick actions
- **ApiKeyModal**: Secure API key configuration

## Data Flow

1. **Session Initialization**: Client requests new chat session from `/api/chat/session`
2. **Message Exchange**: User messages sent to `/api/chat/:sessionId/message`
3. **AI Processing**: Backend calls OpenAI API with mood-specific prompts
4. **Response Storage**: Both user and AI messages stored in database
5. **Real-time Updates**: Frontend polls for message updates

## External Dependencies

### AI Integration
- **OpenAI API**: GPT-4o model for generating responses
- **API Configuration**: Environment variable or client-side API key management

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first styling
- **Class Variance Authority**: Component variant management

### Development Tools
- **Drizzle Kit**: Database schema management
- **ESBuild**: Production bundling
- **TSX**: TypeScript execution for development

## Deployment Strategy

### Platform
- **Target**: Replit with autoscale deployment
- **Build Process**: Vite frontend build + esbuild backend compilation
- **Static Assets**: Served from dist/public directory
- **Environment**: Node.js 20 with PostgreSQL 16

### Configuration
- **Port**: 5000 (internal) → 80 (external)
- **Database**: Environment-based PostgreSQL connection
- **API Keys**: Runtime configuration via environment variables or client storage

### Development Workflow
- **Dev Server**: Concurrent frontend (Vite) and backend (tsx) development
- **Hot Reload**: Full-stack development with automatic restart
- **Type Safety**: Shared schema types between frontend and backend

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
```
