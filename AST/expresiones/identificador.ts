import {expresion} from "../definiciones/expresion";

class identificador implements expresion{

    identificador_ : string;
    
    constructor(id_ : string)
    {
        this.identificador_ = id_;
    }
}

export {identificador};