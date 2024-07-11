function diffeerenceInAge(ages) {
    let min = ages[0];
    let max = ages[0];
    let results = []; //if it was different data type on each indes then it would a turple
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < min) {
            min = ages[i];
        }
        if (ages[i] > max) {
            max = ages[i];
        }
    }
    results.push(min);
    results.push(max);
    results.push(max - min);
    return results;
}
console.log(diffeerenceInAge([2, 3, 4, 5, 6])); // [2, 6, 4]
