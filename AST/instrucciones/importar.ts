import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";

class importar implements instruccion{

    id : expresion;

    constructor(id_ : expresion)
    {
        this.id = id_;
    }

}

export {importar};