"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const emailRoutes_1 = __importDefault(require("./routes/emailRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const flowRoutes_1 = __importDefault(require("./routes/flowRoutes"));
app.use('/flow', flowRoutes_1.default);
app.use('/api/email', emailRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
exports.default = app;
// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import emailRoutes from './routes/emailRoutes';
// import connectDB from './config/db';
// const app = express();
// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// // Routes
// app.use('/api', emailRoutes);
// // Connect DB
// connectDB();
// export default app;
