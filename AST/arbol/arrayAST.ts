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

    
}

export {arrayAST};