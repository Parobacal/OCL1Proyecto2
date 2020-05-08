import {expresion} from "../definiciones/expresion";

class aritmetico implements expresion{

    OI : expresion;
    OD: expresion;
    operador : string

    constructor(opiz_ : expresion, opder_ : expresion, operador_ : string)
    {
        this.OI = opiz_;
        this.OD = opder_;
        this.operador = operador_;
    }
}

export{aritmetico};