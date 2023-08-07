$(document).ready(function(){
    //Seleccionanado por el ID
    var rojo=$('#rojo');
    rojo.css("background-color", "red")
    .css("color","white").css("padding", "0.5em");

    var amarillo=$('#amarillo')
    amarillo.css("background-color", "yellow")
    .css("color","black").css("padding", "0.5em");

    $('#verde').css("background-color", "green")
    .css("color","white").css("padding", "0.5em");

    //Añadir clase desde JQUERY
    rojo.addClass('recuadro')

    //Quitar clase desde JQUERY
    amarillo.removeClass('recuadro');

    //Seleccionando por la CLASE
    const elemento=$('.recuadro');
    
    elemento.css("border", "2px solid black")
    .css("font-size","1.5em");

    //Seleccionar por un atibuto
    $('[title="Google"]').css('color', 'red');
    


});//Cierre del ready function