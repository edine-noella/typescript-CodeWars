const setRange = (range) => {
    const x = range[0];
    const y = range[1];
    return { x, y: y.age > 10 };
};
setRange([true, { name: 'Patrick', age: 3 }]);
console.log(setRange([true, { name: 'Patrick', age: 3 }]));
