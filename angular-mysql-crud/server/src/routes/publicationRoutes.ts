import { Router } from 'express';

import {publicationsController} from '../controllers/publicationsController';

class PublicationRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', publicationsController.list);
        this.router.get('/:id',publicationsController.getOne);
        this.router.post('/', publicationsController.create);
        this.router.put('/:id', publicationsController.update);
        this.router.delete('/:id',publicationsController.delete);
    }

}

const publicationRoutes = new PublicationRoutes();
export default publicationRoutes.router;