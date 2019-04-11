"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sindicatosController_1 = __importDefault(require("../../controllers/servicesPersona/sindicatosController"));
class SindicatosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', sindicatosController_1.default.getOne);
        this.router.post('/', sindicatosController_1.default.create);
        this.router.put('/:id', sindicatosController_1.default.update);
        this.router.delete('/:id', sindicatosController_1.default.delete);
    }
}
const sindicatosroutes = new SindicatosRoutes();
exports.default = sindicatosroutes.router;
