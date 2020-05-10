import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class asignacion implements instruccion{

    identificador : expresion;
    valor : expresion;
    

    constructor(tipo_ : expresion, valor_ : expresion)
    {
        this.identificador = tipo_;
        this.valor = valor_;
    }

}

export {asignacion};