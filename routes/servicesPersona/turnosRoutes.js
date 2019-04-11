"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnosController_1 = __importDefault(require("../../controllers/servicesPersona/turnosController"));
class TurnosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', turnosController_1.default.getOne);
        this.router.post('/', turnosController_1.default.create);
        this.router.put('/:id', turnosController_1.default.update);
        this.router.delete('/:id', turnosController_1.default.delete);
    }
}
const turnosRoutes = new TurnosRoutes();
exports.default = turnosRoutes.router;
