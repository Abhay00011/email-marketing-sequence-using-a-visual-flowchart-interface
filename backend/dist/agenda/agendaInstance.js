"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const agenda_1 = require("agenda");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const agenda = new agenda_1.Agenda({
    db: {
        address: process.env.MONGO_URI,
        collection: 'scheduledJobs',
    },
    processEvery: '30 seconds',
    name: 'email-scheduler',
});
exports.default = agenda;
