"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comentariosController_1 = require("../controllers/comentariosController");
class ComentarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', comentariosController_1.comentariosController.list);
        this.router.get('/:carne/:publicacion', comentariosController_1.comentariosController.getOne);
        this.router.post('/:carne/:publicacion', comentariosController_1.comentariosController.create);
        this.router.put('/carne/:id', comentariosController_1.comentariosController.update);
        this.router.delete('/:carne/:id', comentariosController_1.comentariosController.delete);
    }
}
const comentarioRoutes = new ComentarioRoutes();
exports.default = comentarioRoutes.router;
