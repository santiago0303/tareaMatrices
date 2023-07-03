// Función para crear una matriz de tamaño n*n con valores ingresados por el usuario
function crearMatriz(n) {
    let matriz = [];
    for (let i = 0; i < n; i++) {
        matriz[i] = [];
        for (let j = 0; j < n; j++) {
            matriz[i][j] = parseInt(prompt("Ingrese el valor para la posición [" + i + "][" + j + "]:"));
        }
    }
    return matriz;
}

// Función para sumar dos matrices y almacenar el resultado en otra matriz
function sumarMatrices(matriz1, matriz2, n) {
    let resultado = [];
    for (let i = 0; i < n; i++) {
        resultado[i] = [];
        for (let j = 0; j < n; j++) {
            resultado[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }
    return resultado;
}

// Obtener la longitud de las matrices ingresada por el usuario
let longitud = parseInt(prompt("Ingrese la longitud de las matrices:"));

// Crear la primera matriz
console.log("Ingrese los valores para la primera matriz:");
let matriz1 = crearMatriz(longitud);

// Crear la segunda matriz
console.log("Ingrese los valores para la segunda matriz:");
let matriz2 = crearMatriz(longitud);

// Sumar las matrices y obtener el resultado
let resultado = sumarMatrices(matriz1, matriz2, longitud);

// Mostrar las matrices originales y el resultado
console.log("Matriz 1:");
console.log(matriz1);
console.log("Matriz 2:");
console.log(matriz2);
console.log("Resultado:");
console.log(resultado);