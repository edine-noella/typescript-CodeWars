export function* generator(a) {
    let i = 1;
    while (a) {
        yield `${a} x ${i} = ${a * i++}`;
    }
}
