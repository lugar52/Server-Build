"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlController_1 = __importDefault(require("../../controllers/control/controlController"));
class ControlRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', controlController_1.default.list);
        this.router.post('/', controlController_1.default.create);
    }
}
const controlRoutes = new ControlRoutes();
exports.default = controlRoutes.router;
