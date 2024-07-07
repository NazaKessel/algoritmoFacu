//Hacer un pseudocódigo que imprima todos los números naturales que hay desde la unidad hasta un numero que introducimos por teclado.

let numero;
do{
    let entrada = prompt ("introducir un numero");
    numero = parseFloat(entrada);
} while (isNaN(numero) || numero <= 0); //repite hasta que la entrada sea valida

for (let salida = 1; salida <= numero; salida++) {
    console.log(salida);
}