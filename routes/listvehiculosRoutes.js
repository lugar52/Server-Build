"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listvehiculosController_1 = __importDefault(require("../controllers/listvehiculosController"));
class ListVehiculosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', listvehiculosController_1.default.listVeh);
    }
}
const listVehiculosRoutes = new ListVehiculosRoutes();
exports.default = listVehiculosRoutes.router;
