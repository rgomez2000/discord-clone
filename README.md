# Discord Clone

## Overview

This project is a full-featured real-time communication platform inspired by Discord, built using **TypeScript**, **React**, **Next.js**, **Socket.IO**, **Tailwind**, **Prisma**, and **PostgreSQL**. It enables users to create and manage servers, participate in real-time messaging and audio/video calls, and perform various moderation tasks.

The application supports dynamic server creation, private messaging, file attachments, role-based access control, and responsive design with full support for light/dark themes and mobile devices. 

---

## Features

- **Real-Time Communication**
  - Real-time text messaging using **Socket.IO**
  - Support for real-time editing and deletion of messages
  - Private 1-on-1 messaging with DMs and calls

- **Messaging & Media**
  - Attach and send media files and documents within channels
  - Infinite scroll message loading in batches of 10
  - Channel types: text, audio, and video

- **Server & Channel Management**
  - Create and customize servers and channels
  - Generate unique invite links for server access
  - Role-based access for guests, members, and moderators

- **Moderation Tools**
  - Role assignment and permission elevation
  - Kick members, modify roles, and manage server memberships

- **UI/UX Enhancements**
  - Fully responsive mobile layout
  - Toggle between light and dark mode
  - Intuitive and modern user interface

---

## Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Yarn](https://yarnpkg.com/) or `npm`

### Installation

**1. Clone the repository**
- git clone https://github.com/your-username/discord-clone.git
- cd discord-clone

**2. Install dependencies**
- npm install
or
- yarn install

**3. Run the development server**
- npm run dev
or
- yarn dev

**The app should now be running at:**
  http://localhost:3000
