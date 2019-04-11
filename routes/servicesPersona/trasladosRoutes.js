"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trasladosController_1 = __importDefault(require("../../controllers/servicesPersona/trasladosController"));
class TrasladosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', trasladosController_1.default.getOne);
        this.router.post('/', trasladosController_1.default.create);
        this.router.put('/:id', trasladosController_1.default.update);
        this.router.delete('/:id', trasladosController_1.default.delete);
    }
}
const trasladosRoutes = new TrasladosRoutes();
exports.default = trasladosRoutes.router;
