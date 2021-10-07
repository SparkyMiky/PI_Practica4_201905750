"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usersController_1.usersController.list);
        this.router.get('/:carne', usersController_1.usersController.getOne);
        this.router.post('/', usersController_1.usersController.create);
        this.router.put('/:carne', usersController_1.usersController.update);
        this.router.put('/:carne/edit', usersController_1.usersController.updateUser);
        this.router.delete('/:carne', usersController_1.usersController.delete);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
