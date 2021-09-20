import { Router } from 'express';

class PublicationRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res) => res.send('Publications'));
    }

}

const publicationRoutes = new PublicationRoutes();
export default publicationRoutes.router;