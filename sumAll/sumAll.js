const sumAll = function(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    const max = Math.max(num1, num2);
    const min = Math.min(num1, num2);
    let total = 0;
    for (let x = min; x <= max; x++) {
        total += x;
    }
    return total;
}

module.exports = sumAll;
