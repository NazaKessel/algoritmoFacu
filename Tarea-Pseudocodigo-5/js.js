//-Hacer un pseudocódigo que imprima los números impares hasta el 100 y que imprima cuantos impares hay.
let acomulador = 0
for (let num = 0; num < 100; num++) {
    if (num % 2 !== 0) {
        console.log(num);
        acomulador = acomulador +1
    }
}
console.log("hay " + acomulador + " impares del 0 al 100");