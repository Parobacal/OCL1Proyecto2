import {nodoAST} from "./nodoAST";
import {instruccion} from "../definiciones/instruccion";
import {clase} from "../instrucciones/clase";
import {identificador} from "../expresiones/identificador";
import { importar } from "../instrucciones/importar";
import { imprimir } from "../instrucciones/imprimir";
import { expresion } from "../definiciones/expresion";
import { primitivo } from "../expresiones/primitivo";
import { aritmeticoUnario} from "../expresiones/aritmeticoUnario";
import { logicaUnario} from "../expresiones/logicaUnario";
import { aritmetico} from "../expresiones/aritmetico";
import { relacional } from "../expresiones/relacional";
import { logica } from "../expresiones/logica";
import { declaracion } from "../instrucciones/declaracion";
import { llamada } from "../instrucciones/llamada";
import { asignacion } from "../instrucciones/asignacion";


class arbolAST{

    public nodos : Array<nodoAST>;
    public reporteAST : string;

    constructor(nodos_ : Array<nodoAST>){
        this.nodos = nodos_;
        this.reporteAST = "<ul><li data-jstree='{\"opened\" : true}'>RAIZ";
    }

    public recorrer(node : Array<nodoAST>):void {

        for (let i = 0; i < node.length; i ++)
        {
            console.log(node[i]);
            if (node[i] instanceof clase)
            {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CLASE";
                let obj = node[i] as clase;
                //console.log(obj.tipo);
                let obj2 = obj.valor as identificador;
                this.expresion(obj2);
                //console.log(obj2.tipo);
                //console.log(obj2.valor);
                //console.log(obj.instrucciones.length);
                this.recorrer(obj.instrucciones);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>"; 
                this.reporteAST += "</ul>";          
            }
            else if (node[i] instanceof importar)
            {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IMPORTAR";
                let obj = node[i] as importar;
                //console.log(obj.tipo);
                let obj2 = obj.valor as identificador;
                this.expresion(obj2);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                //console.log(obj2.tipo);
                //console.log(obj2.valor);
            }
            else if (node[i] instanceof imprimir)
            {
                //console.log(node[i]);
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IMPRIMIR";
                let obj = node[i] as imprimir;
                this.expresion(obj.valor);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof declaracion)
            {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>DECLARACION";
                let obj = node[i] as declaracion;
                //console.log(obj);
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>TIPO";
                this.reporteAST += "<ul><li>Tipo:" + obj.tipo + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                //console.log(obj.valor);
                if (obj.valor != null)
                {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>VALOR";
                    this.expresion(obj.valor);  
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                for (let i = 0; i < obj.lista_identificadores.length; i ++)
                {
                    let obj3 = obj.lista_identificadores[i] as identificador;
                    this.expresion(obj3);
                }
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>"; 
                this.reporteAST += "</ul>";
            }
            else if (node[i] instanceof llamada)
            {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>LLAMADA";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>FUNCION O METODO";
                let obj = node[i] as llamada;
                this.expresion(obj.nombre);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                if (obj.lista_parametros != null)
                {
                    for (let i = 0; i < obj.lista_parametros.length; i ++)
                    {
                        let obj3 = obj.lista_parametros[i];
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PARAMETRO";
                        this.expresion(obj3);
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                }
                
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>"; 
                this.reporteAST += "</ul>";

            }
            else if (node[i] instanceof asignacion)
            {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>ASIGNACION";
                let obj = node[i] as asignacion;
                this.expresion(obj.identificador);
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>VALOR";
                this.expresion(obj.valor);
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";      
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>"; 
                this.reporteAST += "</ul>";
            }    
        }
        console.log("\n----------------------");
    }



    public concatenacion(obj: object):void{
        if (obj instanceof aritmetico)
        {
            let obj2 = obj;
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION ARITMETICA";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR IZQUIERDO";
            let obj3 = obj2.OI;
            this.expresion(obj3);
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            let obj4 = obj2.OD;
            this.expresion(obj4);
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }

        else if (obj instanceof relacional)
        {
            let obj2 = obj as relacional;
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION RELACIONAL";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR IZQUIERDO";
            let obj3 = obj2.OI;
            this.expresion(obj3);
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            let obj4 = obj2.OD;
            this.expresion(obj4);
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof logica)
        {
            let obj2 = obj as logica;
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION LOGICA";

            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR IZQUIERDO";
            let obj3 = obj2.OI;
            this.expresion(obj3);
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            let obj4 = obj2.OD;
            this.expresion(obj4);
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else
        {
            this.expresion(obj);
        }
    }


    public expresion(obj : object):void{
        if (obj instanceof identificador)
        {
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
            this.reporteAST += "<ul><li>Tipo:" + obj.tipo + "</li>";
            this.reporteAST += "<li>Valor:" + obj.valor + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof primitivo)
        {
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
            this.reporteAST += "<ul><li>Tipo:" + obj.tipo + "</li>";
            this.reporteAST += "<li>Valor:" + obj.valor + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof logicaUnario)
        {

            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION LOGICA";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
            this.expresion(obj.OP);
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof aritmeticoUnario)
        {
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION ARITMETICA";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
            this.expresion(obj.OP);
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof llamada)
        {
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>LLAMADA";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>FUNCION O METODO";
            let obj2 = obj as llamada;
            this.expresion(obj2.nombre);
            this.reporteAST += "</li></ul>";
            //console.log(obj.nombre);
            if (obj2.lista_parametros != null)
            {
                for (let i = 0; i < obj2.lista_parametros.length; i ++)
                {
                    let obj3 = obj2.lista_parametros[i];
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PARAMETRO";
                    this.expresion(obj3);
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
            }
            
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>"; 
            this.reporteAST += "</ul>";

        }           
        else if ((obj instanceof aritmetico) || (obj instanceof relacional) || (obj instanceof logica))
        {
            this.concatenacion(obj);
        }

    }














    public getNodos(): Array<nodoAST>{
        return this.nodos;
    }

    public getReporteAst(): string{
        return this.reporteAST;
    }




}

export {arbolAST};