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
class ControlController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var misql = 'select * from transac';
            const areas = yield database_1.default.query(misql);
            res.json(areas[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const areas = yield database_1.default.query('SELECT * FROM areas WHERE id_area = ?', [id]);
            if (areas.length > 0) {
                return res.json(areas[0]);
            }
            res.status(404).json({ text: "The area not found" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            for (let numero of req.body) {
                yield database_1.default.query('INSERT INTO transac SET ?', [numero]);
            }
            res.json({ message: 'ok' });
        });
    }
    miFuncion(a) {
        console.log(a);
    }
}
const controlController = new ControlController();
exports.default = controlController;
