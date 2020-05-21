import { nodoAST } from "../AST/arbol/nodoAST";
import { clase } from "../AST/instrucciones/clase";
import { identificador } from "../AST/expresiones/identificador";
import { metodo } from "../AST/instrucciones/metodo";
import { funcion } from "../AST/instrucciones/funcion";
import { primitivo } from "../AST/expresiones/primitivo";
import { declaracion } from "../AST/instrucciones/declaracion";

class comparador{


    private clases1 : Array<nodoAST>;
    private clases2 : Array<nodoAST>;

    private fm1 : Array<nodoAST>;
    private fm2 : Array<nodoAST>;

    reporteClasesCopia : string;
    reporteFMCopia : string;
    reporteVariablesCopia : string;
    
    
//
    constructor (){
        this.clases1 = new Array<nodoAST>();
        this.clases2 = new Array<nodoAST>();

        this.fm1 = new Array<nodoAST>();
        this.fm2 = new Array<nodoAST>();

        this.reporteClasesCopia = "<html>\n";
        this.reporteClasesCopia += "<header>\n";
        this.reporteClasesCopia += "<title>Reporte de copias</title>\n";
        this.reporteClasesCopia +="</header>\n";
        this.reporteClasesCopia+="<body background=\"gray\">\n";
        this.reporteClasesCopia += "<div align=\"center\">\n";
        this.reporteClasesCopia += "<h1>Reporte de clases copia</h1>\n";
        this.reporteClasesCopia += "<table border=\"2\" align=\"center\">\n";
        this.reporteClasesCopia += "<tr>\n";
        this.reporteClasesCopia += "<th>CLASE</th><th>FUNCIONES Y METODOS</th>\n";
        this.reporteClasesCopia += "</tr>\n";

        this.reporteFMCopia = "<html>\n";
        this.reporteFMCopia += "<header>\n";
        this.reporteFMCopia += "<title>Reporte de copias</title>\n";
        this.reporteFMCopia +="</header>\n";
        this.reporteFMCopia+="<body background=\"gray\">\n";
        this.reporteFMCopia += "<div align=\"center\">\n";
        this.reporteFMCopia += "<h1>Reporte de funciones y metodos copia</h1>\n";
        this.reporteFMCopia += "<table border=\"2\" align=\"center\">\n";
        this.reporteFMCopia += "<tr>\n";
        this.reporteFMCopia += "<th>CLASE</th><th>NOMBRE</th><th>TIPO DE FUNCION O METODO</th><th>PARAMETROS</th>\n";
        this.reporteFMCopia += "</tr>\n";


        this.reporteVariablesCopia = "<html>\n";
        this.reporteVariablesCopia += "<header>\n";
        this.reporteVariablesCopia += "<title>Reporte de copias</title>\n";
        this.reporteVariablesCopia +="</header>\n";
        this.reporteVariablesCopia+="<body background=\"gray\">\n";
        this.reporteVariablesCopia += "<div align=\"center\">\n";
        this.reporteVariablesCopia += "<h1>Reporte de variables copia</h1>\n";
        this.reporteVariablesCopia += "<table border=\"2\" align=\"center\">\n";
        this.reporteVariablesCopia += "<tr>\n";
        this.reporteVariablesCopia += "<th>CLASE</th><th>FUNCION O METODO</th><th>TIPO</th><th>NOMBRE</th>\n";
        this.reporteVariablesCopia += "</tr>\n";

    }

