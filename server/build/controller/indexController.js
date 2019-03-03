"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, resp) {
        resp.send("Controoler Index");
        resp.end();
    }
}
exports.indexController = new IndexController();
