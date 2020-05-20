import {errorLS} from "./errorLS";

class arrayErrorLS{

   
    nodos : Array<errorLS>;
    
    constructor(){
        this.nodos = new Array<errorLS>();
    }

    public insertar (nodo_ : errorLS):void{
        this.nodos.push(nodo_);
    }

    public getNodos():Array<errorLS>{
        return this.nodos;
    }

    public getErrores():string{
        var cad:string="";
        cad+="<html>\n";
            cad+="<header>\n";
                cad+="<title>Reporte Errores</title>\n";
            cad+="</header>\n";
            cad+="<body background=\"gray\">\n";
                cad+="<div align=\"center\">\n";
                    cad+="<h1>Reporte de Errores de Compilacion</h1>\n";
                    cad+="<table border=\"2\" align=\"center\">\n";
                        cad+="<tr>\n";
                            cad+="<th>TIPO DE ERROR</th><th>DESCRIPCION</th><th>FILA</th><th>COLUMNA</th>\n";
                        cad+="</tr>\n";
                        for(var i=0; i< this.nodos.length; i++){
                            cad+="<tr>\n";
                                cad+="<td>" + this.nodos[i].tipo + "</td><td>" + this.nodos[i].descripcion+"</td><td>" + this.nodos[i].fila +"</td><td>" + this.nodos[i].columna+"</td>\n";
                            cad+="</tr>\n";
                        }
                    cad+="</table>\n";
                cad+="</div>\n";
            cad+="</body>\n";
        cad+="</html>\n";

        return cad;
    }

    public getErroresMensaje():string {
        var cad = "";
        for (let i = 0; i < this.nodos.length; i ++)
        {
            cad += "Tipo: " + this.nodos[i].tipo + ", Descripción: " + this.nodos[i].descripcion + ", Fila: " + this.nodos[i].fila + ", Columna: " + this.nodos[i].columna + "\n";
        }
        return cad;
    }


}
export {arrayErrorLS};