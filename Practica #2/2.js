var k=prompt("INGRESE NUMERO");

function isEven(k){
    while (k >= 2) {
        k=k-2
    }
    if (k==0) {
        return true
    }
    if (k==1) {
        return false
    }

}console.log(isEven(k));