    public comparar(nodos1 : Array<nodoAST>, nodos2 : Array<nodoAST>):boolean{

        //##############################CLASES#############################

        if (this.setearClases(nodos1,nodos2) == true)
        {
            //console.log("entre a ver si si tengo clases");
            let claseExiste : boolean = false;
            for (let i = 0; i < this.clases1.length; i ++)
            {
                let claseOriginal = this.clases1[i] as clase;
                let nombreClaseOriginal = claseOriginal.valor as identificador;
                for (let j = 0; j < this.clases2.length; j ++)
                {
                    let claseCopia = this.clases2[j] as clase;
                    let nombreClaseCopia = claseCopia.valor as identificador;

                    // REQUISITO 1: SI EL NOMBRE ES EL MISMO
                    if(nombreClaseOriginal.valor == nombreClaseCopia.valor)
                    {           
                        //console.log("ENTRE AL NOMBRE");         
                        if (this.setearFM(claseOriginal.instrucciones, claseCopia.instrucciones) == true)
                        {
                            //console.log("ENTRE A VER SI TIENE FUNCIONES Y METODOS Y SI TIENE"); 
                            //console.log(this.fm1);
                            let n : number = this.fm1.length;
                            let cont : number = 0;
                            for (let m = 0; m < this.fm1.length; m ++)
                            {
                                if (this.fm1[m] instanceof funcion)
                                {
                                    for (let n = 0; n < this.fm2.length; n ++)
                                    {
                                        if (this.fm2[n] instanceof funcion)
                                        {
                                            let funcionClaseOriginal = this.fm1[m] as funcion;
                                            let funcionClaseCopia = this.fm2[n] as funcion;
                                            if(funcionClaseOriginal.tipo == funcionClaseCopia.tipo)
                                            {
                                                if (funcionClaseOriginal.parametros.length == funcionClaseCopia.parametros.length)
                                                {
                                                    let existeFuncion : boolean = false;
                                                    let nombreFuncionClaseOriginal = funcionClaseOriginal.identificador as identificador;
                                                    let parametros : string = "";
                                                    for (let o = 0; o < funcionClaseOriginal.parametros.length; o ++)
                                                    {
                                                        let parametroFuncionClaseOriginal = funcionClaseOriginal.parametros[o] as primitivo;
                                                        let parametroFuncionClaseCopia = funcionClaseCopia.parametros[o] as primitivo;
                                                        if (parametroFuncionClaseOriginal.tipo == parametroFuncionClaseCopia.tipo)
                                                        {
                                                            parametros += parametroFuncionClaseOriginal.tipo + " " + parametroFuncionClaseOriginal.valor + "    ";
                                                            existeFuncion = true;
                                                        }
                                                        else 
                                                        {
                                                            parametros = "";
                                                            existeFuncion = false;
                                                            break;
        
                                                        }
                                                    }
                                                    if (existeFuncion == true) 
                                                    {
                                                        this.reporteFMCopia += "<tr>\n";
                                                        this.reporteFMCopia += "<td>"+ nombreClaseOriginal.valor + "</td><td>" + nombreFuncionClaseOriginal.valor + "</td><td>" + funcionClaseOriginal.tipo + "</td><td>" + parametros + "</td>\n";
                                                        this.reporteFMCopia += "</tr>\n";
                                                        cont ++;
                                                        if (funcionClaseOriginal.instrucciones != null)
                                                        {
                                                            this.verificarVariables(nombreClaseOriginal.valor, nombreFuncionClaseOriginal.valor, funcionClaseOriginal.instrucciones, funcionClaseCopia.instrucciones, "metodo");
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                else // Si es un metodo
                                {
                                    //console.log("ENTRE A VER SI ES METODO"); 
                                    for (let n = 0; n < this.fm2.length; n ++)
                                    {
                                        if (this.fm2[n] instanceof metodo)
                                        {
                                            let metodoClaseOriginal = this.fm1[m] as metodo;
                                            let metodoClaseCopia = this.fm2[n] as metodo;
                                            if (metodoClaseOriginal.parametros.length == metodoClaseCopia.parametros.length)
                                            {
                                                let existeFuncion : boolean = false;
                                                let nombreFuncionClaseOriginal = metodoClaseOriginal.identificador as identificador;
                                                let parametros : string = "";
                                                for (let o = 0; o < metodoClaseOriginal.parametros.length; o ++)
                                                {
                                                    let parametroFuncionClaseOriginal = metodoClaseOriginal.parametros[o] as primitivo;
                                                    let parametroFuncionClaseCopia = metodoClaseCopia.parametros[o] as primitivo;
                                                    if (parametroFuncionClaseOriginal.tipo == parametroFuncionClaseCopia.tipo)
                                                    {
                                                        parametros += parametroFuncionClaseOriginal.tipo + " " + parametroFuncionClaseOriginal.valor + "    ";
                                                        existeFuncion = true;
                                                    }
                                                    else 
                                                    {
                                                        parametros = "";
                                                        existeFuncion = false;
                                                        break;
        
                                                    }
                                                }
                                                if (existeFuncion == true) 
                                                {
                                                    this.reporteFMCopia += "<tr>\n";
                                                    this.reporteFMCopia += "<td>"+ nombreClaseOriginal.valor + "</td><td>" + nombreFuncionClaseOriginal.valor + "</td><td>METODO</td><td>" + parametros + "</td>\n";
                                                    this.reporteFMCopia += "</tr>\n";
                                                    cont ++;
                                                    if (metodoClaseOriginal.instrucciones != null)
                                                    {
                                                        this.verificarVariables(nombreClaseOriginal.valor, nombreFuncionClaseOriginal.valor, metodoClaseOriginal.instrucciones, metodoClaseCopia.instrucciones, "metodo");
                                                    }
                                                    break;
                                                }
                                            }                        
                                        }
                                    }
                                }
                            }
                            if (n == cont)
                            {
                                claseExiste = true;
                                this.reporteClasesCopia += "<tr>\n";
                                    this.reporteClasesCopia += "<td>" + nombreClaseOriginal.valor + "</td><td>" + n + "</td>\n";
                                this.reporteClasesCopia += "</tr>\n";
                                
                                break;
                            }
                        }
                    }
                }
            }
            if (claseExiste == true)
            {
                            this.reporteClasesCopia += "</table>\n";
                        this.reporteClasesCopia += "</div>\n";
                    this.reporteClasesCopia += "</body>\n";
                this.reporteClasesCopia += "</html>\n";

                            this.reporteFMCopia += "</table>\n";
                        this.reporteFMCopia += "</div>\n";
                    this.reporteFMCopia += "</body>\n";
                this.reporteFMCopia += "</html>\n";

                            this.reporteVariablesCopia += "</table>\n";
                        this.reporteVariablesCopia += "</div>\n";
                    this.reporteVariablesCopia += "</body>\n";
                this.reporteVariablesCopia += "</html>\n";

                return true;
            }
            else 
            {
                return false;
            }
            
        }
        else 
        {
            return false;
        }

    }


    public verificarVariables(nombreClase : string, nombreFM : string, instruccionesClaseOriginal : Array<nodoAST>, instruccionesClaseCopia : Array<nodoAST>, tipo : string): void{


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
                            let nombres : string = "";
                            for (let m = 0; m < declaracionClaseOriginal.lista_identificadores.length; m ++)
                            {
                                let name = declaracionClaseOriginal.lista_identificadores[m] as identificador;
                                nombres += name.valor + " ";
                            }
                            this.reporteVariablesCopia += "<tr>\n";
                            this.reporteVariablesCopia += "<td>"+ nombreClase + "</td><td>" + nombreFM + "</td><td>"  + declaracionClaseOriginal.tipo + "</td><td>" + nombres + "</td>\n";
                            this.reporteVariablesCopia += "</tr>\n";
                        }
                    }
                }
            }
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
                this.clases1.push(nodos1[i]);
            }
        }
        for(let i = 0; i < nodos2.length; i ++)
        {
            if (nodos2[i] instanceof clase)
            {
                clase2 = true;
                this.clases2.push(nodos2[i]);
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

    public setearFM(nodos1 : Array<nodoAST>, nodos2 : Array<nodoAST>): boolean {

        this.fm1 = new Array<nodoAST>();
        this.fm2 = new Array<nodoAST>();
        //Se insertan las clases 
        let bfm1 : boolean = false;
        let bfm2 : boolean = false;
        if ((nodos1 != null) && (nodos2 != null))
        {
            for(let i = 0; i < nodos1.length; i ++)
            {
                if (nodos1[i] instanceof funcion)
                {
                    let func = nodos1[i] as funcion;
                    if (func.parametros != null)
                    {
                        bfm1 = true;
                        this.fm1.push(nodos1[i]);
                    }
                }
                else if (nodos1[i] instanceof metodo)
                {
                    let metod = nodos1[i] as metodo;
                    if (metod.parametros != null)
                    {
                        bfm1 = true;
                        this.fm1.push(nodos1[i]);
                    }
                }
            }
            for(let i = 0; i < nodos2.length; i ++)
            {
                if (nodos2[i] instanceof funcion)
                {
                    let func = nodos2[i] as funcion;
                    if (func.parametros != null)
                    {
                        bfm2 = true;
                        this.fm2.push(nodos2[i]);
                    }
                }
                else if (nodos2[i] instanceof metodo)
                {
                    let metod = nodos2[i] as metodo;
                    if (metod.parametros != null)
                    {
                        bfm2 = true;
                        this.fm2.push(nodos2[i]);
                    }
                }
            }
            if ((bfm1 == true) && (bfm2 == true))
            {
                return true;
            }
            else 
            {
                return false;
            }
        }
        else 
        {
            return false;
        }
    }


public getReporteClasesCopia(): string{
    return this.reporteClasesCopia;
}
public getReporteFMCopia(): string{
    return this.reporteFMCopia;
}
public getReporteVariablesCopia(): string{
    return this.reporteVariablesCopia;
}










}

export {comparador};