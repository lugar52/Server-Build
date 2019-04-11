"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transacController_1 = __importDefault(require("../../controllers/transac/transacController"));
class TransacRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', transacController_1.default.list);
        this.router.get('/:id', transacController_1.default.getAtributo);
    }
}
const transacRoutes = new TransacRoutes();
exports.default = transacRoutes.router;
