let isArray = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

let sumEl = 0;

for (let i = 0; i < isArray.length; i++) {
    for (let j = 0; j < isArray[i].length; j++) {
        sumEl += isArray[i][j] ** 2;
    }
}

console.log("Сумма квадратов элементов массива:", sumEl);