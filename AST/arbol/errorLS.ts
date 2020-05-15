
class errorLS
{
    tipo : string;
    descripcion : string;
    fila : string;
    columna : string;

    constructor(tipo_ : string, descripcion_ : string, fila_ : string, columna_ : string){
        this.tipo = tipo_;
        this.descripcion = descripcion_;
        this.fila = fila_;
        this.columna = columna_;
    }

}

export {errorLS}