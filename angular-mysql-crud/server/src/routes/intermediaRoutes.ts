import { Router } from 'express';

import {intermediaController} from '../controllers/intermediaController';

class IntermediaRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:carne/cursos', intermediaController.list);
        this.router.get('/:carne',intermediaController.getOne);
        this.router.post('/:carne/:id_curso', intermediaController.create);
        this.router.put('/:carne/:id_curso', intermediaController.update);
        this.router.delete('/:carne/:id_curso',intermediaController.delete);
    }

}

const interRoutes = new IntermediaRoutes();
export default interRoutes.router;