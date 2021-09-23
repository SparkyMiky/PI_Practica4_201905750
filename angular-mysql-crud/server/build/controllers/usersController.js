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
exports.usersController = void 0;
const databaUsers_1 = __importDefault(require("../databaUsers"));
class UsersController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield databaUsers_1.default.query('SELECT * FROM users', function (err, result, fields) {
                if (err)
                    throw err;
                console.log(result);
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carne } = req.params;
            yield databaUsers_1.default.query('SELECT * FROM users WHERE carne = ?', [carne], function (err, result, fields) {
                if (err)
                    throw err;
                console.log(result);
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield databaUsers_1.default.query('INSERT INTO users set ?', [req.body]); //Agrega los datos obtenidos en la tabla
            res.json({ message: 'User created' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carne } = req.params;
            const { password } = req.body;
            const { correo } = req.body;
            yield databaUsers_1.default.query("UPDATE users SET password = ? WHERE carne = ? && correo = ? ", [password, carne, correo], function (err, result, fields) {
                if (err)
                    throw err;
                console.log(result);
                res.json({ text: 'User updated' });
            });
        });
    }
    delete(req, res) {
        res.json('Eliminando user');
    }
}
exports.usersController = new UsersController();
exports.default = exports.usersController;
