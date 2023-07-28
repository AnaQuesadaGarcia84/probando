//DOM - Document Object Model

//Seleccionamos por ID y cambiamos estilos
var contenedor=document.getElementById('contenedor');

contenedor.innerHTML="Contenido en el contenedor";
contenedor.style.background="blue";
contenedor.style.padding="20px";
contenedor.style.color="#ffffff";
//Añadimos una clase
contenedor.className="contenedor";

//Creamos función que cambia el color del fondo del elemento seleccionado por id
function cambiarColor(){
    contenedor.style.background="green"
}

//Forma más usada para buscar un elemento del DOM
//var contenedor=document.querySelector('#contenedor');

//Seleccionamos elementos por el nombre de la etiqueta
var elementos=document.getElementsByTagName('div');

var contenido_tres=elementos[2];
contenido_tres.innerHTML="Contenido Añadido";
contenido_tres.style.background="yellow";
contenido_tres.style.color="black"

var valor;

for(valor in elementos){
    console.log(elementos[valor]);
    if(typeof(elementos[valor].textContent)=='string'){
        //console.log(elementos[valor]);
        var parrafo=document.createElement("p");
        var texto= document.createTextNode(elementos[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#seccion1").append(parrafo);
        document.querySelector("#seccion1").style.background="teal"
        document.querySelector("#seccion1").style.color="#ffffff"
        document.querySelector("#seccion1").style.padding="0.5em"
    }
}

//Controlar contenido por clases
var divCaja=document.getElementsByClassName('caja');
var div;
for(div in divCaja){
    if(divCaja[div].className=="caja"){
        divCaja[div].style.color="blue";
    }
}
var solouno=document.querySelector("#soloUno");
console.log(solouno);

var varios=document.querySelectorAll('div');
console.log(varios);


