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
class CategoriasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var misql = 'Call ListaAreas(2)';
            const categ = yield database_1.default.query(misql);
            res.json(categ[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const categ = yield database_1.default.query('SELECT * FROM categoria_veh WHERE id_catveh = ?', [id]);
            if (categ.length > 0) {
                return res.json(categ[0]);
            }
            res.status(404).json({ text: "The categoria not found" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO categoria_veh SET ?', [req.body]);
            res.json({ message: 'Categoria Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE categoria_veh SET ? WHERE id_catveh = ?', [req.body, id]);
            res.json({ message: 'The categoria' + ' ' + req.params.id + ' was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM categoria_veh WHERE id_catveh = ?', [id]);
            res.json({ text: 'deleting a cátegoria' + ' ' + req.params.id });
            res.json({ message: 'The cátegoria was deleted' });
        });
    }
}
const categoriasController = new CategoriasController();
exports.default = categoriasController;
