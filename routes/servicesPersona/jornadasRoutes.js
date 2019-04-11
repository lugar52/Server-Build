"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JornadasController_1 = __importDefault(require("../../controllers/servicesPersona/JornadasController"));
class JornadasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', JornadasController_1.default.getOne);
        this.router.post('/', JornadasController_1.default.create);
        this.router.put('/:id', JornadasController_1.default.update);
        this.router.delete('/:id', JornadasController_1.default.delete);
    }
}
const jornadasroutes = new JornadasRoutes();
exports.default = jornadasroutes.router;
