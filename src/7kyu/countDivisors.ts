

export function divisors(n: number ) :number {
    let count: number = 0;
    for (let i: number = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
    
  }