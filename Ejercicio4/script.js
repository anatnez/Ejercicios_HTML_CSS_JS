const numero1 = 5;
const numero2 = 8;
if (numero1 > numero2) {
    console.log(`${numero1} no es mayor que ${numero2}`);
} else if (numero2<0) {
    console.log(`${numero2} es positivo`);
} else if (numero1 + 1 < numero2) {
    console.log(`El incrementar en 1 el valor de ${numero1} no lo hace mayor o igual que ${numero2}`);
}