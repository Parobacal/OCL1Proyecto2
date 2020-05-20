/*
 SERVIDOR NODE JS con uso de EXPRESS
*/

//Importaciones para usar en el analizador
const analizador = require("./analisis").parser;
const comparador = require("./src/Funcion/comparador");

//Variables para guardar los archivos de entrada y analizarlos
var entrada1 = "";
var entrada2 = "";
//Variables para devolver los reportes realizados
var reporte_Ast;
var reporte_C;
var reporte_CC;
var reporte_FMC;
var reporte_VC;

//Configuracion para levantar el servidor NODEJS usando express
const express = require('express');
const app = express();
const cors = require("cors")
var path = require('path');
app.listen(3000, () => console.log('Server NODE JS listening on 3000'));
app.use(cors())
app.use(express.static('public'));
app.use(express.json());

//Metodo POST para recibir datos desde el index.html corriendo en el servidor de GO
app.post('/api', (request,response) => {
    console.log('Se recibio informacion desde puerto servidor GO(5000)');
    //console.log(request.body);
    let json = request.body;
    //console.log("Se obtuvo: " + json.data + "\n" + "----------------------\n");
    entrada1 = json.archivoPrincipal.toString();
    //console.log(entrada1);
    entrada2 = json.archivoSecundario.toString();
    //console.log(entrada2);

    analizar(entrada1, entrada2);
    response.json({

        reporteAST: reporte_Ast,
        reporteC : reporte_C,
        reporteCC : reporte_CC,
        reporteFMC : reporte_FMC,
        reporteVC : reporte_VC,
        reporteE : CarrayErrorLS.getErrores()

    })
})

//Flujo para parsear los archivos de entrada y comparar similitudes
function analizar (entrada1, entrada2){ 
    let response1 = analizador.parse(entrada1);
    console.log(CarrayErrorLS.getErrores());
    let response2 = analizador.parse(entrada2);
    response1.recorrer(response1.getNodos());
    reporte_Ast = response1.getReporteAst();
    reporte_Ast += "</ul>";
    let compare = new comparador.comparador();
    if (compare.comparar(response1.getNodos(),response2.getNodos()) == true)
    {
        reporte_C = "SI EXISTE COPIA ENTRE LOS ARCHIVOS";
        reporte_CC = compare.getReporteClasesCopia();
        reporte_FMC = compare.getReporteFMCopia();
        reporte_VC = compare.getReporteVariablesCopia();
    }
    else 
    {
        reporte_C = "NO EXISTE COPIA ENTRE LOS ARCHIVOS";
    }
}