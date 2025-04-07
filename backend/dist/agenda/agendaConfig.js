"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAgenda = void 0;
const agendaInstance_1 = __importDefault(require("./agendaInstance"));
const emailJob_1 = __importDefault(require("./jobDefinitions/emailJob"));
const initAgenda = async () => {
    (0, emailJob_1.default)(agendaInstance_1.default);
    await agendaInstance_1.default.start();
    console.log('Agenda started...');
};
exports.initAgenda = initAgenda;
