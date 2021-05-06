const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let returnString = "";
    for (let x = 0; x < num; x++) {
        returnString += string;
    }
    return returnString;
}

module.exports = repeatString;
