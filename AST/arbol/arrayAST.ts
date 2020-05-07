import {nodoAST} from "./nodoAST";

class arrayAST{

    private nodos : Array<nodoAST>;
    
    constructor(){
        this.nodos = new Array<nodoAST>();
    }

    public insertar (nodo_ : nodoAST):void{
        this.nodos.push(nodo_);
    }

    public getNodos():Array<nodoAST>{
        return this.nodos;
    }

    public insertarArray (nodos : Array<nodoAST>):void{
        for (let i = 0; i < nodos.length; i ++)
        {
            this.nodos.push(nodos[i]);
        }

    }
    
}

export {arrayAST};