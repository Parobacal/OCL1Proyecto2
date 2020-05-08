import {expresion} from "../definiciones/expresion";

class primitivo implements expresion{

    valor : string;
    tipo : string;

    constructor(valor_ : string, tipo_ : string)
    {
        this.valor = valor_;
        this.tipo = tipo_;
    }
}

export{primitivo};