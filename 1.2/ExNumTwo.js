let goInput = prompt("Введите строку:");
let result = "";

for (let i = goInput.length - 1; i >= 0; i -= 2) {
    result += goInput[i];
}

console.log(result);