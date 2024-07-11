// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]


function smaller(arr: number[]): number[] {
    let result: number[] = [];
    for(let i = 0; i < arr.length; i++){
        let count: number = 0;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                count++;
            }
        }
        result.push(count);
    }
    return result;
}