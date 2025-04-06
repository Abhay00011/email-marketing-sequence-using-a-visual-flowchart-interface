// import request from 'supertest';
// import app from '../app';

// describe('POST /api/email/schedule', () => {
//   it('should return 401 without token', async () => {
//     const res = await request(app).post('/api/email/schedule').send({
//       to: 'test@example.com',
//       subject: 'Hello',
//       text: 'World',
//     });
//     expect(res.status).toBe(401);
//   });
// });


import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI as string);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('Email Controller', () => {
  let token: string;

  beforeAll(async () => {
    // Register a user
    await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@example.com', password: 'password123' });

    // Login to get token
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password123' });

    token = res.body.token;
  });

  it('should schedule an email', async () => {
    const res = await request(app)
      .post('/api/email/schedule')
      .set('Authorization', `Bearer ${token}`)
      .send({
        to: 'recipient@example.com',
        subject: 'Test Email',
        text: 'Hello from test'
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Email scheduled successfully');
  });

  it('should reject scheduling without auth token', async () => {
    const res = await request(app)
      .post('/api/email/schedule')
      .send({
        to: 'unauthorized@example.com',
        subject: 'No Token',
        text: 'This should fail'
      });

    expect(res.statusCode).toBe(401);
  });
});
