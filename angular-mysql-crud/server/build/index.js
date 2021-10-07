"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const publicationRoutes_1 = __importDefault(require("./routes/publicationRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const comentarioRoutes_1 = __importDefault(require("./routes/comentarioRoutes"));
const cursoRoutes_1 = __importDefault(require("./routes/cursoRoutes"));
const intermediaRoutes_1 = __importDefault(require("./routes/intermediaRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev')); //muestra las peticiones
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //conecta con angular
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default); // utiliza index
        this.app.use('/api/login', userRoutes_1.default);
        this.app.use('/api/publications', publicationRoutes_1.default); //utiliza publications y se abre al utilzar la url
        this.app.use('/api/users', comentarioRoutes_1.default);
        this.app.use('/api/cursos', cursoRoutes_1.default);
        this.app.use('/api/inter', intermediaRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
