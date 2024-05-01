const palindromes = function (string) {
    var punctuation = /[\.,?! ]/g;
    var cleanString = string.replace(punctuation, "").toLowerCase();
    const array = cleanString.split('');
    const rArray = array.toReversed();

    for (let i = 0; i < array.length; i++) {
        if (array[i] != rArray[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
