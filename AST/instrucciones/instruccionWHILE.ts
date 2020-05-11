import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class instruccionWHILE implements instruccion{

    condicion : expresion;
    instrucciones : Array<nodoAST>;

    constructor(condicion_ : expresion, instrucciones_ : Array<nodoAST>)
    {
        this.condicion = condicion_;
        this.instrucciones = instrucciones_;
    }

}

export {instruccionWHILE};