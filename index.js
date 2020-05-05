/*
 SERVIDOR NODE JS con uso de EXPRESS
*/

//Importaciones para usar en el analizador
const analizador = require("./analisis").parser;
//Variables para guardar los archivos de entrada y analizarlos
var entrada1 = "";

//Configuracion para levantar el servidor NODEJS usando express
const express = require('express');
const app = express();
const cors = require("cors")
app.listen(3000, () => console.log('Server NODE JS listening on 3000'));
app.use(cors())
app.use(express.static('public'));
app.use(express.json());

//Metodo POST para recibir datos desde el index.html corriendo en el servidor de GO
app.post('/api', (request,response) => {
    console.log('Se recibio informacion desde puerto servidor GO(5000)');
    //console.log(request.body);
    let json = request.body;
    console.log("Se obtuvo: " + json.data);
    entrada1 = json.data.toString();
    analizar(entrada1);
    response.json({
        reporte1: 'SOY EL REPORTE1'  
    })
})

//Flujo para parsear los archivos de entrada y comparar similitudes
function analizar (entrada1){ 
    let response1 = analizador.parse(entrada1);
    let ast1 = response1.recorrer();
}