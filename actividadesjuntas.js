//EJERCICIO 2
document.getElementById('calcula').onclick=function operaciones(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var suma= num1+num2;
    var resta= num1-num2;
    var multiplica=num1*num2;
    var divide=num1/num2;

    document.getElementById('operandos').innerHTML= 'Primer número: '+num1+ ' Segundo número: '+num2 + '<br>'+ 'El resultado al sumarlos es: '+suma + '<br>'+ 
    'El resultado al restarlos es: '+resta+ '<br>'+ 'El resultado al multiplicarlos es: '+multiplica+ '<br>'+'El resultado al dividirlos es: '+divide+ '<br>';  
}

//EJERCICIO 3
document.getElementById('compara').onclick=function compara(){
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;

    if(num3 == num4){
        document.getElementById('comparando').innerHTML=(num3 + " y " + num4 + " son iguales" );
    }
    else if(num3 > num4){
        document.getElementById('comparando').innerHTML=(num3 + " es mayor que " + num4 );
    }
    else{
        document.getElementById('comparando').innerHTML=(num3 + " es menor que " + num4 );
    }
}

//EJERCICIO 4
document.getElementById('calcula').onclick=function contar(){
    var ninos = document.getElementById('ninos').value;
    var ninas = document.getElementById('ninas').value;

    console.log("Niños: "+ninos+" Niñas: "+ninas);

    //document.write("Niños: "+ ninos + "<br>");
    //document.write("Niñas: "+ ninas+ "<br>");
    // var totalninos = ninos + ninas;
    // var porcentninos = (ninos*100)/ totalninos;
    // var porcentninas = (ninas*100)/ totalninos;

    // console.log("El porcentaje de niñas es: " + porcentninas + " y el porcentaje de niños es: " + porcentninos);
    // document.write("El porcentaje de niñas es: " + porcentninas + " y el porcentaje de niños es: " + porcentninos+ "<br>");
}


//EJERCICIO 5

//EJERCICIO 6

//EJERCICIO 9

//EJERCICIO 10

//EJERCICIO 11

//EJERCICIO 12
function comprobar(){
    let operador = document.getElementById("operadores").value;
    resultado = eval(operador);
    document.getElementById("resultado").innerHTML="Resultado: "+ resultado;
}