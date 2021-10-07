import { Router } from 'express';

import {comentariosController} from '../controllers/comentariosController';

class ComentarioRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', comentariosController.list);
        this.router.get('/:carne/:publicacion',comentariosController.getOne);
        this.router.post('/:carne/:publicacion', comentariosController.create);
        this.router.put('/carne/:id', comentariosController.update);
        this.router.delete('/:carne/:id',comentariosController.delete);
    }

}

const comentarioRoutes = new ComentarioRoutes();
export default comentarioRoutes.router;