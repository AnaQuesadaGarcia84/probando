//JSON - JavaScript Object Notation
//Nos permite crear objetos de forma rápida

var alumno= {
    nombre:"Paco López",
    correo:"pacolo@gmail.com",
    telefono:"555 555 666"
}

// var alumno2={
//     nombre:"Juan García",
//     correo:"juangar@gmail.com",
//     telefono:"888 555 666"
// }

// alumno.nombre="Paco López Martínez";

// var alumnos=[alumno,alumno2];
// console.log(alumnos);

// var totalAlumnos= document.querySelector('#totalAlumnos');

// var indice;
// for(indice in alumnos){
//     var p=document.createElement("p");
//     p.append(alumnos[indice].nombre+" --- ");
//     p.append(alumnos[indice].correo+" --- ");
//     p.append(alumnos[indice].telefono);

//     totalAlumnos.append(p);
// }

//LocalStorage, almacenar en la memoria del navegador

//Comprobar la disponibilidad del LocalStorage
if(typeof(Storage)!== 'undefined'){
    console.log("Disponible");
}
else{
    console.log("No disponible");
}

// //Guardar datos
// localStorage.setItem('Listado', "Listado de Alumnos");

// //Recuperar datos
// localStorage.getItem('Listado');

// //Guardamos objetos JSON
// localStorage.setItem('alumno', JSON.stringify(alumno));

// //Recuperamos objetos JSON
// var alumnoJS=JSON.parse(localStorage.getItem("alumno"));
// console.log(alumnoJS)
// document.querySelector('#totalAlumnos').append(alumnoJS.nombre+" --- "+ alumnoJS.correo+" --- "+alumnoJS.telefono);

//Borrar un item por su palabra clave
//localStorage.removeItem('Listado');

//Para borrarlo todo
localStorage.clear();

