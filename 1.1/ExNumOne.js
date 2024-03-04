let goInput = prompt("Введите число:");
let number = parseInt(goInput);

if (!isNaN(number)) {
    let numLength = goInput.length;
    let numFirst = goInput.charAt(0);
    
    console.log(`Количество разрядов: ${numLength}`);
    console.log(`Первая цифра: ${numFirst}`);
} else {
    console.log("Это не число!");
}