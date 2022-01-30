// con el objeto document se controla la página web y sus elemento
//const url = document.URL;
//console.log(url);
// número de enlaces por página
const enlaces = document.getElementsByTagName("a");
const numEnlaces = enlaces.length;
console.log(`El número de enlaces de esta página son: ${numEnlaces}`);
// direccion a la que enlaza el penúltimo enlace
const penultimoEnlace = enlaces[enlaces.length-2];
console.log(`La penúltima web es: ${penultimoEnlace}`);
// número de enlaces del tercer párrafo
const parrafos = document.getElementsByTagName("p");
const tercerParrafo = parrafos[2];
const enlacesTercerParrafo = tercerParrafo.getElementsByTagName("a");
console.log(`El número de enlaces del tercer párrafo es: ${enlacesTercerParrafo.length}`);

// Pintar los resultados utilizando innerHTML y creando un nodo
/* los resultados son: 
El número de enlaces de esta página son: 6
La penúltima web es: https://geonet.esri.com/welcome
El número de enlaces del tercer párrafo es: 2     */

// Crearemos primero el nodo de tipo Element (párrafo)
const parrafoResultados = document.createElement("p");
// ahora creamos el nodo tipo text
//const contenido = document.createTextNode(`El número de enlaces de esta página son: ${numEnlaces} <br />La penúltima web es: ${penultimoEnlace} <br /> El número de enlaces del tercer párrafo es: ${enlacesTercerParrafo.length}`);
// ahora añadimos el nodo Text como hijo del nodo Element:
//parrafoResultados.appendChild(contenido);
// Utilizando innerHTML sería:
parrafoResultados.innerHTML = `El número de enlaces de esta página son: ${numEnlaces} <br />La penúltima web es: ${penultimoEnlace} <br /> El número de enlaces del tercer párrafo es: ${enlacesTercerParrafo.length}`;
// y añadimos el nodo element como hijo de la página:
document.body.appendChild(parrafoResultados);