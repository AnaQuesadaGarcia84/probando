$(document).ready(function(){
    //Añadir contenido desde el exterior
    // $('#datos').load('https://reqres.in/')

   //Para recoger los datos petición AJAX
    $.get('https://reqres.in/api/users',{page:2},function(respuesta){
        respuesta.data.forEach((element, index)=>{
            $('#datos').append('<p>'+element.first_name+" "+ element.last_name+'</p>');
        });
    });

    //Para enviar los datos desde AJAX
    $('#formulario').submit(function(e){
        e.preventDefault();
        var usuario={
            nombre: $('input[name="nombre"]').val(),
            web: $('input[name="web"]').val(),
        };

        //Método POST
        // $.post($(this).attr("action"), usuario, function(respuesta){
        //     console.log(respuesta);
        // }).done(function(){
        //     alert('Usuario añadido correctamente');
        // });

        //Método AJAX
        $.ajax({
            type: 'POST',
            url:$(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...")
            },
            success:function(respuesta){
                console.log(respuesta);
            },
            error:function(){
                console.log("Ha habido un error durante el registro")
            },
            timeout:1000
        })

    });



});//Cierre del READY FUNCTION