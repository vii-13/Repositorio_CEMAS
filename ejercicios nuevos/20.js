var y=prompt("INGRESE CANTIDAD DE LATAS")

var x=1;
var filas=0;
while (x<=y) {
    filas+=1;
    y-=x;
    x+=2;
}alert("NUEMERO DE FILAS:"+filas);
alert("RESTO:"+y);


