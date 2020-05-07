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
    arrayAST.prototype.insertarArray = function (nodos) {
        for (var i = 0; i < nodos.length; i++) {
            this.nodos.push(nodos[i]);
        }
    };
    return arrayAST;
}());
exports.arrayAST = arrayAST;
