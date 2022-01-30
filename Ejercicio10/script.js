const numeros = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
const pares = [];
const impares = [];

for (numero of numeros) {
    if (numero % 2 == 0) {
        pares.push(numero);        
    }
    else {
        impares.push(numero);
    }
}
console.log(`Los números pares son: ${pares}, y los impares: ${impares}`);
    