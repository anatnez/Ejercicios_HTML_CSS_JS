/*ancho = 16cm
largo = 23cm 
alto = 13cm
Volumen= ancho*largo*alto
Área=largo*alto+2(largo*ancho) => area lateral +2(area de la base)*/

//Vamos a crear variables

const volumen = 16 * 23 * 13;
console.log("El columen es", volumen + "cm3");

const areaLateral = 16 * 13;
const areaBase = 13 * 23;
const areaCubo = areaLateral + 2*areaBase;
console.log("El área de este cubo es: ", areaCubo + "cm2");

// podemos generalizar la operación metiendo cada lado en una variable

const largo = 23;
const ancho = 16;
const alto = 13;
const volumen2 = largo * ancho * alto;
console.log("El volumen 2 es: ", volumen2 + "cm3");

const area2 = ancho * alto + 2*largo * alto;
console.log("El área2 del cubo es: ", area2 + "cm2");