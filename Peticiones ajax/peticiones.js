//Método Fetch
//REalizar peticiones AJAX de una manera más simple de como se hacía antes

var divUsuario=document.querySelector('#usuarios');
var usuarios=[];

fetch('https://reqres.in/api/users?page=2')
.then(data=>data.json())//Promesa en javaScript para convertir los datos en JSon
.then(user=>{
    //Recogemos los datos de la base de datos
    usuarios=user.data;
    console.log(usuarios);

    //Recorremos el array de los usuarios
    usuarios.map((user,i)=>{
        let nombre= document.createElement('h3');
        nombre.innerHTML = (i+1) +" "+ user.first_name+ " "+user.last_name

        //Mostramos los usuarios en el HTML
        divUsuario.append(nombre);

        //Para que nos oculte lo de cargando usuarios una vez estén cargados
        document.querySelector('.loading').style.display="none";
    })
})//Promesa que está usando los datos recogidos desde el servidor y usarlos

//Para detectar errores en el código
// try{
//     var year= 2023;
//     alert(year);
// }
// catch(error){
//     console.log(error);
//     alert("Ha ocurrido un error")
// }


