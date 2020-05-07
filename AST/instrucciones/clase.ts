import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class clase implements instruccion{

    valor : expresion;
    instrucciones : Array<nodoAST>;
    tipo : string;

    constructor(id_ : expresion, instrucciones_ : Array<nodoAST>)
    {
        this.valor = id_;
        this.instrucciones = instrucciones_;
        this.tipo = "CLASE";
    }

}

export {clase};