import express  from 'express';
import {productController} from '../controller/ProductController';

class ProductRouter{
	public router = express.Router();	

	constructor(){
		this.config();
	}
	config(){
		this.router.get('/',productController.list);
		this.router.get('/:id',productController.get);
		this.router.post('/create',productController.create);
		this.router.delete('/delete/:id',productController.delete);
		this.router.put('/update/:id',productController.update);
	}
}

const productRouter = new ProductRouter();
export default productRouter.router; 