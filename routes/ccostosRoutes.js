"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ccostosController_1 = __importDefault(require("../controllers/ccostosController"));
class CcostosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ccostosController_1.default.list);
        this.router.get('/:id', ccostosController_1.default.getOne);
        this.router.post('/', ccostosController_1.default.create);
        this.router.put('/:id', ccostosController_1.default.update);
        this.router.delete('/:id', ccostosController_1.default.delete);
    }
}
const ccostosRoutes = new CcostosRoutes();
exports.default = ccostosRoutes.router;
