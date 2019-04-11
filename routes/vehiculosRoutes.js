"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehiculosController_1 = __importDefault(require("../controllers/vehiculosController"));
class VehiculosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', vehiculosController_1.default.list);
        this.router.get('/:id', vehiculosController_1.default.getOne);
        this.router.post('/', vehiculosController_1.default.create);
        this.router.put('/:id', vehiculosController_1.default.update);
        this.router.delete('/:id', vehiculosController_1.default.delete);
    }
}
const vehiculosRoutes = new VehiculosRoutes();
exports.default = vehiculosRoutes.router;
