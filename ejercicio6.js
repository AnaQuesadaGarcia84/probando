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
 
// for ( var i=0;i<=2;i++) { 
//    	document.write(i + "<br>")
// }

// var compara = parseInt(prompt("Introduce la clave"));
// if(compara==123456){
//     document.write("Has introducido la clave correctamente" + "</br>");
// }
// else{
//     parseInt(prompt("No has introducido la clave correcta, vuelve a intentarlo"));
// }

// var clave=123456 
// var clave2=parseInt(prompt("Introduce la clave"));
// if (clave == clave2){ 
//    document.write("Has introducido la clave correctamente");
// }
// else if (clave > clave2) { 
//     console.log("clave incorrecta 1")
//     parseInt(prompt("Introduce la clave")); 
// }
// else{ 
//     console.log("clave incorrecta 2")
//     parseInt(prompt("Introduce la clave"));
//     document.write("Clave incorrecta")
// } 

// function compara(){
//     var clave2=parseInt(prompt("Introduce la clave"));
//     if (clave == clave2){ 
//     document.write("Has introducido la clave correctamente");
//     }
//     else if (clave > clave2) { 
//         console.log("clave incorrecta 1")
//         parseInt(prompt("Introduce la clave")); 
//     }
//     else{ 
//         console.log("clave incorrecta 2")
//         parseInt(prompt("Introduce la clave"));
//         document.write("Clave incorrecta")
//     } 
// }


// var compara= parseInt(prompt("Introduce la contraseña: "));
// function comparacion(){
//     if(compara==123456){
//         document.write("Has introducido la clave correctamente" + "</br>");
//         console.log("Has introducido la clave correctamente");
//     }
//     else if(compara!=123456){
//         parseInt(prompt("Introduce la contraseña: "));
//     }
//     else{
//         document.write("No has introducido la clave correctamente" + "</br>");
//         console.log("No has introducido la clave correctamente");
//     }
// }
