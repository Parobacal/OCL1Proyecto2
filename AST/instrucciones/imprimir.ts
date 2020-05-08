import {instruccion} from "../definiciones/instruccion";
import {expresion} from "../definiciones/expresion";

class imprimir implements instruccion{

    valor : expresion;
    tipo: string;

    constructor(salida : expresion)
    {
        this.valor = salida;
        this.tipo = "IMPRIMIR";
    }

}

export {imprimir};