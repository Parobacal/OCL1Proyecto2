import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class instruccionCONTINUE implements instruccion{

    descripcion : string;

    constructor()
    {
        this.descripcion = "CONTINUE";

    }

}

export {instruccionCONTINUE};