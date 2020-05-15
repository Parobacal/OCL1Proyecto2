"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorLS = /** @class */ (function () {
    function errorLS(tipo_, descripcion_, fila_, columna_) {
        this.tipo = tipo_;
        this.descripcion = descripcion_;
        this.fila = fila_;
        this.columna = columna_;
    }
    return errorLS;
}());
exports.errorLS = errorLS;
