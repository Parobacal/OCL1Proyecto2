"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clase_1 = require("../instrucciones/clase");
var importar_1 = require("../instrucciones/importar");
var arbolAST = /** @class */ (function () {
    function arbolAST(nodos_) {
        this.nodos = nodos_;
        this.reporteAST = "<ul><li data-jstree='{\"opened\" : true}'>RAIZ";
    }
    arbolAST.prototype.recorrer = function (node) {
        for (var i = 0; i < node.length; i++) {
            if (node[i] instanceof clase_1.clase) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CLASE";
                var obj = this.nodos[i];
                console.log(obj.tipo);
                var obj2 = obj.valor;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                console.log(obj2.tipo);
                console.log(obj2.valor);
                console.log(obj.instrucciones.length);
                this.recorrer(obj.instrucciones);
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof importar_1.importar) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IMPORTAR";
                var obj = this.nodos[i];
                console.log(obj.tipo);
                var obj2 = obj.valor;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                console.log(obj2.tipo);
                console.log(obj2.valor);
            }
            this.reporteAST += "</ul>";
        }
        console.log("\n----------------------");
    };
    arbolAST.prototype.getNodos = function () {
        return this.nodos;
    };
    arbolAST.prototype.getReporteAst = function () {
        return this.reporteAST;
    };
    return arbolAST;
}());
exports.arbolAST = arbolAST;
