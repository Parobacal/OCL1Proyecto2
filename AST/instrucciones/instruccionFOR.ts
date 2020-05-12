import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";
import { nodoAST } from "../arbol/nodoAST";

class instruccionFOR implements instruccion{

    condicion1 : instruccion;
    condicion2 : expresion;
    condicion3 : expresion;
    instrucciones : Array<nodoAST>;

    constructor(condicion1_ : instruccion,condicion2_ : expresion, condicion3_ : expresion, instrucciones_ : Array<nodoAST>)
    {
        this.condicion1 = condicion1_;
        this.condicion2 = condicion2_;
        this.condicion3 = condicion3_;
        this.instrucciones = instrucciones_;
    }

}

export {instruccionFOR};