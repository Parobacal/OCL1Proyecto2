import {nodoAST} from "./nodoAST";

class arbolAST{

    public nodos : Array<nodoAST>;

    constructor(nodos_ : Array<nodoAST>){
        this.nodos = nodos_;
    }

    public recorrer():void {
        console.log("Tamaño del ast: " +this.nodos.length);
        for (let i = 0; i < this.nodos.length; i ++){
            //console.log("entre");
            console.log(this.nodos[i]);
        }
    }

}

export {arbolAST};