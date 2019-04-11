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
class ConsultasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const areas = yield database_1.default.query('SELECT * FROM areas');
            res.json(areas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            if (id == 1) {
                const areas = yield database_1.default.query('select id_area, descripcion  from areas');
                res.json(areas);
            }
            if (id == 2) {
                const Categ = yield database_1.default.query('select id_catveh, descripcion  from categoria_veh');
                res.json(Categ);
            }
            if (id == 3) {
                const propietarios = yield database_1.default.query('select id_propietario, descripcion from propietarios where estado = 0');
                res.json(propietarios);
            }
            if (id == 4) {
                const ccostos = yield database_1.default.query('select id_ccostos, descripcion from ccostos');
                res.json(ccostos);
            }
            if (id == 5) {
                const estados = yield database_1.default.query('select valor, descripcion  from estados where aplica = 1');
                res.json(estados);
            }
            if (id == 6) {
                const vehic = yield database_1.default.query('select * from vehiculos');
                res.json(vehic);
            }
            if (id == 7) {
                var misql = 'Call ListaAreas(5)';
                const estados = yield database_1.default.query(misql);
                res.json(estados[0]);
            }
        });
    }
}
const consultasController = new ConsultasController();
exports.default = consultasController;
