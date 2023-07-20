var a = document.getElementById("num1").value;
var b = document.getElementById("num2").value;

function operaciones(){
    document.getElementById("operandos").innerHTML="Primer número: " + a + " Segundo número: " + b+ "<br>";
    document.write("Sumar: " + (a+b) + "<br>");
    document.write("Restar: " + (a-b) + "<br>");
    document.write("Multiplicación: " + (a*b) + "<br>");
    document.write("Dividisión: " + (a/b) + "<br>");
    document.write("<hr>");
}

operaciones();