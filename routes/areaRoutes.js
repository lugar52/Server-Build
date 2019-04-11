"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const areasController_1 = __importDefault(require("../controllers/areasController"));
class AreasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', areasController_1.default.list);
        this.router.get('/:id', areasController_1.default.getOne);
        this.router.post('/', areasController_1.default.create);
        this.router.put('/:id', areasController_1.default.update);
        this.router.delete('/:id', areasController_1.default.delete);
    }
}
const areasRoutes = new AreasRoutes();
exports.default = areasRoutes.router;
