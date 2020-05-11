import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class instruccionDOWHILE implements instruccion{

    instrucciones : Array<nodoAST>;
    condicion : expresion;

    constructor(instrucciones_ : Array<nodoAST>,condicion_ : expresion)
    {
        this.instrucciones = instrucciones_;
        this.condicion = condicion_;
    }

}

export {instruccionDOWHILE};