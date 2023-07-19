// Solicitar clave
// Si es correcta, decir clave correcta
// Sino volver a solicitar introducir la clave
// Si es correcta, decir clave correcta
// Sino volver a solicitar introducir la clave
// Si es correcta, decir clave correcta
// Sino decir clave incorrecta no quedan más oportunidades


var intentos =3;
function comparacion(){
    var compara= parseInt(document.getElementById("number").value);
    if(intentos>0){    
        if(compara != 123456){
            console.log("contraseña incorrecta");
            alert("No has introducido la clave correcta, vuelve a intentarlo");
        }
        else{
            console.log("contraseña correcta");
            document.write("Has introducido la clave correctamente" + "</br>");
        }
        intentos--;
    }
}

 comparacion()

