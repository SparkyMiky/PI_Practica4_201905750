import { Router } from 'express';

import {cursosController} from '../controllers/cursosController';

class CursoRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', cursosController.list);
        this.router.get('/:id',cursosController.getOne);
    }

}

const cursoRoutes = new CursoRoutes();
export default cursoRoutes.router;