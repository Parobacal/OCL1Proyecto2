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
var arbolAST = /** @class */ (function () {
    function arbolAST(nodos_) {
        this.nodos = nodos_;
        this.reporteAST = "<ul><li data-jstree='{\"opened\" : true}'>RAIZ";
    }
    arbolAST.prototype.recorrer = function (node) {
        for (var i = 0; i < node.length; i++) {
            //console.log(node[i]);
            if (node[i] instanceof clase_1.clase) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CLASE";
                var obj = node[i];
                console.log(obj.tipo);
                var obj2 = obj.valor;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                console.log(obj2.tipo);
                console.log(obj2.valor);
                console.log(obj.instrucciones.length);
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
                console.log(obj.tipo);
                var obj2 = obj.valor;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                console.log(obj2.tipo);
                console.log(obj2.valor);
            }
            else if (node[i] instanceof imprimir_1.imprimir) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IMPRIMIR";
                var obj = node[i];
                console.log(obj.tipo);
                if (obj.valor instanceof identificador_1.identificador) {
                    var obj2 = obj.valor;
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                    this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                    this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                    this.reporteAST += "</ul>";
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                else if (obj.valor instanceof primitivo_1.primitivo) {
                    var obj2 = obj.valor;
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                    this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                    this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                    this.reporteAST += "</ul>";
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                else if (obj.valor instanceof logicaUnario_1.logicaUnario) {
                    var obj2 = obj.valor;
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION LOGICA";
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
                    if (obj2.OP instanceof identificador_1.identificador) {
                        var obj3 = obj2.OP;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                        this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                        this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    else if (obj2.OP instanceof primitivo_1.primitivo) {
                        var obj3 = obj2.OP;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                        this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                        this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                    this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
                    this.reporteAST += "</ul>";
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                else if (obj.valor instanceof aritmeticoUnario_1.aritmeticoUnario) {
                    var obj2 = obj.valor;
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION ARITMETICA";
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
                    if (obj2.OP instanceof identificador_1.identificador) {
                        var obj3 = obj2.OP;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                        this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                        this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    else if (obj2.OP instanceof primitivo_1.primitivo) {
                        var obj3 = obj2.OP;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                        this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                        this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                    this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
                    this.reporteAST += "</ul>";
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                else if ((obj.valor instanceof aritmetico_1.aritmetico) || (obj.valor instanceof relacional_1.relacional) || (obj.valor instanceof logica_1.logica)) {
                    this.concatenacion(obj.valor);
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
                console.log(obj);
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>TIPO";
                this.reporteAST += "<ul><li>Tipo:" + obj.tipo + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                if (obj.valor != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>VALOR";
                    if (obj.valor instanceof identificador_1.identificador) {
                        var obj2 = obj.valor;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                        this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                        this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    else if (obj.valor instanceof primitivo_1.primitivo) {
                        var obj2 = obj.valor;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                        this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                        this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    else if (obj instanceof logicaUnario_1.logicaUnario) {
                        var obj2 = obj;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION LOGICA";
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
                        if (obj2.OP instanceof identificador_1.identificador) {
                            var obj3 = obj2.OP;
                            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                            this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                            this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                            this.reporteAST += "</ul>";
                            this.reporteAST += "</li>";
                            this.reporteAST += "</ul>";
                        }
                        else if (obj2.OP instanceof primitivo_1.primitivo) {
                            var obj3 = obj2.OP;
                            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                            this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                            this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                            this.reporteAST += "</ul>";
                            this.reporteAST += "</li>";
                            this.reporteAST += "</ul>";
                        }
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    else if (obj instanceof aritmeticoUnario_1.aritmeticoUnario) {
                        var obj2 = obj;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION ARITMETICA";
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
                        if (obj2.OP instanceof identificador_1.identificador) {
                            var obj3 = obj2.OP;
                            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                            this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                            this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                            this.reporteAST += "</ul>";
                            this.reporteAST += "</li>";
                            this.reporteAST += "</ul>";
                        }
                        else if (obj2.OP instanceof primitivo_1.primitivo) {
                            var obj3 = obj2.OP;
                            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                            this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                            this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                            this.reporteAST += "</ul>";
                            this.reporteAST += "</li>";
                            this.reporteAST += "</ul>";
                        }
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    else if ((obj.valor instanceof aritmetico_1.aritmetico) || (obj.valor instanceof relacional_1.relacional) || (obj.valor instanceof logica_1.logica)) {
                        this.concatenacion(obj.valor);
                    }
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                this.recorrer(obj.lista_identificadores);
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
                console.log("SI ENTRE A LOS ARITMETICOS Y ESO");
                var obj3 = obj2.OI;
                this.concatenacion(obj3);
            }
            else if (obj2.OI instanceof identificador_1.identificador) {
                console.log("SI ENTRE AL IDENTIFICADOR ");
                var obj3 = obj2.OI;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OI instanceof primitivo_1.primitivo) {
                console.log("SI ENTRE AL PRIMITIVO");
                var obj3 = obj2.OI;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            if ((obj2.OD instanceof aritmetico_1.aritmetico) || (obj2.OD instanceof relacional_1.relacional) || (obj2.OD instanceof logica_1.logica)) {
                var obj3 = obj2.OD;
                this.concatenacion(obj3);
            }
            else if (obj2.OD instanceof identificador_1.identificador) {
                var obj3 = obj2.OD;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OD instanceof primitivo_1.primitivo) {
                var obj3 = obj2.OD;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
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
            else if (obj2.OI instanceof identificador_1.identificador) {
                var obj3 = obj2.OI;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OI instanceof primitivo_1.primitivo) {
                var obj3 = obj2.OI;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            if ((obj2.OD instanceof aritmetico_1.aritmetico) || (obj2.OD instanceof relacional_1.relacional) || (obj2.OD instanceof logica_1.logica)) {
                var obj3 = obj2.OD;
                this.concatenacion(obj3);
            }
            else if (obj2.OD instanceof identificador_1.identificador) {
                var obj3 = obj2.OD;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OD instanceof primitivo_1.primitivo) {
                var obj3 = obj2.OD;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
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
            else if (obj2.OI instanceof identificador_1.identificador) {
                var obj3 = obj2.OI;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OI instanceof primitivo_1.primitivo) {
                var obj3 = obj2.OI;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            if ((obj2.OD instanceof aritmetico_1.aritmetico) || (obj2.OD instanceof relacional_1.relacional) || (obj2.OD instanceof logica_1.logica)) {
                var obj3 = obj2.OD;
                this.concatenacion(obj3);
            }
            else if (obj2.OD instanceof identificador_1.identificador) {
                var obj3 = obj2.OD;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OD instanceof primitivo_1.primitivo) {
                var obj3 = obj2.OD;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof logicaUnario_1.logicaUnario) {
            var obj2 = obj;
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION LOGICA";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
            if (obj2.OP instanceof identificador_1.identificador) {
                var obj3 = obj2.OP;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OP instanceof primitivo_1.primitivo) {
                var obj3 = obj2.OP;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof aritmeticoUnario_1.aritmeticoUnario) {
            var obj2 = obj;
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION ARITMETICA";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
            if (obj2.OP instanceof identificador_1.identificador) {
                var obj3 = obj2.OP;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OP instanceof primitivo_1.primitivo) {
                var obj3 = obj2.OP;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
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
