import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class metodo implements instruccion{

    identificador: expresion;
    parametros : Array<nodoAST>;
    instrucciones : Array<nodoAST>;

    

    constructor(identificador_ : expresion, parametros_ : Array<nodoAST>,instrucciones_ : Array<nodoAST>)
    {
        this.identificador = identificador_;
        this.parametros = parametros_;
        this.instrucciones = instrucciones_;
    }

}

export {metodo};