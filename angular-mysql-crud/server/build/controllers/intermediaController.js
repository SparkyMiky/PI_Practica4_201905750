"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intermediaController = void 0;
const database_1 = __importDefault(require("../database"));
class IntermediaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM intermedia', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_carne = req.params.carne;
            yield database_1.default.query('SELECT * FROM intermedia WHERE id_carne = ?', [id_carne], function (err, result, fields) {
                if (err)
                    throw err;
                console.log(result);
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            delete req.body.id;
            yield database_1.default.query('INSERT INTO intermedia set ?', [req.body]); //Agrega los datos obtenidos en la tabla
            res.json({ message: 'cursoAsignado' });
        });
    }
    update(req, res) {
        res.json('Updating a publication');
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_carne } = req.params;
            const { id_curso } = req.params;
            yield database_1.default.query('DELETE FROM  intermedia WHERE id_carne = ? && id_curso = ?', [id_carne, id_curso], function (err, result, fields) {
                if (err)
                    throw err;
                console.log(result);
                res.json({ text: 'Publication found' });
            });
        });
    }
}
exports.intermediaController = new IntermediaController();
exports.default = exports.intermediaController;
