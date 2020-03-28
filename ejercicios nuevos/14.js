let arr=[3,6,9,13,15,3,8,11,5,0];
let car="+";

var new_arr=arr.map((arr)=>{
    return Math.floor(arr*10 / 15)
})
console.log(new_arr);


let imprimir = (valor)=>{
    for (let i = 1; i < valor; ++i) {
       document.write(car)
    }document.write(car+"<br>")
}

let imprimir2=(new_arr)=>{
    for(element of new_arr)
    imprimir(element)
}
console.log(imprimir2(new_arr))


