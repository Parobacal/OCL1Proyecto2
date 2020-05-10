"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clase_1 = require("../instrucciones/clase");
var identificador_1 = require("../expresiones/identificador");
var importar_1 = require("../instrucciones/importar");
var imprimir_1 = require("../instrucciones/imprimir");
var primitivo_1 = require("../expresiones/primitivo");
var aritmeticoUnario_1 = require("../expresiones/aritmeticoUnario");
var logicaUnario_1 = require("../expresiones/logicaUnario");
var aritmetico_1 = require("../expresiones/aritmetico");
var relacional_1 = require("../expresiones/relacional");
var logica_1 = require("../expresiones/logica");
var declaracion_1 = require("../instrucciones/declaracion");
var llamada_1 = require("../instrucciones/llamada");
var arbolAST = /** @class */ (function () {
    function arbolAST(nodos_) {
        this.nodos = nodos_;
        this.reporteAST = "<ul><li data-jstree='{\"opened\" : true}'>RAIZ";
    }
    arbolAST.prototype.recorrer = function (node) {
        for (var i = 0; i < node.length; i++) {
            console.log(node[i]);
            if (node[i] instanceof clase_1.clase) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CLASE";
                var obj = node[i];
                //console.log(obj.tipo);
                var obj2 = obj.valor;
                this.expresion(obj2);
                //console.log(obj2.tipo);
                //console.log(obj2.valor);
                //console.log(obj.instrucciones.length);
                this.recorrer(obj.instrucciones);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof importar_1.importar) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IMPORTAR";
                var obj = node[i];
                //console.log(obj.tipo);
                var obj2 = obj.valor;
                this.expresion(obj2);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                //console.log(obj2.tipo);
                //console.log(obj2.valor);
            }
            else if (node[i] instanceof imprimir_1.imprimir) {
                //console.log(node[i]);
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IMPRIMIR";
                var obj = node[i];
                if ((obj.valor instanceof aritmetico_1.aritmetico) || (obj.valor instanceof relacional_1.relacional) || (obj.valor instanceof logica_1.logica)) {
                    this.concatenacion(obj.valor);
                }
                else {
                    this.expresion(obj.valor);
                }
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof declaracion_1.declaracion) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>DECLARACION";
                var obj = node[i];
                //console.log(obj);
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>TIPO";
                this.reporteAST += "<ul><li>Tipo:" + obj.tipo + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                //console.log(obj.valor);
                if (obj.valor != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>VALOR";
                    if ((obj.valor instanceof aritmetico_1.aritmetico) || (obj.valor instanceof relacional_1.relacional) || (obj.valor instanceof logica_1.logica)) {
                        // console.log("SI ENTRE")
                        this.concatenacion(obj.valor);
                    }
                    else {
                        this.expresion(obj.valor);
                    }
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                for (var i_1 = 0; i_1 < obj.lista_identificadores.length; i_1++) {
                    var obj3 = obj.lista_identificadores[i_1];
                    this.expresion(obj3);
                }
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof llamada_1.llamada) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>LLAMADA";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>FUNCION O METODO";
                var obj = node[i];
                this.expresion(obj.nombre);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                if (obj.lista_parametros != null) {
                    for (var i_2 = 0; i_2 < obj.lista_parametros.length; i_2++) {
                        var obj3 = obj.lista_parametros[i_2];
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PARAMETRO";
                        this.expresion(obj3);
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                }
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
        }
        console.log("\n----------------------");
    };
    arbolAST.prototype.concatenacion = function (obj) {
        if (obj instanceof aritmetico_1.aritmetico) {
            var obj2 = obj;
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION ARITMETICA";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR IZQUIERDO";
            if ((obj2.OI instanceof aritmetico_1.aritmetico) || (obj2.OI instanceof relacional_1.relacional) || (obj2.OI instanceof logica_1.logica)) {
                var obj3 = obj2.OI;
                this.concatenacion(obj3);
            }
            else {
                var obj3 = obj2.OI;
                this.expresion(obj3);
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            if ((obj2.OD instanceof aritmetico_1.aritmetico) || (obj2.OD instanceof relacional_1.relacional) || (obj2.OD instanceof logica_1.logica)) {
                var obj3 = obj2.OD;
                this.concatenacion(obj3);
            }
            else {
                var obj3 = obj2.OD;
                this.expresion(obj3);
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof relacional_1.relacional) {
            var obj2 = obj;
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION RELACIONAL";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR IZQUIERDO";
            if ((obj2.OI instanceof aritmetico_1.aritmetico) || (obj2.OI instanceof relacional_1.relacional) || (obj2.OI instanceof logica_1.logica)) {
                var obj3 = obj2.OI;
                this.concatenacion(obj3);
            }
            else {
                var obj3 = obj2.OI;
                this.expresion(obj3);
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            if ((obj2.OD instanceof aritmetico_1.aritmetico) || (obj2.OD instanceof relacional_1.relacional) || (obj2.OD instanceof logica_1.logica)) {
                var obj3 = obj2.OD;
                this.concatenacion(obj3);
            }
            else {
                var obj3 = obj2.OD;
                this.expresion(obj3);
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof logica_1.logica) {
            var obj2 = obj;
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION LOGICA";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR IZQUIERDO";
            if ((obj2.OI instanceof aritmetico_1.aritmetico) || (obj2.OI instanceof relacional_1.relacional) || (obj2.OI instanceof logica_1.logica)) {
                var obj3 = obj2.OI;
                this.concatenacion(obj3);
            }
            else {
                var obj3 = obj2.OI;
                this.expresion(obj3);
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            if ((obj2.OD instanceof aritmetico_1.aritmetico) || (obj2.OD instanceof relacional_1.relacional) || (obj2.OD instanceof logica_1.logica)) {
                var obj3 = obj2.OD;
                this.concatenacion(obj3);
            }
            else {
                var obj3 = obj2.OD;
                this.expresion(obj3);
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else {
            this.expresion(obj);
        }
    };
    arbolAST.prototype.expresion = function (obj) {
        if (obj instanceof identificador_1.identificador) {
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
            this.reporteAST += "<ul><li>Tipo:" + obj.tipo + "</li>";
            this.reporteAST += "<li>Valor:" + obj.valor + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof primitivo_1.primitivo) {
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
            this.reporteAST += "<ul><li>Tipo:" + obj.tipo + "</li>";
            this.reporteAST += "<li>Valor:" + obj.valor + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof logicaUnario_1.logicaUnario) {
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION LOGICA";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
            this.expresion(obj.OP);
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof aritmeticoUnario_1.aritmeticoUnario) {
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION ARITMETICA";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
            this.expresion(obj.OP);
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof llamada_1.llamada) {
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>LLAMADA";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>FUNCION O METODO";
            var obj2 = obj;
            this.expresion(obj2.nombre);
            this.reporteAST += "</li></ul>";
            //console.log(obj.nombre);
            if (obj2.lista_parametros != null) {
                for (var i = 0; i < obj2.lista_parametros.length; i++) {
                    var obj3 = obj2.lista_parametros[i];
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PARAMETRO";
                    this.expresion(obj3);
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if ((obj instanceof aritmetico_1.aritmetico) || (obj instanceof relacional_1.relacional) || (obj instanceof logica_1.logica)) {
            this.concatenacion(obj);
        }
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
