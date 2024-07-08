
function solicitarTresNumerosNaturales() {
    const numeros = [];
    let intentos = 0;

    while (numeros.length < 3) {
        let entrada = prompt(`Introduce el número natural ${numeros.length + 1} de 3:`);
        let numero = parseInt(entrada);

        // Validar que sea un número natural
        if (!isNaN(numero) && numero > 0 && Number.isInteger(numero)) {
            numeros.push(numero);
        } else {
            console.log(`Entrada inválida: "${entrada}". Debes ingresar un número natural.`);
        }

        intentos++;
        if (intentos > 10) {  // Limitar a 10 intentos para evitar bucles infinitos
            console.log("Demasiados intentos fallidos. Por favor, reinicia el proceso.");
            return;
        }
    }

    //asignacion a b c
    let a = numeros[0];
    let b = numeros[1];
    let c = numeros[2];
    console.log(`Números naturales ingresados: a = ${a}, b = ${b}, c = ${c}`);

    //calcular raiz
    let raiz = b*b -4*a*c;
    console.log("la raiz es" + raiz);
    
    let raizCuadrada = Math.sqrt(raiz);
    console.log("resultado de la raiz " + raizCuadrada)
    //calcular fraccion
    let fraccion = a*2;
    console.log("la fraccion da " + fraccion)

    //resolvente x1
    let x1 = -b + raizCuadrada;
    x1 = x1 / fraccion;
    console.log("x1:" + x1);

   let x2 = -b - raizCuadrada;
   x2 = x2 / fraccion;
   console.log("x2" + x2);
}
solicitarTresNumerosNaturales();

