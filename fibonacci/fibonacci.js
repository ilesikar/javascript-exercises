const fibonacci = function(input) {
    if (input <= 0) return 'OOPS';
    input = Number(input)
    let sum = 0
    let current = 1;
    let previous = 0;
    for (let i=0; i < input - 1; i++) {
        sum = current + previous;
        previous = current;
        current = sum;
    }
    return current;
}

module.exports = fibonacci