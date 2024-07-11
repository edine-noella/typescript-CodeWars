


function tailSwap(arr: string[]) : string[]{
    let result : string[] = [];
    let firstSlice1: string = arr[0].split(':')[0];
    let secondSlice1: string = arr[0].split(':')[1];
    let firstSlice2: string = arr[1].split(':')[0];
    let secondSlice2: string = arr[1].split(':')[1];

    let swap1: string = firstSlice1 + ':' + secondSlice2;
    let swap2: string = firstSlice2 + ':' + secondSlice1;

    result.push(swap1);
    result.push(swap2);

    return result;
}

console.log(tailSwap(['abc:123', 'cde:456'])); //['abc:456', 'cde:123']