"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clase_1 = require("../AST/instrucciones/clase");
var metodo_1 = require("../AST/instrucciones/metodo");
var funcion_1 = require("../AST/instrucciones/funcion");
var declaracion_1 = require("../AST/instrucciones/declaracion");
var comparador = /** @class */ (function () {
    //
    function comparador() {
        this.clases1 = new Array();
        this.clases2 = new Array();
        this.fm1 = new Array();
        this.fm2 = new Array();
        this.reporteClasesCopia = "<html>\n";
        this.reporteClasesCopia += "<header>\n";
        this.reporteClasesCopia += "<title>Reporte de copias</title>\n";
        this.reporteClasesCopia += "</header>\n";
        this.reporteClasesCopia += "<body background=\"gray\">\n";
        this.reporteClasesCopia += "<div align=\"center\">\n";
        this.reporteClasesCopia += "<h1>Reporte de clases copia</h1>\n";
        this.reporteClasesCopia += "<table border=\"2\" align=\"center\">\n";
        this.reporteClasesCopia += "<tr>\n";
        this.reporteClasesCopia += "<th>CLASE</th><th>FUNCIONES Y METODOS</th>\n";
        this.reporteClasesCopia += "</tr>\n";
        this.reporteFMCopia = "<html>\n";
        this.reporteFMCopia += "<header>\n";
        this.reporteFMCopia += "<title>Reporte de copias</title>\n";
        this.reporteFMCopia += "</header>\n";
        this.reporteFMCopia += "<body background=\"gray\">\n";
        this.reporteFMCopia += "<div align=\"center\">\n";
        this.reporteFMCopia += "<h1>Reporte de funciones y metodos copia</h1>\n";
        this.reporteFMCopia += "<table border=\"2\" align=\"center\">\n";
        this.reporteFMCopia += "<tr>\n";
        this.reporteFMCopia += "<th>CLASE</th><th>NOMBRE</th><th>TIPO DE FUNCION O METODO</th><th>PARAMETROS</th>\n";
        this.reporteFMCopia += "</tr>\n";
        this.reporteVariablesCopia = "<html>\n";
        this.reporteVariablesCopia += "<header>\n";
        this.reporteVariablesCopia += "<title>Reporte de copias</title>\n";
        this.reporteVariablesCopia += "</header>\n";
        this.reporteVariablesCopia += "<body background=\"gray\">\n";
        this.reporteVariablesCopia += "<div align=\"center\">\n";
        this.reporteVariablesCopia += "<h1>Reporte de variables copia</h1>\n";
        this.reporteVariablesCopia += "<table border=\"2\" align=\"center\">\n";
        this.reporteVariablesCopia += "<tr>\n";
        this.reporteVariablesCopia += "<th>CLASE</th><th>FUNCION O METODO</th><th>TIPO</th><th>NOMBRE</th>\n";
        this.reporteVariablesCopia += "</tr>\n";
    }
    comparador.prototype.comparar = function (nodos1, nodos2) {
        //##############################CLASES#############################
        if (this.setearClases(nodos1, nodos2) == true) {
            //console.log("entre a ver si si tengo clases");
            var claseExiste = false;
            for (var i = 0; i < this.clases1.length; i++) {
                var claseOriginal = this.clases1[i];
                var nombreClaseOriginal = claseOriginal.valor;
                for (var j = 0; j < this.clases2.length; j++) {
                    var claseCopia = this.clases2[j];
                    var nombreClaseCopia = claseCopia.valor;
                    // REQUISITO 1: SI EL NOMBRE ES EL MISMO
                    if (nombreClaseOriginal.valor == nombreClaseCopia.valor) {
                        //console.log("ENTRE AL NOMBRE");         
                        if (this.setearFM(claseOriginal.instrucciones, claseCopia.instrucciones) == true) {
                            //console.log("ENTRE A VER SI TIENE FUNCIONES Y METODOS Y SI TIENE"); 
                            //console.log(this.fm1);
                            var n = this.fm1.length;
                            var cont = 0;
                            for (var m = 0; m < this.fm1.length; m++) {
                                if (this.fm1[m] instanceof funcion_1.funcion) {
                                    for (var n_1 = 0; n_1 < this.fm2.length; n_1++) {
                                        if (this.fm2[n_1] instanceof funcion_1.funcion) {
                                            var funcionClaseOriginal = this.fm1[m];
                                            var funcionClaseCopia = this.fm2[n_1];
                                            if (funcionClaseOriginal.tipo == funcionClaseCopia.tipo) {
                                                if (funcionClaseOriginal.parametros.length == funcionClaseCopia.parametros.length) {
                                                    var existeFuncion = false;
                                                    var nombreFuncionClaseOriginal = funcionClaseOriginal.identificador;
                                                    var parametros = "";
                                                    for (var o = 0; o < funcionClaseOriginal.parametros.length; o++) {
                                                        var parametroFuncionClaseOriginal = funcionClaseOriginal.parametros[o];
                                                        var parametroFuncionClaseCopia = funcionClaseCopia.parametros[o];
                                                        if (parametroFuncionClaseOriginal.tipo == parametroFuncionClaseCopia.tipo) {
                                                            parametros += parametroFuncionClaseOriginal.tipo + " " + parametroFuncionClaseOriginal.valor + "    ";
                                                            existeFuncion = true;
                                                        }
                                                        else {
                                                            parametros = "";
                                                            existeFuncion = false;
                                                            break;
                                                        }
                                                    }
                                                    if (existeFuncion == true) {
                                                        this.reporteFMCopia += "<tr>\n";
                                                        this.reporteFMCopia += "<td>" + nombreClaseOriginal.valor + "</td><td>" + nombreFuncionClaseOriginal.valor + "</td><td>" + funcionClaseOriginal.tipo + "</td><td>" + parametros + "</td>\n";
                                                        this.reporteFMCopia += "</tr>\n";
                                                        cont++;
                                                        if (funcionClaseOriginal.instrucciones != null) {
                                                            this.verificarVariables(nombreClaseOriginal.valor, nombreFuncionClaseOriginal.valor, funcionClaseOriginal.instrucciones, funcionClaseCopia.instrucciones, "metodo");
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                else // Si es un metodo
                                 {
                                    //console.log("ENTRE A VER SI ES METODO"); 
                                    for (var n_2 = 0; n_2 < this.fm2.length; n_2++) {
                                        if (this.fm2[n_2] instanceof metodo_1.metodo) {
                                            var metodoClaseOriginal = this.fm1[m];
                                            var metodoClaseCopia = this.fm2[n_2];
                                            if (metodoClaseOriginal.parametros.length == metodoClaseCopia.parametros.length) {
                                                var existeFuncion = false;
                                                var nombreFuncionClaseOriginal = metodoClaseOriginal.identificador;
                                                var parametros = "";
                                                for (var o = 0; o < metodoClaseOriginal.parametros.length; o++) {
                                                    var parametroFuncionClaseOriginal = metodoClaseOriginal.parametros[o];
                                                    var parametroFuncionClaseCopia = metodoClaseCopia.parametros[o];
                                                    if (parametroFuncionClaseOriginal.tipo == parametroFuncionClaseCopia.tipo) {
                                                        parametros += parametroFuncionClaseOriginal.tipo + " " + parametroFuncionClaseOriginal.valor + "    ";
                                                        existeFuncion = true;
                                                    }
                                                    else {
                                                        parametros = "";
                                                        existeFuncion = false;
                                                        break;
                                                    }
                                                }
                                                if (existeFuncion == true) {
                                                    this.reporteFMCopia += "<tr>\n";
                                                    this.reporteFMCopia += "<td>" + nombreClaseOriginal.valor + "</td><td>" + nombreFuncionClaseOriginal.valor + "</td><td>METODO</td><td>" + parametros + "</td>\n";
                                                    this.reporteFMCopia += "</tr>\n";
                                                    cont++;
                                                    if (metodoClaseOriginal.instrucciones != null) {
                                                        this.verificarVariables(nombreClaseOriginal.valor, nombreFuncionClaseOriginal.valor, metodoClaseOriginal.instrucciones, metodoClaseCopia.instrucciones, "metodo");
                                                    }
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (n == cont) {
                                claseExiste = true;
                                this.reporteClasesCopia += "<tr>\n";
                                this.reporteClasesCopia += "<td>" + nombreClaseOriginal.valor + "</td><td>" + n + "</td>\n";
                                this.reporteClasesCopia += "</tr>\n";
                                break;
                            }
                        }
                    }
                }
            }
            if (claseExiste == true) {
                this.reporteClasesCopia += "</table>\n";
                this.reporteClasesCopia += "</div>\n";
                this.reporteClasesCopia += "</body>\n";
                this.reporteClasesCopia += "</html>\n";
                this.reporteFMCopia += "</table>\n";
                this.reporteFMCopia += "</div>\n";
                this.reporteFMCopia += "</body>\n";
                this.reporteFMCopia += "</html>\n";
                this.reporteVariablesCopia += "</table>\n";
                this.reporteVariablesCopia += "</div>\n";
                this.reporteVariablesCopia += "</body>\n";
                this.reporteVariablesCopia += "</html>\n";
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    comparador.prototype.verificarVariables = function (nombreClase, nombreFM, instruccionesClaseOriginal, instruccionesClaseCopia, tipo) {
        for (var i = 0; i < instruccionesClaseOriginal.length; i++) {
            if (instruccionesClaseOriginal[i] instanceof declaracion_1.declaracion) {
                var declaracionClaseOriginal = instruccionesClaseOriginal[i];
                for (var j = 0; j < instruccionesClaseCopia.length; j++) {
                    if (instruccionesClaseCopia[j] instanceof declaracion_1.declaracion) {
                        var declaracionClaseCopia = instruccionesClaseCopia[j];
                        if (declaracionClaseOriginal.tipo == declaracionClaseCopia.tipo) {
                            var nombres = "";
                            for (var m = 0; m < declaracionClaseOriginal.lista_identificadores.length; m++) {
                                var name_1 = declaracionClaseOriginal.lista_identificadores[m];
                                nombres += name_1.valor + " ";
                            }
                            this.reporteVariablesCopia += "<tr>\n";
                            this.reporteVariablesCopia += "<td>" + nombreClase + "</td><td>" + nombreFM + "</td><td>" + declaracionClaseOriginal.tipo + "</td><td>" + nombres + "</td>\n";
                            this.reporteVariablesCopia += "</tr>\n";
                        }
                    }
                }
            }
        }
    };
    comparador.prototype.setearClases = function (nodos1, nodos2) {
        //Se insertan las clases 
        var clase1 = false;
        var clase2 = false;
        for (var i = 0; i < nodos1.length; i++) {
            if (nodos1[i] instanceof clase_1.clase) {
                clase1 = true;
                this.clases1.push(nodos1[i]);
            }
        }
        for (var i = 0; i < nodos2.length; i++) {
            if (nodos2[i] instanceof clase_1.clase) {
                clase2 = true;
                this.clases2.push(nodos2[i]);
            }
        }
        if ((clase1 == true) && (clase2 == true)) {
            return true;
        }
        else {
            return false;
        }
    };
    comparador.prototype.setearFM = function (nodos1, nodos2) {
        this.fm1 = new Array();
        this.fm2 = new Array();
        //Se insertan las clases 
        var bfm1 = false;
        var bfm2 = false;
        if ((nodos1 != null) && (nodos2 != null)) {
            for (var i = 0; i < nodos1.length; i++) {
                if (nodos1[i] instanceof funcion_1.funcion) {
                    var func = nodos1[i];
                    if (func.parametros != null) {
                        bfm1 = true;
                        this.fm1.push(nodos1[i]);
                    }
                }
                else if (nodos1[i] instanceof metodo_1.metodo) {
                    var metod = nodos1[i];
                    if (metod.parametros != null) {
                        bfm1 = true;
                        this.fm1.push(nodos1[i]);
                    }
                }
            }
            for (var i = 0; i < nodos2.length; i++) {
                if (nodos2[i] instanceof funcion_1.funcion) {
                    var func = nodos2[i];
                    if (func.parametros != null) {
                        bfm2 = true;
                        this.fm2.push(nodos2[i]);
                    }
                }
                else if (nodos2[i] instanceof metodo_1.metodo) {
                    var metod = nodos2[i];
                    if (metod.parametros != null) {
                        bfm2 = true;
                        this.fm2.push(nodos2[i]);
                    }
                }
            }
            if ((bfm1 == true) && (bfm2 == true)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    comparador.prototype.getReporteClasesCopia = function () {
        return this.reporteClasesCopia;
    };
    comparador.prototype.getReporteFMCopia = function () {
        return this.reporteFMCopia;
    };
    comparador.prototype.getReporteVariablesCopia = function () {
        return this.reporteVariablesCopia;
    };
    return comparador;
}());
exports.comparador = comparador;
