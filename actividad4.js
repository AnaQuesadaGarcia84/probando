// InicioProceso
// Escribir "Introduce el numero de niños"
// Leer numero_niños
// Escribir "Introduce el numero de niñas"
// Leer numero_niñas
// //calculamos el porcentaje
// porcentaje_niños<-numero_niños*100/(numero_niños+numero_niñas)
// porcentaje_niñas<-100-porcentaje_niños
// Escribir "Hay un " porcentaje_niños " % de niños
// Escribir "Hay un " porcentaje_niñas " % de niñas"
// FinProceso

var ninos = parseInt(prompt("Números de niños: "));
var ninas = parseInt(prompt("Números de niñas: "));

console.log ("Niños: "+ ninos);
console.log ("Niñas: "+ ninas);

var totalninos = ninos + ninas;
var porcentninos = (ninos*100)/ totalninos;
var porcentninas = (ninas*100)/ totalninos;

console.log("El porcentaje de niñas es: " + porcentninas + " y el porcentaje de niños es: " + porcentninos);








