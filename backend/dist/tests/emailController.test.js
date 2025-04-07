"use strict";
// import request from 'supertest';
// import app from '../app';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
beforeAll(async () => {
    await mongoose_1.default.connect(process.env.MONGO_URI);
});
afterAll(async () => {
    await mongoose_1.default.disconnect();
});
describe('Email Controller', () => {
    let token;
    beforeAll(async () => {
        // Register a user
        await (0, supertest_1.default)(app_1.default)
            .post('/api/auth/register')
            .send({ email: 'test@example.com', password: 'password123' });
        // Login to get token
        const res = await (0, supertest_1.default)(app_1.default)
            .post('/api/auth/login')
            .send({ email: 'test@example.com', password: 'password123' });
        token = res.body.token;
    });
    it('should schedule an email', async () => {
        const res = await (0, supertest_1.default)(app_1.default)
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
        const res = await (0, supertest_1.default)(app_1.default)
            .post('/api/email/schedule')
            .send({
            to: 'unauthorized@example.com',
            subject: 'No Token',
            text: 'This should fail'
        });
        expect(res.statusCode).toBe(401);
    });
});
