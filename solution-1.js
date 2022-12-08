input.split('\n\n').reduce((accumulator, current) => {
    accumulator.push(current.split('\n').reduce((accumulator, current) => parseInt(accumulator) + parseInt(current), 0));
    return accumulator;
}, []).sort((a,b) => a - b).slice(-3).reduce((a,c) => a + c, 0);
