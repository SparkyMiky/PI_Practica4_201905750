"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicationsController_1 = require("../controllers/publicationsController");
class PublicationRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', publicationsController_1.publicationsController.list);
        this.router.get('/:id', publicationsController_1.publicationsController.getOne);
        this.router.post('/', publicationsController_1.publicationsController.create);
        this.router.put('/:id', publicationsController_1.publicationsController.update);
        this.router.delete('/:id', publicationsController_1.publicationsController.delete);
    }
}
const publicationRoutes = new PublicationRoutes();
exports.default = publicationRoutes.router;
