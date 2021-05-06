const removeFromArray = function(array, ...inputs) {
    for (input of inputs) {
        const index = array.indexOf(input);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    return array;
}

module.exports = removeFromArray
