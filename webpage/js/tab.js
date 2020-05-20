//const { json } = require("express");

var contador=0;

var cont = 0;
let contenido1 = "";
let contenido2 = "";

var ASThtml;
function get_cont(){
    return contador++;
}

var vent_focus="pestana1";
function get_vent(){
    return vent_focus;
}

function set_vent(vent){
    vent_focus=vent;
}

var lista=new Array();
function linkedlist(pestana,nombre) {
    var obj=new Object();
    obj.pestana=pestana;
    obj.nombre=nombre;
    lista.push(obj);
}

function deletepes(pestana){
    for(var i=0;i<lista.length;i++){
        if(lista[i].pestana==pestana){
            delete lista[i];
        }
    }
}

/*--------------------------------------Funcion Al Cambiar Ventana---------------------------------------*/
function index(pestanias, pestania) {
    var id=pestania.replace('pestana','');
    set_vent('textarea'+id);

    var pestanna1 = document.getElementById(pestania);
    var listaPestannas = document.getElementById(pestanias);
    var cpestanna = document.getElementById('c'+pestania);
    var listacPestannas = document.getElementById('contenido'+pestanias);

    var i=0;
    while (typeof listacPestannas.getElementsByTagName('div')[i] != 'undefined'){
        $(document).ready(function(){
            $(listacPestannas.getElementsByTagName('div')[i]).css('display','none');
            $(listaPestannas.getElementsByTagName('li')[i]).css('background','');
            $(listaPestannas.getElementsByTagName('li')[i]).css('padding-bottom','');
        });
        i += 1;
    }

    $(document).ready(function(){
        $(cpestanna).css('display','');
        $(pestanna1).css('background','dimgray');
        $(pestanna1).css('padding-bottom','2px');
    });

    try {
        var act=document.getElementById('cpestana'+id);
        var tact=document.getElementById('textarea'+id);

        while (act.firstChild) {
            act.removeChild(act.firstChild);
        }

        act.appendChild(tact);
        var editor=CodeMirror(act, {
            lineNumbers: true,
            value: tact.value,
            matchBrackets: true,
            styleActiveLine: true,
            theme: "eclipse",
            mode: "text/x-java"
        }).on('change', editor => {
            tact.value=editor.getValue();
        });
    }catch(error) {}
}

/*---------------------------------------Funcion Agregar Pestania----------------------------------------*/
function agregar() {
    var x=get_cont();
    var lu=document.getElementById("lista");
    var li=document.createElement("li");
    li.setAttribute('id','pestana'+x);
    var a=document.createElement("a");
    a.setAttribute('id','a'+x);
    a.setAttribute('href', 'javascript:index("pestanas","pestana'+x+'")');
    a.text='pestana'+x;
    li.appendChild(a);
    lu.appendChild(li);
    index("pestanas","pestana"+x);

    var contenido=document.getElementById("contenidopestanas");
    var divp=document.createElement("div");
    divp.setAttribute('id','cpestana'+x);
    var ta=document.createElement("textarea");
    ta.setAttribute('id','textarea'+x);
    ta.setAttribute('name','textarea'+x);
    ta.setAttribute('class','ta');
    ta.setAttribute('style','display:none');
    ta.cols=123;
    ta.rows=30;
    divp.appendChild(ta);
    contenido.appendChild(divp);

    var act=document.getElementById('cpestana'+x);
    var tact=document.getElementById('textarea'+x);
    var editor=CodeMirror(act, {
        lineNumbers: true,
        value: tact.value,
        matchBrackets: true,
        styleActiveLine: true,
        theme: "eclipse",
        mode: "text/x-java"
    }).on('change', editor => {
        tact.value=editor.getValue();
    });
}

function quitar(){
    try{
        var lu=document.getElementById("lista");
        lu.removeChild(document.getElementById(get_vent().replace("textarea","pestana")));
        var contenido=document.getElementById("contenidopestanas");
        contenido.removeChild(document.getElementById(get_vent().replace("textarea","cpestana")));
        deletepes(get_vent());
    }catch(error){}
}


/*-----------------------------------------------File---------------------------------------------------*/
function AbrirArchivo(files){
    var file = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var act=document.getElementById(get_vent().replace("textarea","cpestana"));
        var tact=document.getElementById(get_vent());
        tact.value = e.target.result;

        while (act.firstChild) {
            act.removeChild(act.firstChild);
        }

        act.appendChild(tact);
        var editor=CodeMirror(act, {
            lineNumbers: true,
            value: tact.value,
            matchBrackets: true,
            styleActiveLine: true,
            theme: "eclipse",
            mode: "text/x-java"
        }).on('change', editor => {
            tact.value=editor.getValue();
        });
    };
    reader.readAsText(file);
    file.clear;

    var a=document.getElementById(get_vent().replace("textarea","a"));
    a.text=file.name;
    linkedlist(get_vent(),file.name);

    var file_input=document.getElementById("fileInput");
    document.getElementById('fileInput').value="";
}

