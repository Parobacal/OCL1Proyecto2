import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class funcion implements instruccion{

    tipo : string;
    identificador : expresion;
    parametros : Array<nodoAST>;
    instrucciones : Array<nodoAST>;
    

    constructor(tipo_ : string, identificador_ : expresion, parametros_ : Array<nodoAST>, instrucciones_ : Array<nodoAST>)
    {
        this.tipo = tipo_;
        this.parametros = parametros_;
        this.instrucciones = instrucciones_;
        this.identificador = identificador_;
    }
}

export {funcion};