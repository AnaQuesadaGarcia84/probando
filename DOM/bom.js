//BOM - Browser Object Model para controlar eventos desde el navegador

// console.log("Ancho ventana: "+window.innerWidth);
// console.log("Alto ventana: "+window.innerHeight);

// console.log("Ancho pantalla: "+screen.width);
// console.log("Alto pantalla: "+screen.height);

// //Para ver la web en la que estás
// console.log(window.location);

// //Función para cambiar de web
// function redirect(){
//     window.location.href="https://www.canarias7.es/";
// }

// function ventanaNueva(url){
//     //window.open(url);
//     window.open(url,"","width=400", "height=200" )
// }

//De esta manera podemos poner el script en el head
window.addEventListener('load',() =>{
    function cambiarColor(){
        if(boton.style.background=="green"){
            boton.style.background="red"
        }
        else{
            boton.style.background="green"
        }
    }

    //Cambiamos el color de fondo del botón
    var boton= document.querySelector('#boton2');
    boton.addEventListener('click', function(){
        cambiarColor();
        this.style.border="5px solid black";
    })

    //Detectamos si has pulsado dentro del input
    var input = document.querySelector('#nombre');
    input.addEventListener('focus', function(){
        console.log("Estas dentro del input");
    })

    //Detectamos si has pulsado fuera del input
    input.addEventListener('blur', function(){
        console.log("Estas fuera del input");
    })

    //Detectamos que tecla has pulsado en el teclado
    input.addEventListener('keydown', function(event){
        console.log("Has pulsado la tecla: "+String.fromCharCode(event.keyCode));
    })

    //Detectamos que tecla has pulsado del teclado y si es mayúcula o minúcula
    input.addEventListener('keypress', function(event){
        console.log("Has presionado la tecla: "+String.fromCharCode(event.keyCode));
    })


})//Cierre del window.addEventListener

