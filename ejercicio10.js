// Escribir “escribe el importe de la compra”
// Leer importe //Int
// Escribir “Introduce el mes”
// Leer mes // String
// //Si el mes es octubre, se aplicará el descuento
// Si (mes=”octubre”) Entonces
// total<-importe*0.85
// Sino
// total<-importe
// FinSi
// Escribir tota
// •	Enero y febrero un 20%.
// •	Julio y agosto un 15%.
// •	Noviembre y diciembre un 25%.
// •	Resto de meses precio sin descuento.


var importe= parseInt(prompt("Introduce el total de tu compra:"));
var mes= prompt("Introduce el mes de tu compra: ");

switch(mes){
    case "enero":
        document.write("Total de tu compra: "+importe * 0.80+ "€");
        break;
    case "febrero":
        document.write("Total de tu compra: "+importe * 0.80+ "€");
        break;
    case "julio":
        document.write("Total de tu compra: "+importe * 0.85+ "€");
        break;
    case "agosto":
        document.write("Total de tu compra: "+importe * 0.85+ "€");
        break;
    case "octubre":
        document.write("Total de tu compra: "+importe * 0.85+ "€");
        break;
    case "noviembre":
        document.write("Total de tu compra: "+importe * 0.75+ "€");
        break;
    case "diciembre":
        document.write("Total de tu compra: "+importe * 0.75+ "€");
        break;
    default:
        importe + "€";
}

// function descuento(){
//     if(mes.toLowerCase()=="octubre"){
//         console.log("Total de tu compra: "+importe * 0.85+ "€");
//         document.write("Total de tu compra: "+importe * 0.85+ "€");
//     }
//     else{
//         console.log("Total de tu compra: "+importe + "€");
//         document.write("Total de tu compra: "+importe + "€")
//     }
// }

// descuento();