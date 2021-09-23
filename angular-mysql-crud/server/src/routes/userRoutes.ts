import { Router } from 'express';

import {usersController} from '../controllers/usersController';

class UserRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', usersController.list);
        this.router.get('/:carne',usersController.getOne);
        this.router.post('/', usersController.create);
        this.router.put('/:carne', usersController.update);
        this.router.delete('/:carne',usersController.delete);
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;