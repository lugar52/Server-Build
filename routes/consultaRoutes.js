"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultasController_1 = __importDefault(require("../controllers/consultasController"));
class ConsultaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', consultasController_1.default.getOne);
    }
}
const consultaroutes = new ConsultaRoutes();
exports.default = consultaroutes.router;
