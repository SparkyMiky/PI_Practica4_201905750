"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const intermediaController_1 = require("../controllers/intermediaController");
class IntermediaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:carne/cursos', intermediaController_1.intermediaController.list);
        this.router.get('/:carne', intermediaController_1.intermediaController.getOne);
        this.router.post('/:carne/:id_curso', intermediaController_1.intermediaController.create);
        this.router.put('/:carne/:id_curso', intermediaController_1.intermediaController.update);
        this.router.delete('/:carne/:id_curso', intermediaController_1.intermediaController.delete);
    }
}
const interRoutes = new IntermediaRoutes();
exports.default = interRoutes.router;
