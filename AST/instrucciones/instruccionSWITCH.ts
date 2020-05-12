import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class instruccionSWITCH implements instruccion{

    condicion : expresion;
    cases : Array<nodoAST>;
    default : instruccion;

    constructor(condicion_ : expresion, cases_ : Array<nodoAST>, default_ : instruccion)
    {
        this.condicion = condicion_;
        this.cases = cases_;
        this.default = default_;
    }

}

export {instruccionSWITCH};