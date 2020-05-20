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
var instruccionIF_1 = require("../instrucciones/instruccionIF");
var asignacion_1 = require("../instrucciones/asignacion");
var instruccionELSEIF_1 = require("../instrucciones/instruccionELSEIF");
var instruccionWHILE_1 = require("../instrucciones/instruccionWHILE");
var instruccionDOWHILE_1 = require("../instrucciones/instruccionDOWHILE");
var funcion_1 = require("../instrucciones/funcion");
var instruccionSWITCH_1 = require("../instrucciones/instruccionSWITCH");
var instruccionBREAK_1 = require("../instrucciones/instruccionBREAK");
var instruccionCASE_1 = require("../instrucciones/instruccionCASE");
var instruccionFOR_1 = require("../instrucciones/instruccionFOR");
var metodo_1 = require("../instrucciones/metodo");
var instruccionCONTINUE_1 = require("../instrucciones/instruccionCONTINUE");
var instruccionRETURN_1 = require("../instrucciones/instruccionRETURN");
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
                var obj2 = obj.valor;
                this.expresion(obj2);
                if (obj.instrucciones != null) {
                    this.recorrer(obj.instrucciones);
                }
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
                this.expresion(obj.valor);
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
                    this.expresion(obj.valor);
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
            else if (node[i] instanceof asignacion_1.asignacion) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>ASIGNACION";
                var obj = node[i];
                this.expresion(obj.identificador);
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>VALOR";
                this.expresion(obj.valor);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof instruccionIF_1.instruccionIF) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>SENTENCIA IF";
                var obj = node[i];
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CONDICION IF";
                this.expresion(obj.condicion);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                if (obj.instrucciones != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCIONES IF";
                    this.recorrer(obj.instrucciones);
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                if (obj.elseif != null) {
                    this.recorrer(obj.elseif);
                }
                if (obj.else != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>SENTENCIA ELSE";
                    var obj2 = obj.else;
                    if (obj2.instrucciones != null) {
                        this.recorrer(obj2.instrucciones);
                    }
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof instruccionELSEIF_1.instruccionELSEIF) {
                var obj = node[i];
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>SENTENCIA ELSE IF";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CONDICION ELSE IF";
                this.expresion(obj.condicion);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                if (obj.instrucciones != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCIONES ELSE IF";
                    this.recorrer(obj.instrucciones);
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof instruccionWHILE_1.instruccionWHILE) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>SENTENCIA WHILE";
                var obj = node[i];
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CONDICION WHILE";
                this.expresion(obj.condicion);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                if (obj.instrucciones != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCIONES WHILE";
                    this.recorrer(obj.instrucciones);
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof instruccionDOWHILE_1.instruccionDOWHILE) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>SENTENCIA DO WHILE";
                var obj = node[i];
                if (obj.instrucciones != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCIONES DO WHILE";
                    this.recorrer(obj.instrucciones);
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CONDICION DO WHILE";
                this.expresion(obj.condicion);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof funcion_1.funcion) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>FUNCION";
                var obj = node[i];
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>TIPO";
                this.reporteAST += "<ul><li>" + obj.tipo + "</li></ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.expresion(obj.identificador);
                if (obj.parametros != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PARAMETROS";
                    for (var i_3 = 0; i_3 < obj.parametros.length; i_3++) {
                        this.expresion(obj.parametros[i_3]);
                    }
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                if (obj.instrucciones != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCIONES";
                    this.recorrer(obj.instrucciones);
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof instruccionSWITCH_1.instruccionSWITCH) {
                var obj = node[i];
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>SENTENCIA SWITCH";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CONDICION SWITCH";
                this.expresion(obj.condicion);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                if (obj.cases != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CASES";
                    this.recorrer(obj.cases);
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                if (obj.default != null) {
                    var obj2 = obj.default;
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>DEFAULT";
                    if (obj2.instrucciones != null) {
                        this.recorrer(obj2.instrucciones);
                    }
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof instruccionBREAK_1.instruccionBREAK) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>BREAK";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof instruccionCASE_1.instruccionCASE) {
                var obj = node[i];
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CASE";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CONDICION CASE";
                this.expresion(obj.condicion);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                if (obj.instrucciones != null) {
                    this.recorrer(obj.instrucciones);
                }
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof instruccionFOR_1.instruccionFOR) {
                var obj = node[i];
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>SENTENCIA FOR";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CONDICION 1 FOR";
                var array = new Array();
                array.push(obj.condicion1);
                this.recorrer(array);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CONDICION 2 FOR";
                this.expresion(obj.condicion2);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CONDICION 3 FOR";
                this.expresion(obj.condicion3);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                if (obj.instrucciones != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCIONES FOR";
                    this.recorrer(obj.instrucciones);
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof metodo_1.metodo) {
                var obj = node[i];
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>METODO";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.expresion(obj.identificador);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                if (obj.parametros != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PARAMETROS";
                    for (var i_4 = 0; i_4 < obj.parametros.length; i_4++) {
                        this.expresion(obj.parametros[i_4]);
                    }
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                if (obj.instrucciones != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCIONES";
                    this.recorrer(obj.instrucciones);
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof instruccionCONTINUE_1.instruccionCONTINUE) {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CONTINUE";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof instruccionRETURN_1.instruccionRETURN) {
                var obj = node[i];
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>RETURN";
                if (obj.valor != null) {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>EXPRESION";
                    this.expresion(obj.valor);
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
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
            var obj3 = obj2.OI;
            this.expresion(obj3);
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            var obj4 = obj2.OD;
            this.expresion(obj4);
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
            var obj3 = obj2.OI;
            this.expresion(obj3);
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            var obj4 = obj2.OD;
            this.expresion(obj4);
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
            var obj3 = obj2.OI;
            this.expresion(obj3);
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            var obj4 = obj2.OD;
            this.expresion(obj4);
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
