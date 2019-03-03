import express ,{ Application } from 'express';
import morgan from 'morgan';	
import cors from 'cors';
import indexRouter from './router/indexRouter'; 
import productRouter from './router/productRouter'; 

class Server{
	public app : Application;

	constructor(){
		this.app = express();
		this.config();
		this.router();	
	}

	//Configuration 
	config(): void{
		this.app.set('port',process.env.PORT || 3000 );
		this.app.use(morgan('dev')); 
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({extended :false}))
	}

	//Set all router
	router(): void{
		this.app.use('/',indexRouter);
		this.app.use('/api/product/',productRouter);
	}

	//Start server
	start():void{
		this.app.listen(this.app.get('port'));
		console.log('Server up in port: ' + this.app.get('port'))
	}
}

const server =  new Server();
server.start();


