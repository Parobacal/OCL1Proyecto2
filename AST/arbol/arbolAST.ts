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
            //console.log(node[i]);
            if (node[i] instanceof clase)
            {
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>CLASE";
                let obj = node[i] as clase;
                console.log(obj.tipo);
                let obj2 = obj.valor as identificador;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                console.log(obj2.tipo);
                console.log(obj2.valor);
                console.log(obj.instrucciones.length);
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
                console.log(obj.tipo);
                let obj2 = obj.valor as identificador;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                console.log(obj2.tipo);
                console.log(obj2.valor);
            }
            else if (node[i] instanceof imprimir)
            {
                console.log(node[i]);
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>INSTRUCCION";
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IMPRIMIR";
                let obj = node[i] as imprimir;
                if (obj.valor instanceof identificador)
                {
                    let obj2 = obj.valor as identificador;
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                    this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                    this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                    this.reporteAST += "</ul>";
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                else if (obj.valor instanceof primitivo)
                {
                    let obj2 = obj.valor as primitivo;
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                    this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                    this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                    this.reporteAST += "</ul>";
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                else if (obj.valor instanceof logicaUnario)
                {
                    let obj2 = obj.valor as logicaUnario;
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION LOGICA";
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
                    if (obj2.OP instanceof identificador)
                    {
                        let obj3 = obj2.OP as identificador;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                        this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                        this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    else if (obj2.OP instanceof primitivo)
                    {
                        let obj3 = obj2.OP as primitivo;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                        this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                        this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                    this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
                    this.reporteAST += "</ul>";
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                else if (obj.valor instanceof aritmeticoUnario)
                {
                    let obj2 = obj.valor as aritmeticoUnario;
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION ARITMETICA";
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
                    if (obj2.OP instanceof identificador)
                    {
                        let obj3 = obj2.OP as identificador;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                        this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                        this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    else if (obj2.OP instanceof primitivo)
                    {
                        let obj3 = obj2.OP as primitivo;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                        this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                        this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                    this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
                    this.reporteAST += "</ul>";
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                else if ((obj.valor instanceof aritmetico) || (obj.valor instanceof relacional) || (obj.valor instanceof logica))
                {
                    this.concatenacion(obj.valor);
                }
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
                console.log(obj);
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>TIPO";
                this.reporteAST += "<ul><li>Tipo:" + obj.tipo + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
                console.log(obj.valor);
                if (obj.valor != null)
                {
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>VALOR";
                    if (obj.valor instanceof identificador)
                    {
                        let obj2 = obj.valor as identificador;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                        this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                        this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    else if (obj.valor instanceof primitivo)
                    {
                        let obj2 = obj.valor as primitivo;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                        this.reporteAST += "<ul><li>Tipo:" + obj2.tipo + "</li>";
                        this.reporteAST += "<li>Valor:" + obj2.valor + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    else if (obj.valor instanceof logicaUnario)
                    {
                        let obj2 = obj.valor as logicaUnario;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION LOGICA";
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
                        if (obj2.OP instanceof identificador)
                        {
                            let obj3 = obj2.OP as identificador;
                            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                            this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                            this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                            this.reporteAST += "</ul>";
                            this.reporteAST += "</li>";
                            this.reporteAST += "</ul>";
                        }
                        else if (obj2.OP instanceof primitivo)
                        {
                            let obj3 = obj2.OP as primitivo;
                            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                            this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                            this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                            this.reporteAST += "</ul>";
                            this.reporteAST += "</li>";
                            this.reporteAST += "</ul>";
                        }
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    else if (obj.valor instanceof aritmeticoUnario)
                    {
                        let obj2 = obj.valor as aritmeticoUnario;
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION ARITMETICA";
                        this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
                        if (obj2.OP instanceof identificador)
                        {
                            let obj3 = obj2.OP as identificador;
                            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                            this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                            this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                            this.reporteAST += "</ul>";
                            this.reporteAST += "</li>";
                            this.reporteAST += "</ul>";
                        }
                        else if (obj2.OP instanceof primitivo)
                        {
                            let obj3 = obj2.OP as primitivo;
                            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                            this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                            this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                            this.reporteAST += "</ul>";
                            this.reporteAST += "</li>";
                            this.reporteAST += "</ul>";
                        }
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
                        this.reporteAST += "</ul>";
                        this.reporteAST += "</li>";
                        this.reporteAST += "</ul>";
                    }
                    
                    else if ((obj.valor instanceof aritmetico) || (obj.valor instanceof relacional) || (obj.valor instanceof logica))
                    {
                        console.log("SI ENTRE")
                        this.concatenacion(obj.valor);
                    }
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
                for (let i = 0; i < obj.lista_identificadores.length; i ++)
                {
                    let obj3 = obj.lista_identificadores[i] as identificador;
                    this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                    this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                    this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                    this.reporteAST += "</ul>";
                    this.reporteAST += "</li>";
                    this.reporteAST += "</ul>";
                }
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
            if ((obj2.OI instanceof aritmetico) || (obj2.OI instanceof relacional) || (obj2.OI instanceof logica))
            {
                console.log("SI ENTRE A LOS ARITMETICOS Y ESO");
                let obj3 = obj2.OI;
                this.concatenacion(obj3);
            }
            else if (obj2.OI instanceof identificador)
            {
                console.log("SI ENTRE AL IDENTIFICADOR ");
                let obj3 = obj2.OI as identificador;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OI instanceof primitivo)
            {
                console.log("SI ENTRE AL PRIMITIVO");
                let obj3 = obj2.OI as primitivo;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            if ((obj2.OD instanceof aritmetico) || (obj2.OD instanceof relacional) || (obj2.OD instanceof logica))
            {
                let obj3 = obj2.OD;
                this.concatenacion(obj3);
            }
            else if (obj2.OD instanceof identificador)
            {
                let obj3 = obj2.OD as identificador;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OD instanceof primitivo)
            {
                let obj3 = obj2.OD as primitivo;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
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
            if ((obj2.OI instanceof aritmetico) || (obj2.OI instanceof relacional) || (obj2.OI instanceof logica))
            {
                let obj3 = obj2.OI;
                this.concatenacion(obj3);
            }
            else if (obj2.OI instanceof identificador)
            {
                let obj3 = obj2.OI as identificador;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OI instanceof primitivo)
            {
                let obj3 = obj2.OI as primitivo;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            if ((obj2.OD instanceof aritmetico) || (obj2.OD instanceof relacional) || (obj2.OD instanceof logica))
            {
                let obj3 = obj2.OD;
                this.concatenacion(obj3);
            }
            else if (obj2.OD instanceof identificador)
            {
                let obj3 = obj2.OD as identificador;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OD instanceof primitivo)
            {
                let obj3 = obj2.OD as primitivo;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
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
            if ((obj2.OI instanceof aritmetico) || (obj2.OI instanceof relacional) || (obj2.OI instanceof logica))
            {
                let obj3 = obj2.OI;
                this.concatenacion(obj3);
            }
            else if (obj2.OI instanceof identificador)
            {
                let obj3 = obj2.OI as identificador;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OI instanceof primitivo)
            {
                let obj3 = obj2.OI as primitivo;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR DERECHO";
            if ((obj2.OD instanceof aritmetico) || (obj2.OD instanceof relacional) || (obj2.OD instanceof logica))
            {
                let obj3 = obj2.OD;
                this.concatenacion(obj3);
            }
            else if (obj2.OD instanceof identificador)
            {
                let obj3 = obj2.OD as identificador;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OD instanceof primitivo)
            {
                let obj3 = obj2.OD as primitivo;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof logicaUnario)
        {
            let obj2 = obj as logicaUnario;
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION LOGICA";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
            if (obj2.OP instanceof identificador)
            {
                let obj3 = obj2.OP as identificador;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OP instanceof primitivo)
            {
                let obj3 = obj2.OP as primitivo;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
        }
        else if (obj instanceof aritmeticoUnario)
        {
            let obj2 = obj as aritmeticoUnario;
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERACION ARITMETICA";
            this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>OPERADOR UNICO";
            if (obj2.OP instanceof identificador)
            {
                let obj3 = obj2.OP as identificador;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>IDENTIFICADOR";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            else if (obj2.OP instanceof primitivo)
            {
                let obj3 = obj2.OP as primitivo;
                this.reporteAST += "<ul><li data-jstree='{\"opened\" : true}'>PRIMITIVO";
                this.reporteAST += "<ul><li>Tipo:" + obj3.tipo + "</li>";
                this.reporteAST += "<li>Valor:" + obj3.valor + "</li>";
                this.reporteAST += "</ul>";
                this.reporteAST += "</li>";
                this.reporteAST += "</ul>";
            }
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "<ul><li>OPERADOR:" + obj2.operador + "</li>";
            this.reporteAST += "</ul>";
            this.reporteAST += "</li>";
            this.reporteAST += "</ul>";
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