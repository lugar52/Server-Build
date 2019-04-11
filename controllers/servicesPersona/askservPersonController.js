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
class AskServPersonController {
    getService(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (id == 'Cargos') {
                var MiSql = 'select id_cargos, descripcion from cargos where estado = 0';
                const MiString = yield database_1.default.query(MiSql);
                res.json(MiString);
            }
            if (id == 'EContrato') {
                var MiSql = 'select id_econtrato, descripcion from estcontrato';
                const MiString = yield database_1.default.query(MiSql);
                res.json(MiString);
            }
            if (id == 'ANegocio') {
                var MiSql = 'select id_anegocio, descripcion from anegocio';
                const MiString = yield database_1.default.query(MiSql);
                res.json(MiString);
            }
            if (id == 'Sindicato') {
                var MiSql = 'select id_sindicato, descripcion from sindicato';
                const MiString = yield database_1.default.query(MiSql);
                res.json(MiString);
            }
            if (id == 'ETurno') {
                var MiSql = 'select id_turno, descripcion from estturno';
                const MiString = yield database_1.default.query(MiSql);
                res.json(MiString);
            }
            if (id == 'Turno') {
                var MiSql = 'select id_turno, descripcion from turno';
                const MiString = yield database_1.default.query(MiSql);
                res.json(MiString);
            }
            if (id == 'Jornada') {
                var MiSql = 'select id_jornada, descripcion from jornada';
                const MiString = yield database_1.default.query(MiSql);
                res.json(MiString);
            }
            if (id == 'Region') {
                let MiSql = 'select id, concat(ordinal_symbol , " " , name ) name from regions';
                const MiString = yield database_1.default.query(MiSql);
                res.json(MiString);
            }
            if (id == 'Ciudad') {
                let MiSql = 'select id,  name from communes where region_id = 2';
                const MiString = yield database_1.default.query(MiSql);
                res.json(MiString);
            }
            if (id == 'Traslado') {
                let MiSql = 'select id_traslados,  descripcion from traslados ';
                const MiString = yield database_1.default.query(MiSql);
                res.json(MiString);
            }
            if (id == 'TUsuario') {
                let MiSql = 'select id_usuario,  descripcion from usuario ';
                const MiString = yield database_1.default.query(MiSql);
                res.json(MiString);
            }
        });
    }
}
const askServPersonController = new AskServPersonController();
exports.default = askServPersonController;
