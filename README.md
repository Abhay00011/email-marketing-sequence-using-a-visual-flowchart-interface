# 📧 Email Marketing Sequence Builder (MERN + React Flow + Agenda.js)

A visual email sequence builder that lets users create and schedule automated email campaigns using a drag-and-drop flow editor. Built with the MERN stack, React Flow, Agenda.js, and Nodemailer.
---

## Features
###  Frontend
- Visual drag-and-drop flow using **React Flow**
- Node types: Cold Email, Delay, Lead Source
- Editable nodes with modals (To, Subject, Body, Delay time, etc.)
- Save and schedule full sequence flows
- Collapsible sidebar with node creation
- Authentication: Login & Register (JWT-based)

###   Backend
- REST API using **Express & TypeScript**
- MongoDB for persistence
- Job scheduling with **Agenda.js**
- Email sending with **Nodemailer**
- Authentication (JWT)
- Request validation
- Unit tests with **Supertest**

---

##  Tech Stack

**Frontend**
- React + Vite
- React Flow
- TypeScript
- Tailwind CSS

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Agenda.js (job scheduling)
- Nodemailer (email)
- JWT Auth
- Supertest (testing)

---

## ✅ Setup Instructions

### Prerequisites
- Node.js 
- MongoDB running locally
- NPM 
- NGINX (for optional proxy)

---

**Backend Setup**
cd backend
npm install

**Frontend Setup**
cd frontend
npm install
npm run dev
---
