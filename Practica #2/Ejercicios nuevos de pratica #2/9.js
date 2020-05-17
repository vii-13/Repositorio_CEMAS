let palabra = 'cat';

function combinaciones(palabra) {
  let listado = [];
  for (let index = 0; index < palabra.length; index++) {
    if (palabra.length > 3) {
      listado = [...listado,
      ...combinaciones(
        palabra
          .slice(1, palabra.length))
        .map((restoPalabra) => palabra[0] + restoPalabra)];
    } else if (palabra.length > 2) {
      listado = [...listado, palabra];
      listado = [...listado, palabra[0] + combinaciones(palabra.slice(1, palabra.length))];
    } else {
      return palabra[1] + palabra[0];
    }
    palabra = palabra.slice(1, palabra.length) + palabra[0];
  }
  return listado;
};

console.log(combinaciones(palabra));
// combinaciones(palabra);