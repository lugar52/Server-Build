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
class VehiculosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehiculos = yield database_1.default.query('SELECT * from vehiculos');
            res.json(vehiculos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const vehiculos = yield database_1.default.query('SELECT * FROM vehiculos WHERE id_vehiculo = ?', [id]);
            if (vehiculos.length > 0) {
                return res.json(vehiculos[0]);
            }
            res.status(404).json({ text: "The vehiculo not found" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO vehiculos SET ?', [req.body]);
            res.json({ message: 'vehiculo Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE vehiculos SET ? WHERE id_vehiculo = ?', [req.body, id]);
            res.json({ message: 'The propietario' + ' ' + req.params.id + ' was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM vehiculos WHERE id_vehiculo = ?', [id]);
            res.json({ text: 'deleting a vehiculo' + ' ' + req.params.id });
            res.json({ message: 'The vehiculo was deleted' });
        });
    }
}
const vehiculosController = new VehiculosController();
exports.default = vehiculosController;
