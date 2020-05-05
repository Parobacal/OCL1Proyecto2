"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arbolAST = /** @class */ (function () {
    function arbolAST(nodos_) {
        this.nodos = nodos_;
    }
    arbolAST.prototype.recorrer = function () {
        console.log("Tamaño del ast: " + this.nodos.length);
        for (var i = 0; i < this.nodos.length; i++) {
            //console.log("entre");
            console.log(this.nodos[i]);
        }
    };
    return arbolAST;
}());
exports.arbolAST = arbolAST;
