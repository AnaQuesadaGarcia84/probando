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

function descuento(){
    switch(mes.toLocaleLowerCase()){
        case "enero":
            document.write("<h3>Total de tu compra: "+importe+ "€ </h3>");
            document.write("<h1>Total de tu compra con descuento: "+importe * 0.80+ "€</h1>");
            break;
        case "febrero":
            document.write("<h3>Total de tu compra: "+importe+ "€ </h3>");
            document.write("<h1>Total de tu compra con descuento: "+importe * 0.80+ "€</h1>");
            break;
        case "julio":
            document.write("<h3>Total de tu compra: "+importe+ "€ </h3>");
            document.write("<h1>Total de tu compra con descuento: "+importe * 0.85+ "€</h1>");
            break;
        case "agosto":
            document.write("<h3>Total de tu compra: "+importe+ "€ </h3>");
            document.write("<h1>Total de tu compra con descuento: "+importe * 0.85+ "€</h1>");
            break;
        case "octubre":
            document.write("<h3>Total de tu compra: "+importe+ "€ </h3>");
            document.write("<h1>Total de tu compra con descuento: "+importe * 0.85+ "€</h1>");
            break;
        case "noviembre":
            document.write("<h3>Total de tu compra: "+importe+ "€ </h3>");
            document.write("<h1>Total de tu compra con descuento: "+importe * 0.75+ "€</h1>");
            break;
        case "diciembre":
            document.write("<h3>Total de tu compra: "+importe+ "€ </h3>");
            document.write("<h1>Total de tu compra con descuento: "+importe * 0.75+ "€</h1>");
            break;
        default:
            document.write("<h1>Total de tu compra: "+importe + "€</h1>");
    }
}


 descuento();