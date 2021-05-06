const reverseString = function(string) {
    const splitString = string.split("");
    const reversedString = splitString.reverse();
    return reversedString.join("");
}

module.exports = reverseString
