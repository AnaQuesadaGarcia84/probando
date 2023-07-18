// Solicitar clave
// Si es correcta decir clave correcta
// Sino volver a solicitar introducir la clave
// Si es correcta decir clave correcta
// Sino volver a solicitar introducir la clave
// Si es correcta decir clave correcta


var clave= 123456;

var compara= parseInt(prompt("Introduce la clave: "));



function comparacion(){
    for(var n= 1; n<= 2; n++){
        if(compara != clave){
            parseInt(prompt("No has introducido la clave correcta, vuelve a intentarlo"));
        }
        else{
            document.write("Has introducido la clave correctamente" + "</br>");
        }

    }
}

comparacion()