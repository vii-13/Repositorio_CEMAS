var valores=[5,7,3,1,0,9,10,13,15,20]

var suma=0;
var suma_cuad=0;
var promedio=0;
var max=0;
var min=0;

// suma de los valores
valores.forEach(element => {
    suma+=element
});alert("la suma es:"+suma);

// suma de los cuadrados
valores.forEach(element2 => {
    suma_cuad+=element2**2
});alert("la suma de los cuadrados es:"+suma_cuad);

// promedio
var sum=valores.reduce((num, nextnum) => nextnum += num);
promedio = sum / valores.length;
alert("el promedio es:"+promedio)

// maximo y minimo
max=Math.max.apply(null, valores);
min=Math.min.apply(null, valores);
alert("el maximo es:"+max +"    "+ "el minimo es:"+min) 







