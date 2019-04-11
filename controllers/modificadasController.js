"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ModificadasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var misql = 'SELECT propietarios, vehiculos, conductores, bomberos FROM modificadas';
            const modificadas = yield database_1.default.query(misql);
            res.json(modificadas[0]);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE modificadas set  ? WHERE id_modificadas = ? ', [req.body, id]);
            res.json({ message: 'The modificadas was updated' });
        });
    }
}
const modificadasController = new ModificadasController();
exports.default = modificadasController;
