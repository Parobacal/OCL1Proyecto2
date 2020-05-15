import { nodoAST } from "../../AST/arbol/nodoAST";
import { clase } from "../../AST/instrucciones/clase";
import { identificador } from "../../AST/expresiones/identificador";
import { metodo } from "../../AST/instrucciones/metodo";
import { funcion } from "../../AST/instrucciones/funcion";
import { primitivo } from "../../AST/expresiones/primitivo";
import { declaracion } from "../../AST/instrucciones/declaracion";

class comparador{


    private archivo1 : Array<nodoAST>;
    private archivo2 : Array<nodoAST>;
    reporteClasesCopia : string;
    reporteFMCopia : string;
    reporteVariablesCopia : string;
    
    

    constructor (){
        this.archivo1 = new Array<nodoAST>();
        this.archivo2 = new Array<nodoAST>();

        this.reporteClasesCopia = "<html>\n";
        this.reporteClasesCopia += "<header>\n";
        this.reporteClasesCopia += "<title>Reporte de copias</title>\n";
        this.reporteClasesCopia +="</header>\n";
        this.reporteClasesCopia+="<body background=\"gray\">\n";
        this.reporteClasesCopia += "<div align=\"center\">\n";
        this.reporteClasesCopia += "<h1>Reporte de clases copia</h1>\n";
        this.reporteClasesCopia += "<table border=\"2\" align=\"center\">\n";
        this.reporteClasesCopia += "<tr>\n";
        this.reporteClasesCopia += "<th>CLASE</th><th>DESCRIPCION</th><th>LINEA</th>\n";
        this.reporteClasesCopia += "</tr>\n";




        this.reporteFMCopia = "";
        this.reporteVariablesCopia = "";
    }

    public comparar(nodos1 : Array<nodoAST>, nodos2 : Array<nodoAST>):boolean{

        //##############################CLASES#############################

        if (this.setearClases(nodos1,nodos2) == true)
        {
            let existe : boolean = false;
            for (let i = 0; i < this.archivo1.length; i ++)
            {
                let claseOriginal = this.archivo1[i] as clase;
                let nombreClaseOriginal = claseOriginal.valor as identificador;
                for (let j = 0; j < this.archivo2.length; j ++)
                {
                    let claseCopia = this.archivo2[i] as clase;
                    let nombreClaseCopia = claseCopia.valor as identificador;

                    // REQUISITO 1: SI EL NOMBRE ES EL MISMO
                    if(nombreClaseOriginal.valor == nombreClaseCopia.valor)
                    {
                        for (let l = 0; l < claseOriginal.instrucciones.length; l ++)
                        {
                            if (claseOriginal.instrucciones[l] instanceof metodo)
                            {
                                let instruccionClaseOriginal = claseOriginal.instrucciones[l] as metodo;
                                let nombreMetodoClaseOriginal = instruccionClaseOriginal.identificador as identificador;
                                for (let m = 0; m < claseCopia.instrucciones.length; m ++)
                                {
                                    if (claseCopia.instrucciones[m] instanceof metodo)
                                    {    
                                        let instruccionClaseCopia = claseCopia.instrucciones[m] as metodo;
                                        if (instruccionClaseOriginal.parametros.length == instruccionClaseCopia.parametros.length)
                                        {
                                            for (let n = 0; n < instruccionClaseOriginal.parametros.length; n ++)
                                            {
                                                let parametroInstruccionClaseOriginal = instruccionClaseOriginal.parametros[n] as primitivo;
                                                let parametroInstruccionClaseCopia = instruccionClaseCopia.parametros[n] as primitivo;
                                                if (parametroInstruccionClaseOriginal.tipo == parametroInstruccionClaseCopia.tipo)
                                                {
                                                    existe = true;
                                                }
                                                else 
                                                {
                                                    existe = false;
                                                    break;

                                                }
                                            }
                                            if (existe == false)
                                            {
                                                break;
                                            }
                                            else 
                                            {
                                                this.verificarVariables(nombreClaseOriginal.valor, nombreMetodoClaseOriginal.valor, instruccionClaseOriginal.instrucciones, instruccionClaseCopia.instrucciones);
                                                break;
                                            }
                                        }
                                    }
                                    
                                }
                                if (existe == false)
                                {
                                    break;
                                }
                            }
                            else if (claseOriginal.instrucciones[l] instanceof funcion)
                            {
                                let instruccionClaseOriginal = claseOriginal.instrucciones[l] as funcion;
                                for (let m = 0; m < claseCopia.instrucciones.length; m ++)
                                {

                                    
                                }
                            }
                        }
                    }
                }
            }
            return true;
        }
        else 
        {
            return false;
        }

    }


    public verificarVariables(nombreClase : string, nombreFM : string, instruccionesClaseOriginal : Array<nodoAST>, instruccionesClaseCopia : Array<nodoAST>): void{

        let existeCopia: Boolean = false;
        let variableTipo = new Array<string>();
        let variableNombre = new Array<string>();

        for (let i = 0; i < instruccionesClaseOriginal.length; i ++)
        {
            if (instruccionesClaseOriginal[i] instanceof declaracion)
            {
                let declaracionClaseOriginal = instruccionesClaseOriginal[i] as declaracion;
                for(let j = 0; j < instruccionesClaseCopia.length; j ++)
                {
                    if (instruccionesClaseCopia[j] instanceof declaracion)
                    {
                        let declaracionClaseCopia = instruccionesClaseCopia[j] as declaracion;
                        if (declaracionClaseOriginal.tipo == declaracionClaseCopia.tipo)
                        {
                            existeCopia = true;
                            let nombre = declaracionClaseOriginal.valor as identificador;
                            variableNombre.push(nombre.valor);
                            variableTipo.push(declaracionClaseOriginal.tipo);
                        }
                    }
                }
            }
        }
        if (existeCopia == true)
        {
            var cad:string="";
            cad+="<html>\n";
                cad+="<header>\n";
                    cad+="<title>Reporte de copias</title>\n";
                cad+="</header>\n";
                cad+="<body background=\"gray\">\n";
                    cad+="<div align=\"center\">\n";
                        cad+="<h1>Reporte de variables copia</h1>\n";
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
    
        }
    }

    

    public setearClases(nodos1 : Array<nodoAST>, nodos2 : Array<nodoAST>): boolean {
        //Se insertan las clases 
        let clase1 : boolean = false;
        let clase2 : boolean = false;
        for(let i = 0; i < nodos1.length; i ++)
        {
            if (nodos1[i] instanceof clase)
            {
                clase1 = true;
                this.archivo1.push(nodos1[i]);
            }
        }
        for(let i = 0; i < nodos2.length; i ++)
        {
            if (nodos2[i] instanceof clase)
            {
                clase2 = true;
                this.archivo2.push(nodos2[i]);
            }
        }
        if ((clase1 == true) && (clase2 == true))
        {
            return true;
        }
        else 
        {
            return false;
        }
    }


}