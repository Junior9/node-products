"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const IndexController_1 = require("../controller/IndexController");
class IndexRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.config();
    }
    config() {
        this.router.get('/', IndexController_1.indexController.index);
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
