"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const askservPersonController_1 = __importDefault(require("../../controllers/servicesPersona/askservPersonController"));
class AskservPersonRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', askservPersonController_1.default.getService);
    }
}
const askservPersonRoutes = new AskservPersonRoutes();
exports.default = askservPersonRoutes.router;
