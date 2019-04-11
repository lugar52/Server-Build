"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const telefonosController_1 = __importDefault(require("../../controllers/servicesPersona/telefonosController"));
class TelefonosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', telefonosController_1.default.getOne);
        this.router.post('/', telefonosController_1.default.create);
        this.router.put('/:id', telefonosController_1.default.update);
        this.router.delete('/:id', telefonosController_1.default.delete);
    }
}
const telefonosroutes = new TelefonosRoutes();
exports.default = telefonosroutes.router;
