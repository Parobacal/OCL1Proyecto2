/*
 SERVIDOR NODE JS con uso de EXPRESS
*/

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
    console.log(request.body);
})