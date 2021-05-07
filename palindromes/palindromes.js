const palindromes = function(string) {
    const removePunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const noSpaces = removePunctuation.split(' ').join('');
    const noCapitals = noSpaces.toLowerCase();
    for (let char in noCapitals) {
        if (noCapitals[char] != noCapitals[noCapitals.length-char-1]) {
            return false;
        }
    }
    return true;
}

palindromes('A! e r t%.');

module.exports = palindromes
