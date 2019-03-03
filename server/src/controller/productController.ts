import {Request, Response} from 'express';
import database from '../database';
 

class ProductController{

	public async list(req:Request ,resp:Response){
		const products = await database.query("SELECT * FROM product");
		console.log(products);
		resp.json(products);
	}

	public async create(req:Request ,resp:Response):Promise<void>{
		const data = req.body;
		const product = await database.query("INSERT INTO product (name,description,img) VALUES ('" +data[0].name+ "','"+data[0].description
			+ "','"+data[0].img+"')");

		resp.json(product);
		resp.end();
	}

	public delete(req:Request ,resp:Response){
		database.query("DELETE FROM product WHERE id=" +req.params.id);
		resp.send("delete Product id :" + req.params.id);
		resp.end();
	}

	public async update(req:Request ,resp:Response){

		const product = await database.query("SELECT * FROM product WHERE id = " +req.params.id);

		product.name = req.body.name;
		product.description = req.body.description;
		product.img = req.body.img;

		const productUpdate = await database.query("UPDATE product SET name = '" +product.name +"', description = '" + product.description
						+ "', img = '"+ product.img +"' WHERE id = " + req.params.id);

		resp.json(productUpdate);
		resp.end();
	}

	public async get(req:Request ,resp:Response){

		const product = await database.query("SELECT * FROM product WHERE id = " +req.params.id);

		resp.json(product);
		resp.end();
	}
}

export const productController = new ProductController();