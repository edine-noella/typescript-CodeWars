

function sumDigits(number: number): number{
    let individual : string[] = number.toString().split('');
    let numberArray: number[] = individual.map ((num) => parseInt(num))  
     return numberArray.reduce((a, b) => a + b, 0)
   
}

 

console.log(sumDigits(1232)); 