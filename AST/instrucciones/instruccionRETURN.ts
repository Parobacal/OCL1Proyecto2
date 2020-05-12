import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class instruccionRETURN implements instruccion{

    valor : expresion;

    constructor(valor_ : expresion)
    {
        this.valor = valor_;

    }

}

export {instruccionRETURN};