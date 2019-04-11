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
const database_1 = __importDefault(require("../../database"));
class TurnosController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const turno = yield database_1.default.query('select * from turno WHERE id_turno = ?', [id]);
            if (turno.length > 0) {
                return res.json(turno[0]);
            }
            res.status(404).json({ text: "The Registro not found" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO turno SET ?', [req.body]);
            res.json({ message: 'Registro Grabado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE turno set  ? WHERE id_turno = ? ', [req.body, id]);
            res.json({ message: 'Registro was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM turno WHERE id_turno = ?', [id]);
            res.json({ text: 'deleting a record' + ' ' + req.params.id });
            res.json({ message: 'The record was deleted' });
        });
    }
}
const turnosController = new TurnosController();
exports.default = turnosController;
