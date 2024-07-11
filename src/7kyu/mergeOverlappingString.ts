

function mergeOverlappingStrings(first: string , second:string ) : string {
    let result: string = first;

    for(let i =0 ; i < second.length; i ++){
        //for each loop we will be checking if the first string ends with the second substring from 0 to i+1(where we are)
        //if its true we will be adding the first string and the second string from i+1 to the end
        //this means we excluded the part of second string that is already in the first string
        if(first.endsWith(second.substring(0 , i+1))){
            result = first + second.substring(i+1);
        }
    }

   return result;
    

}

console.log(mergeOverlappingStrings("abc" , "cde")); // "abcde"