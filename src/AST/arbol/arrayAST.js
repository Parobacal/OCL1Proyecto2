"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayAST = /** @class */ (function () {
    function arrayAST() {
        this.nodos = new Array();
    }
    arrayAST.prototype.insertar = function (nodo_) {
        this.nodos.push(nodo_);
    };
    arrayAST.prototype.getNodos = function () {
        return this.nodos;
    };
    return arrayAST;
}());
exports.arrayAST = arrayAST;
