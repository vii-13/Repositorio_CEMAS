var graficos=[6,5,4,3,2,1,0, 0,1,2,3,4,5,6, 1,3,5,7,5,3,1];

// imprimir lineas
let imprimir = (valor)=>{
    for (let i = 0; i < valor; ++i) {
       document.write('*')
    }document.write('*'+"<br>")
}

let imprimir2=(graficos)=>{
    for(element of graficos)
    imprimir(element)
}
console.log(imprimir2(graficos))





