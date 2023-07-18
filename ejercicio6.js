// Solicitar clave
// Si es correcta decir clave correcta
// Sino volver a solicitar introducir la clave
// Si es correcta decir clave correcta
// Sino volver a solicitar introducir la clave
// Si es correcta decir clave correcta
// Sino decir clave incorrecta no quedan más oportunidades







function comparacion(){
    var compara= parseInt(prompt("Introduce la clave: "));
    for(var n= 3; n>0; n--){
        
        if(compara == 123456){
            document.write("Has introducido la clave correctamente" + "</br>");
        }
        else if(compara != 123456){
            parseInt(prompt("No has introducido la clave correcta, vuelve a intentarlo"));
        }
        else{
            document.write("Te has quedado sin intentos")
        }

    }
}

comparacion()