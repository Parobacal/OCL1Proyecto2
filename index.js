const express = require('express');
const app = express();
const router = express.Router();

app.get('/', (req,res) => {
    res.send('HELLO world');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});

app.get('/envio', (req,res,next) =>{
    console.log("algo llego");
    console.log(req.body);
});