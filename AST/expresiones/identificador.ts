import {expresion} from "../definiciones/expresion";

class identificador implements expresion{

    valor: string;
    tipo : string;
    
    constructor(id_ : string)
    {
        this.valor = id_;
        this.tipo = "IDENTIFICADOR";
    }
}

export {identificador};