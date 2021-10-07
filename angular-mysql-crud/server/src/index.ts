import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import publicationRoutes from './routes/publicationRoutes';
import userRoutes from './routes/userRoutes';
import comentarioRoutes from './routes/comentarioRoutes';
import cursoRoutes from './routes/cursoRoutes';
import interRoutes from './routes/intermediaRoutes';



class Server{
 
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev')); //muestra las peticiones
        this.app.use(cors());
        this.app.use(express.json()); //conecta con angular
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use(indexRoutes); // utiliza index
        this.app.use('/api/login',userRoutes);
        this.app.use('/api/publications',publicationRoutes); //utiliza publications y se abre al utilzar la url
        this.app.use('/api/users', comentarioRoutes);
        this.app.use('/api/cursos', cursoRoutes);
        this.app.use('/api/inter', interRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port',this.app.get('port'))
        });
    }

}

const server = new Server();
server.start();