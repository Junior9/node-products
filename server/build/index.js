"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRouter_1 = __importDefault(require("./router/indexRouter"));
const productRouter_1 = __importDefault(require("./router/productRouter"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.router();
    }
    //Configuration 
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //Set all router
    router() {
        this.app.use('/', indexRouter_1.default);
        this.app.use('/api/product/', productRouter_1.default);
    }
    //Start server
    start() {
        this.app.listen(this.app.get('port'));
        console.log('Server up in port: ' + this.app.get('port'));
    }
}
const server = new Server();
server.start();
