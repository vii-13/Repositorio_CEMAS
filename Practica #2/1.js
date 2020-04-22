var n=prompt("ingrese n");
var m=prompt("ingrese m");


function isMultiple(m,n) {
    var resto=0;
        resto = n % m;
        if(resto==0){
            return true;
        }else{
            return false;
        }
    
           
    }console.log(isMultiple(m,n));