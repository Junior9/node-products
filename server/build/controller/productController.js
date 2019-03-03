"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield database_1.default.query("SELECT * FROM product");
            console.log(products);
            resp.json(products);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const product = yield database_1.default.query("INSERT INTO product (name,description,img) VALUES ('" + data[0].name + "','" + data[0].description
                + "','" + data[0].img + "')");
            resp.json(product);
            resp.end();
        });
    }
    delete(req, resp) {
        database_1.default.query("DELETE FROM product WHERE id=" + req.params.id);
        resp.send("delete Product id :" + req.params.id);
        resp.end();
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield database_1.default.query("SELECT * FROM product WHERE id = " + req.params.id);
            product.name = req.body.name;
            product.description = req.body.description;
            product.img = req.body.img;
            const productUpdate = yield database_1.default.query("UPDATE product SET name = '" + product.name + "', description = '" + product.description
                + "', img = '" + product.img + "' WHERE id = " + req.params.id);
            resp.json(productUpdate);
            resp.end();
        });
    }
    get(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield database_1.default.query("SELECT * FROM product WHERE id = " + req.params.id);
            resp.json(product);
            resp.end();
        });
    }
}
exports.productController = new ProductController();
