"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleEmail = exports.getSavedFlows = void 0;
const agendaInstance_1 = __importDefault(require("../agenda/agendaInstance"));
const Job_1 = __importDefault(require("../models/Job"));
const getSavedFlows = async (req, res) => {
    try {
        const flows = await Job_1.default.find({}); // optionally filter by user
        res.json(flows);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch flows' });
    }
};
exports.getSavedFlows = getSavedFlows;
const scheduleEmail = async (req, res) => {
    try {
        const { to, subject, text } = req.body;
        const sendTime = new Date(Date.now() + 60 * 60 * 1000); // 1 hour later
        await agendaInstance_1.default.schedule(sendTime, 'sendEmail', { to, subject, text });
        res.status(200).json({ message: 'Email scheduled successfully' });
    }
    catch (err) {
        res.status(500).json({ message: 'Error scheduling email', error: err });
    }
};
exports.scheduleEmail = scheduleEmail;
