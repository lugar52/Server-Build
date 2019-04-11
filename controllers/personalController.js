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
class PersonalController {
    traepersonal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var misql = 'call BusqPersonas(' + id + ')';
            const lista = yield database_1.default.query(misql);
            if (lista.length > 0) {
                return res.json(lista[0]);
            }
            res.status(404).json({ text: "Record not found" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO personal SET ?', [req.body]);
            res.json({ message: 'Record Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(req.params);
            yield database_1.default.query('UPDATE personal set  ? WHERE rut = ? ', [req.body, id]);
            res.json({ message: 'Record was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM personal WHERE rut = ?', [id]);
            res.json({ text: 'deleting a Record' + ' ' + req.params.id });
            res.json({ message: 'Record was deleted' });
        });
    }
}
const personalController = new PersonalController();
exports.default = personalController;
