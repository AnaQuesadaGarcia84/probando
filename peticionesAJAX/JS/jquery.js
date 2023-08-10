$(document).ready(function(){
   //Para recoger los datos petición AJAX
    $.get('https://reqres.in/api/users'),{page:2},function(respuesta){
        respuesta.data.forEach((element, index)=>{
            
        })
   }
});//Cierre del READY FUNCTION