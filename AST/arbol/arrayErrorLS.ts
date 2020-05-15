import {errorLS} from "./errorLS";

class arrayErrorLS extends Array<errorLS>{

   
    constructor(){
        super();
    }

    public static add(err:errorLS){
        this.prototype.push(err);
    }

    public static verificarerror():string{
        if(this.prototype.length>0){
            return "Se Detectaron Errores de Compilacion";
        }
        return "Compilacion Sin Errores";
    }

    public static geterror():string{
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
                            cad+="<th>TIPO DE ERROR</th><th>DESCRIPCION</th><th>LINEA</th>\n";
                        cad+="</tr>\n";
                        for(var i=0; i<this.prototype.length;i++){
                            cad+="<tr>\n";
                                cad+="<td>"+this.prototype[i].tipo+"</td><td>"+
                                this.prototype[i].descripcion+"</td><td>"+
                                this.prototype[i].fila+"</td>\n";
                            cad+="</tr>\n";
                        }
                    cad+="</table>\n";
                cad+="</div>\n";
            cad+="</body>\n";
        cad+="</html>\n";

        return cad;
    }

    public static clear(){
        while(this.prototype.length>0){
            this.prototype.pop();
        }
    }
}
export {arrayErrorLS};