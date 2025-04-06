# Email Scheduler Backend (Agenda + Nodemailer)

## Features
- User Authentication (JWT)
- Email Scheduling (1 hour delay)
- Agenda.js Job Queue
- Nodemailer for Email Sending
- MongoDB for Job Persistence
- Input Validation
- Unit Testing

## Setup

```bash
git clone <repo>
cd backend
npm install
cp .env.example .env
# Fill in your Mongo URI, Email credentials, JWT_SECRET
npm run dev
