"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateRequest = (req, res, next) => {
    const { to, subject, text } = req.body;
    if (!to || !subject || !text) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
    }
    next();
};
exports.default = validateRequest;
