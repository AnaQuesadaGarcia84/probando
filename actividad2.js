var a = parseInt(prompt("Primer número"));
var b = parseInt(prompt("Segundo número"));

// var resta= num1 - num2;
// console.log("La resta de "+ num1 + "  " + num2 + " es " + resta);
// document.write("La resta de "+ num1 + " y " + num2 + " es " + resta + "<br> ");

// var suma = num1 + num2;
// console.log("La suma de " + num1 + "  " + num2 + " es " + suma);
// document.write("La suma de " + num1 + " y " + num2 + " es " + suma + "<br> ");  

// var multiplica = num1 * num2;
// console.log("La multiplicación de " + num1 + " " + num2 + " es " + multiplica); 
// document.write("La multiplicación de " + num1 + " y " + num2 + " es " + multiplica + "<br> "); 

// var divide = num1 / num2;
// console.log("La división de " + num1 + " " + num2 + " es " + divide); 
// document.write("La división de " + num1 + " y " + num2 + " es " + divide + "<br> "); 

function operaciones(){
    document.write("Primer número: " + a + " Segundo número: " + b+ "<br>");
    document.write("Sumar: " + (a+b) + "<br>");
    document.write("Restar: " + (a-b) + "<br>");
    document.write("Multiplicación: " + (a*b) + "<br>");
    document.write("Dividisión: " + (a/b) + "<br>");
    document.write("<hr>");
}

operaciones();