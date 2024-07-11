function sumDigits(number) {
    let individual = number.toString().split('');
    let numberArray = individual.map((num) => parseInt(num));
    return numberArray.reduce((a, b) => a + b, 0);
}
console.log(sumDigits(1232));
