

function invert(numbers : number[]): number[] {
    let results : number [] = numbers.map((num: number) => num * -1); //used map because foreach doesn't return 
    return results;
}

console.log(invert([1, -2, 3, 4, 5])); // [-1, -2, -3, -4, -5]