function DescargarArchivo(){
    var ta=document.getElementById(get_vent());
    var contenido=ta.value;//texto de vent actual

    //formato para guardar el archivo
    var hoy=new Date();
    var dd=hoy.getDate();
    var mm=hoy.getMonth()+1;
    var yyyy=hoy.getFullYear();
    var HH=hoy.getHours();
    var MM=hoy.getMinutes();
    var formato=get_vent().replace("textarea","")+"_"+dd+"_"+mm+"_"+yyyy+"_"+HH+"_"+MM;

    var nombre="Archivo"+formato+".coline";//nombre del archivo
    var file=new Blob([contenido], {type: 'text/plain'});

    if(window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(file, nombre);
    }else{
        var a=document.createElement("a"),url=URL.createObjectURL(file);
        a.href=url;
        a.download=nombre;
        document.body.appendChild(a);
        a.click();
        setTimeout(function(){
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        },0); 
    }
}

function obtenerArchivos(){
    if (cont != 1)
    {
        cont++;
        var ta=document.getElementById(get_vent());
        contenido1=ta.value;//texto de vent actual
        console.log("Se guardo el archivo 1");

    }
    else 
    {
        cont = 0;
        var ta=document.getElementById(get_vent());
        contenido2=ta.value;//texto de vent actual
        console.log("Se guardo el archivo 2");
    }
}

function enviar(){

    console.log('Enviando desde servidor GO (:5000)');
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            archivoPrincipal: contenido1,
            archivoSecundario: contenido2
        })
    };
    fetch('http://localhost:3000/api', options).then(res => {
        return res.json();
    })
    .then(rep => { 
        console.log(rep.reporteAST);
        console.log(rep.reporteC);
        console.log(rep.reporteCC);
        console.log(rep.reporteFMC);
        console.log(rep.reporteVC);
        console.log(rep.reporteE);
        ASThtml = rep.reporteAST;
        generarReporteAST();
        generarReporteCC(rep.reporteCC);
        generarReporteFMC(rep.reporteFMC);
        generarReporteVC(rep.reporteVC);
        generarReporteE(rep.reporteE);
        document.getElementById("fileContents1").textContent = rep.reporteC
        document.getElementById("fileContents2").textContent = rep.reporteE
    })
    .catch(error => console.log('ERROR'))
}

function generarReporteAST(){

    var cadena = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>REPORTE AST - Proyecto2</title><style>html { margin:0; padding:0; font-size:62.5%; }body { max-width:800px; min-width:300px; margin:0 auto; padding:20px 10px; font-size:14px; font-size:1.4em; }h1 { font-size:1.8em; }.demo { overflow:auto; border:1px solid silver; min-height:100px; }</style><link rel=\"stylesheet\" href=\"./../../dist/themes/default/style.min.css\" /></head><body><h1>Reporte AST</h1><div id=\"html\" class=\"demo\">";
    cadena += ASThtml;
    cadena += "</div><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script><script src=\"./../../dist/jstree.min.js\"></script><script>$('#html').jstree();</script></body></html>";
    let s = cadena;
    ASThtml = "";
    let bl = new Blob([s], {type: "text/plain"});
    let dc = document.createElement("a");
    dc.download = "ReporteAST.html";
    window.URL = window.URL || window.webkitURL;
    dc.href = window.URL.createObjectURL(bl);
    dc.style.display = "none";
    document.body.appendChild(dc);
    dc.click();
}

function generarReporteCC(reporte_CC){

    let s = reporte_CC;
    let bl = new Blob([s], {type: "text/plain"});
    let dc = document.createElement("a");
    dc.download = "ReporteCC.html";
    window.URL = window.URL || window.webkitURL;
    dc.href = window.URL.createObjectURL(bl);
    dc.style.display = "none";
    document.body.appendChild(dc);
    dc.click();
}

function generarReporteFMC(reporte_FMC){

    let s = reporte_FMC;
    let bl = new Blob([s], {type: "text/plain"});
    let dc = document.createElement("a");
    dc.download = "ReporteFMC.html";
    window.URL = window.URL || window.webkitURL;
    dc.href = window.URL.createObjectURL(bl);
    dc.style.display = "none";
    document.body.appendChild(dc);
    dc.click();
}

function generarReporteVC(reporte_VC){

    let s = reporte_VC;
    let bl = new Blob([s], {type: "text/plain"});
    let dc = document.createElement("a");
    dc.download = "ReporteVC.html";
    window.URL = window.URL || window.webkitURL;
    dc.href = window.URL.createObjectURL(bl);
    dc.style.display = "none";
    document.body.appendChild(dc);
    dc.click();
}

function generarReporteE(CarrayErrorLS){

    let s = CarrayErrorLS;
    let bl = new Blob([s], {type: "text/plain"});
    let dc = document.createElement("a");
    dc.download = "ReporteE.html";
    window.URL = window.URL || window.webkitURL;
    dc.href = window.URL.createObjectURL(bl);
    dc.style.display = "none";
    document.body.appendChild(dc);
    dc.click();
}
