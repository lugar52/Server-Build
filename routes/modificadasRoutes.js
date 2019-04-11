"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const modificadasController_1 = __importDefault(require("../controllers/modificadasController"));
class AreasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', modificadasController_1.default.list);
        this.router.put('/:id', modificadasController_1.default.update);
    }
}
const areasRoutes = new AreasRoutes();
exports.default = areasRoutes.router;
