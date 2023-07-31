//Recogemos los elementos desde lso que vamos a recoger los datos
var formulario = document.querySelector('#formulario');
var boxInfo= document.querySelector('.info');

//Ocultamos el div donde se mostrarán después los datos
boxInfo.style.display="none";

formulario.addEventListener('submit', function(){
    //Recogemos los datos del formulario
    var nombre=document.querySelector('#nombre').value;
    var apellidos=document.querySelector('#apellidos').value;
    var edad=document.querySelector('#edad').value;

    //Comprobamos que nos recoge los datos
    console.log(nombre+" "+apellidos+" "+edad);

    //Validamos el campo nombre. Si está vacío da error
    if(nombre.trim()==null || nombre.trim()==""){
        document.querySelector('#errorNombre').innerHTML="Nombre no válido";
        document.querySelector('#errorNombre').style.color="red";
        return false
    }
    else{
        document.querySelector('#errorNombre').innerHTML="Nombre válido";
        document.querySelector('#errorNombre').style.color="green"
    }

    //Validamos el campo apellidos. Si está vacío da error
    if(apellidos.trim()==null || apellidos.trim()==""){
        document.querySelector('#errorApellidos').innerHTML="Apellido no válido";
        document.querySelector('#errorApellidos').style.color="red";
        return false
    }
    else{
        document.querySelector('#errorApellidos').innerHTML="Apellidos válido";
        document.querySelector('#errorApellidos').style.color="green"
    }

    //Validamos el campo edad. Si está vacío da error
    if(edad==null || edad<=0 || isNaN(edad)){
        document.querySelector('#errorEdad').innerHTML="Edad no válida";
        document.querySelector('#errorEdad').style.color="red";
        return false
    }
    else{
        document.querySelector('#errorEdad').innerHTML="Edad válida";
        document.querySelector('#errorEdad').style.color="green"
    }

    //Volvemos a mostrar el cuadro donde se mostrarán los datos introducidos
    boxInfo.style.display="block"

    var iNombre= document.querySelector('#iNombre');
    var iApellidos= document.querySelector('#iApellidos');
    var iEdad=document.querySelector('#iEdad');

    iNombre.innerHTML="Nombre: "+nombre;
    iApellidos.innerHTML="Apellidos: "+apellidos;
    iEdad.innerHTML="Edad: "+edad
})

