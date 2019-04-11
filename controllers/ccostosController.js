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
class CcostosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var misql = 'Call ListaAreas(3)';
            const categ = yield database_1.default.query(misql);
            res.json(categ[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ccostos = yield database_1.default.query('SELECT * FROM ccostos WHERE id_ccostos = ?', [id]);
            if (ccostos.length > 0) {
                return res.json(ccostos[0]);
            }
            res.status(404).json({ text: "The centro costos not found" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO ccostos SET ?', [req.body]);
            res.json({ message: 'Centro de Costos Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE ccostos SET ? WHERE id_ccostos = ?', [req.body, id]);
            res.json({ message: 'The Centro de Costos' + ' ' + req.params.id + ' was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ccostos WHERE id_ccostos = ?', [id]);
            res.json({ text: 'deleting a Ccostos' + ' ' + req.params.id });
            res.json({ message: 'The area was Centro de costos' });
        });
    }
}
const ccostosController = new CcostosController();
exports.default = ccostosController;
