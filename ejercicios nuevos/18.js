var a=prompt("ingrese lado 1");
var b=prompt("ingrese lado 2");
var c=prompt("ingrese lado 3");

function tipoTriang(a, b, c) {
    // equilatero
    if(a==b && b==c) {
        return 1;
    // isosceles
    }else if(a==b || b==c || a==c) {
        return 2; 
    // escaleno
    } else if(a!=b && b!=c){
        return 3;
    }
}alert(tipoTriang(a, b, c) );
