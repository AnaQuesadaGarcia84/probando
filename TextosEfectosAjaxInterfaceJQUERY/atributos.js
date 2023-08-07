$(document).ready(function(){
    //Añadir elementos a la lista del menú
    $('#add-button').click(function(){
        $('#menu').append('<li><a href="'+ $('#add-link').val()+'"></a></li>');
        $('#add-link').val('');
        reloadLinks();
    })

    //EACH recorre todos los elementos A
    function reloadLinks(){
        $('a').each(function(index){
            var esto=$(this);
            var enlace=esto.attr("href");
            esto.attr("target", "a_blank")
            esto.text(enlace);
            console.log(esto);
        })
    }

    //Crear animación
    $('#animar').click(function(){
        var caja=$('#contenedor');
        caja.animate({
            marginLeft:'400px',
            fontSize: '40px',
            height:'120px'
        }, 'slow')
        .animate({
            borderRadius: '10%',
            marginTop:'180px'
        }, 'fast')
    })

});//Cierre del ready function