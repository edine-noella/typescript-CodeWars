export function* generator(a: number): Generator<string> {
    let i: number = 1;
       while(a){       
         yield `${a} x ${i} = ${a*i++}`;
         
         
       }
    
  }