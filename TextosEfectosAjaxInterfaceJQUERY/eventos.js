$(document).ready(function(){
    var contenedor=$('#contenedor');

    //Llamamos el evento con el MOUSEOVER y MOUSEOUT
    // contenedor.mouseover(function(){
    //     $(this).css('background', 'red')
    //     .css('padding', '0.5em');
    // });

    // contenedor.mouseout(function(){
    //     $(this).css('background', 'green')
    //     .css('padding', '0.8em');
    // });

    function cambiaRojo(){
        $(this).css('background', 'red')
        .css('padding', '0.5em');
    }

    function cambiaVerde(){
        $(this).css('background', 'green')
        .css('padding', '0.8em');
    }

    //Disparamos el evento con el HOVER
    contenedor.hover(cambiaRojo,cambiaVerde);

    //Convertimos el ratón en un círculo
    $(document).mousemove(function(){
        $('html').css("cursor","none")
        $('#sigueme').css('left', event.clientX)
        .css('top', event.clientY)
    });


});//Cierre del ready function