"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emailService_1 = __importDefault(require("../../services/emailService"));
const defineEmailJob = (agenda) => {
    agenda.define('sendEmail', async (job) => {
        const { to, subject, text } = job.attrs.data;
        await (0, emailService_1.default)(to, subject, text);
    });
};
exports.default = defineEmailJob;
