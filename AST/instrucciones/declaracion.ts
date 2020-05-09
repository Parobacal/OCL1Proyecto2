import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class declaracion implements instruccion{

    tipo: string;
    lista_identificadores : Array<nodoAST>;
    valor : expresion;
    

    constructor(tipo_ : string, listado : Array<nodoAST>, valor_ : expresion)
    {
        this.tipo = tipo_;
        this.lista_identificadores = listado;
        this.valor = valor_;
    }

}

export {declaracion};