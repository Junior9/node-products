import express  from 'express';
import {indexController} from '../controller/IndexController';	

class IndexRouter{
	public router = express.Router();	

	constructor(){
		this.config();
	}
	config(){
		this.router.get('/',indexController.index);
	}
}

const indexRouter = new IndexRouter();
export default indexRouter.router;