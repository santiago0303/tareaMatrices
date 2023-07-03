// Función para generar un número aleatorio entre min (incluido) y max (excluido)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Función para generar una matriz de 3x3 con números aleatorios sin repetirse
function generateRandomMatrix() {
    let matrix = [
        [],
        [],
        []
    ];
    let numbers = [];

    // Generar una lista de números del 1 al 9
    for (let i = 1; i <= 9; i++) {
        numbers.push(i);
    }

    // Llenar la matriz con números aleatorios sin repetirse
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
            var randomIndex = getRandomNumber(0, numbers.length);

            // Obtener un número aleatorio y eliminarlo de la lista para evitar repeticiones
            var randomNumber = numbers.splice(randomIndex, 1)[0];

            // Asignar el número aleatorio a la posición correspondiente en la matriz
            matrix[row][col] = randomNumber;
        }
    }

    return matrix;
}

// Ejemplo de uso
var randomMatrix = generateRandomMatrix();
console.log(randomMatrix);