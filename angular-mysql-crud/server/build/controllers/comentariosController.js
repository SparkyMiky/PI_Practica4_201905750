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
exports.comentariosController = void 0;
const database_1 = __importDefault(require("../database"));
class ComentaiosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM comentarios', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Pidiendo comentarios a bd');
            let id_publicacion = req.params.publicacion;
            yield database_1.default.query('SELECT * FROM comentarios WHERE id_publicacion = ?', [id_publicacion], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('tratando de crear');
            yield database_1.default.query('INSERT INTO comentarios set ?', [req.body]); //Agrega los datos obtenidos en la tabla
            res.json({ message: 'Comment created created' });
        });
    }
    update(req, res) {
        res.json('Updating a publication');
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_carne = req.params.carne;
            let id_publicacion = req.params.publicacion;
            yield database_1.default.query('DELETE FROM  comentarios WHERE id_carne = ? && id_publicacion = ?', [id_carne, id_publicacion], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
}
exports.comentariosController = new ComentaiosController();
exports.default = exports.comentariosController;
