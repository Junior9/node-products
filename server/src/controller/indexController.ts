import {Request, Response} from 'express';

class IndexController{

	public index(req:Request,resp:Response){
		resp.send("Controoler Index");
		resp.end();
	}
}
	
export const indexController = new IndexController();