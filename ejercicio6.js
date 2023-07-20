// Solicitar clave
// Si es correcta, decir clave correcta
// Sino volver a solicitar introducir la clave
// Si es correcta, decir clave correcta
// Sino volver a solicitar introducir la clave
// Si es correcta, decir clave correcta
// Sino decir clave incorrecta no quedan más oportunidades


function comparacion(){
    console.log("Hola estás en la función")
    for (var i=0;i<3;i++) { 
        var compara = Number(prompt("Introduce la clave"));
        if(compara==123456){
            console.log("Estoy en el if")
            document.write("<h1>Has introducido la clave correctamente</h1>" + "</br>");
            break;
        }
        else{
            console.log("Estoy en el else")
        } 
    }
}

 comparacion();

