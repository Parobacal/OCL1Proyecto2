"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayErrorLS = /** @class */ (function () {
    function arrayErrorLS() {
        this.nodos = new Array();
    }
    arrayErrorLS.prototype.insertar = function (nodo_) {
        this.nodos.push(nodo_);
    };
    arrayErrorLS.prototype.getNodos = function () {
        return this.nodos;
    };
    arrayErrorLS.prototype.getErrores = function () {
        var cad = "";
        cad += "<html>\n";
        cad += "<header>\n";
        cad += "<title>Reporte Errores</title>\n";
        cad += "</header>\n";
        cad += "<body background=\"gray\">\n";
        cad += "<div align=\"center\">\n";
        cad += "<h1>Reporte de Errores de Compilacion</h1>\n";
        cad += "<table border=\"2\" align=\"center\">\n";
        cad += "<tr>\n";
        cad += "<th>TIPO DE ERROR</th><th>DESCRIPCION</th><th>LINEA</th>\n";
        cad += "</tr>\n";
        for (var i = 0; i < this.nodos.length; i++) {
            cad += "<tr>\n";
            cad += "<td>" + this.nodos[i].tipo + "</td><td>" + this.nodos[i].descripcion + "</td><td>" + this.nodos[i].fila + "</td>\n";
            cad += "</tr>\n";
        }
        cad += "</table>\n";
        cad += "</div>\n";
        cad += "</body>\n";
        cad += "</html>\n";
        return cad;
    };
    return arrayErrorLS;
}());
exports.arrayErrorLS = arrayErrorLS;
