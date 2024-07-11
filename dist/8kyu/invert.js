function invert(numbers) {
    let results = numbers.map((num) => num * -1); //used map because foreach doesn't return 
    return results;
}
console.log(invert([1, -2, 3, 4, 5])); // [-1, -2, -3, -4, -5]
