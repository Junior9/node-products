"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("../controller/ProductController");
class ProductRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.config();
    }
    config() {
        this.router.get('/', ProductController_1.productController.list);
        this.router.get('/:id', ProductController_1.productController.get);
        this.router.post('/create', ProductController_1.productController.create);
        this.router.delete('/delete/:id', ProductController_1.productController.delete);
        this.router.put('/update/:id', ProductController_1.productController.update);
    }
}
const productRouter = new ProductRouter();
exports.default = productRouter.router;
