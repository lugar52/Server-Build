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
class PropietController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var misql = 'Call ListaAreas(4)';
            const categ = yield database_1.default.query(misql);
            res.json(categ[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const propiet = yield database_1.default.query('SELECT * FROM propietarios WHERE id_propietario = ?', [id]);
            if (propiet.length > 0) {
                return res.json(propiet[0]);
            }
            res.status(404).json({ text: "The reg propietario not found" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO propietarios SET ?', [req.body]);
            res.json({ message: 'Propietario Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE propietarios SET ? WHERE id_propietario = ?', [req.body, id]);
            res.json({ message: 'The propietario' + ' ' + req.params.id + ' was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM propietarios WHERE id_propietario = ?', [id]);
            res.json({ text: 'deleting a propietario' + ' ' + req.params.id });
            res.json({ message: 'The area was propietario' });
        });
    }
}
const propietController = new PropietController();
exports.default = propietController;
