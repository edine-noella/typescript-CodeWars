function tailSwap(arr) {
    let result = [];
    let firstSlice1 = arr[0].split(':')[0];
    let secondSlice1 = arr[0].split(':')[1];
    let firstSlice2 = arr[1].split(':')[0];
    let secondSlice2 = arr[1].split(':')[1];
    let swap1 = firstSlice1 + ':' + secondSlice2;
    let swap2 = firstSlice2 + ':' + secondSlice1;
    result.push(swap1);
    result.push(swap2);
    return result;
}
console.log(tailSwap(['abc:123', 'cde:456'])); //['abc:456', 'cde:123']
