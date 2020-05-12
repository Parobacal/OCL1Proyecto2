import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class instruccionDEFAULT implements instruccion{

    instrucciones : Array<nodoAST>;

    constructor(instrucciones_ : Array<nodoAST>)
    {
        this.instrucciones = instrucciones_;

    }

}

export {instruccionDEFAULT};