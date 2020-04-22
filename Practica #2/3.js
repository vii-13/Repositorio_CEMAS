var data = [13,5,6,23,8];

var min = data.reduce(function (valor1, valor2) { return (valor1) < (valor2) ? valor1 : valor2; }); 
var max = data.reduce(function (valor1, valor2) { return (valor1) > (valor2) ? valor1 : valor2; });

console.log("valor minimo" , min) 
console.log("valor maximo" ,max)