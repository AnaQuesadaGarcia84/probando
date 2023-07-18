// Escribir "Introduce el primer número"
//     Leer numero1
//     Escribir "Introduce el segundo número"
//     Leer numero2
//     //comparamos los dos números,
//     //si el primero es mayor o igual que el segundo entra
//     Si (numero1>=numero2) Entonces
//     //Si el numero1 y numero2 son iguales entra y escribe que son iguales
//     //Sino lo son escribe que el numero1 es el mayor
//         Si (numero1=numero2) Entonces
//             escribir "los números " numero1 " " numero2 " son iguales"
//         Sino
//             Escribir numero1 " es el mayor de los dos"
//         FinSi
//      //Si el primer Si es falso, escribe que el numero2 es mayor
//      Sino
//         Escribir numero2 " es el mayor de los dos"
//      FinSi
// FinProceso


var num1 = parseInt(prompt("Primer número"));
var num2 = parseInt(prompt("Segundo número"));

console.log("El primer número es: "+ num1);
console.log("El segundo número es: " + num2);

if(num1 == num2){
    console.log(num1 + " y " + num2 + " son iguales" )
} else if( num1 > num2){
    console.log(num1 + " es mayor que " + num2 )
}else{
    console.log(num1 + " es menor que " + num2 )
}