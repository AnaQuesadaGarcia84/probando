// Se plantea la creación de un script dada esta matriz [[1,2,3],[4,5,6],[7,8,9]]:
// Para recorrer los elementos de la matriz y añadirlo al documento html

var temperaturas_cuidades = new Array(new Array (12,10,11), new Array(5,0,2),new Array(10,8,10));
console.log(temperaturas_cuidades);

// temperaturas_cuidades.forEach(function(temperatura){
//     console.log(temperatura);
// })

// for(i=0; i<temperaturas_cuidades.length;i++){
//     console.log(temperaturas_cuidades[i]);
//     document.getElementById("respuesta").innerHTML="Ciudad 1: "+temperaturas_cuidades[i]+ " Ciudad 2:"+temperaturas_cuidades[i]+" Ciudad 3:"+temperaturas_cuidades[i]
// }



for (i=0;i<temperaturas_cuidades.length;i++){
    document.write("<br><b>Ciudad " + i + "</b>"+" ")
    for (j=0;j<temperaturas_cuidades[i].length;j++){
        document.write(temperaturas_cuidades[i][j]+" ")
    }
}
