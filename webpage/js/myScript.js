var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

var tabButtons1=document.querySelectorAll(".container .buttonContainer1 button");
var tabPanels1=document.querySelectorAll(".container  .tabPanel1");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#008C9E');

function showPanel1(panelIndex,colorCode) {
    tabButtons1.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons1[panelIndex].style.backgroundColor=colorCode;
    tabButtons1[panelIndex].style.color="white";
    tabPanels1.forEach(function(node){
        node.style.display="none";
    });
    tabPanels1[panelIndex].style.display="block";
    tabPanels1[panelIndex].style.backgroundColor=colorCode;
}
showPanel1(0,'#005F6B');


document.getElementById("openFile").addEventListener('change', function(){

    var fr = new FileReader();
    fr.onload = function (){
        document.getElementById("fileContents").textContent = this.result;
    }
    fr.readAsText(this.files[0]);
})


