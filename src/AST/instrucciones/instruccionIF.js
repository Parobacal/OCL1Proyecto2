"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var instruccionIF = /** @class */ (function () {
    function instruccionIF(condicion_, instrucciones_, elseif_, else_) {
        this.condicion = condicion_;
        this.instrucciones = instrucciones_;
        this.elseif = elseif_;
        this.else = else_;
    }
    return instruccionIF;
}());
exports.instruccionIF = instruccionIF;
