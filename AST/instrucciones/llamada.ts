import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class llamada implements instruccion{

    lista_parametros : Array<nodoAST>;
    nombre : expresion;
    

    constructor(valor_ : expresion, listado : Array<nodoAST>)
    {
        this.lista_parametros = listado;
        this.nombre = valor_;
    }

}

export {llamada};