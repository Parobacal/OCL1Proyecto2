import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class instruccionIF implements instruccion{

    condicion : expresion;
    instrucciones : Array<nodoAST>;
    elseif : Array<nodoAST>;
    else : instruccion;

    constructor(condicion_ : expresion, instrucciones_ : Array<nodoAST>, elseif_ : Array<nodoAST>, else_ : instruccion)
    {
        this.condicion = condicion_;
        this.instrucciones = instrucciones_;
        this.elseif = elseif_;
        this.else = else_;
    }

}

export {instruccionIF};//