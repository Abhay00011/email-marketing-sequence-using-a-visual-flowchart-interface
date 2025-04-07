"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const authService_1 = require("../services/authService");
const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        await (0, authService_1.registerUser)(email, password);
        res.status(201).json({ message: 'User registered' });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await (0, authService_1.loginUser)(email, password);
        res.json({ token });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(401).json({ error: err.message });
        }
        else {
            res.status(401).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.login = login;
