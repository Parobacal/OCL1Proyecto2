import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";

class importar implements instruccion{

    valor : expresion;
    tipo: string;

    constructor(id_ : expresion)
    {
        this.valor = id_;
        this.tipo = "IMPORTAR";
    }

}

export {importar};