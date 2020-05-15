/*
 SERVIDOR NODE JS con uso de EXPRESS
*/

//Importaciones para usar en el analizador
const analizador = require("./analisis").parser;

//Variables para guardar los archivos de entrada y analizarlos
var entrada1 = "";
var entrada2 = "";
var reporte_Ast;

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
    console.log("Se obtuvo: " + json.data + "\n" + "----------------------\n");
    entrada1 = json.archivoPrincipal.toString();
    console.log(entrada1);
    entrada2 = json.archivoSecundario.toString();
    console.log(entrada2);

    analizar(entrada1, entrada2);
    response.json({
        reporteAST: reporte_Ast  
    })
})

//Flujo para parsear los archivos de entrada y comparar similitudes
function analizar (entrada1, entrada2){ 
    let response1 = analizador.parse(entrada1);
    let response2 = analizador.parse(entrada2);
    response1.recorrer(response1.getNodos());
    reporte_Ast = response1.getReporteAst();
    reporte_Ast += "</ul>";
    console.log(reporte_Ast);
}