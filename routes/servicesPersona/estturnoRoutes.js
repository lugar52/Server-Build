"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estturnoController_1 = __importDefault(require("../../controllers/servicesPersona/estturnoController"));
class EstTurnoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', estturnoController_1.default.getOne);
        this.router.post('/', estturnoController_1.default.create);
        this.router.put('/:id', estturnoController_1.default.update);
        this.router.delete('/:id', estturnoController_1.default.delete);
    }
}
const estturnoRoutes = new EstTurnoRoutes();
exports.default = estturnoRoutes.router;
