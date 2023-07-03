let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
//Mostrar matriz en pantalla

console.log("Matriz: ")
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join("\t"))
}