$(document).ready(function(){
    $("#profesor").click(function(){
        $(".cuerpo").css("background-image", "url('media/fondoprofesor.jpg')");
    })
    $("#alumno").click(function(){
        $(".cuerpo").css("background-image", "url('media/fondoalumnos.jpg')");
    })
})//Cierre del document ready