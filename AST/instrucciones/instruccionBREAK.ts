import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class instruccionBREAK implements instruccion{

    descripcion : string;

    constructor()
    {
        this.descripcion = "BREAK";

    }

}

export {instruccionBREAK};