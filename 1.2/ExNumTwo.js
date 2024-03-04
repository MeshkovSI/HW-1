let goInput = prompt("Введите строку:");
let result = "";

for (let i = 1; i < goInput.length; i += 2) {
    result += goInput[i];
}

console.log(result);