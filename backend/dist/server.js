"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./config/db"));
const agendaConfig_1 = require("./agenda/agendaConfig");
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    await (0, db_1.default)();
    await (0, agendaConfig_1.initAgenda)();
    app_1.default.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};
startServer();
