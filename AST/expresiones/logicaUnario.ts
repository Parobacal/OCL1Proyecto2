import {expresion} from "../definiciones/expresion";

class logicaUnario implements expresion{

    OP: expresion;
    operador : string

    constructor( opder_ : expresion, operador_ : string)
    {
        this.OP = opder_;
        this.operador = operador_;
    }
}

export{logicaUnario};