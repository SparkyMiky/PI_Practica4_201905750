"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosController_1 = require("../controllers/cursosController");
class CursoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', cursosController_1.cursosController.list);
        this.router.get('/:id', cursosController_1.cursosController.getOne);
    }
}
const cursoRoutes = new CursoRoutes();
exports.default = cursoRoutes.router;
