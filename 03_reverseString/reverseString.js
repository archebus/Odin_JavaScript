const reverseString = function(string) {
    let charArray = [];
    for (let char of string) {
        charArray.push(char);
    }    
    let reverseArray = [];
    for (let i = charArray.length; i > 0; i--) {
        reverseArray.unshift(charArray.shift());
    }
    let returnString = ``;
    for (let char of reverseArray) {
        returnString += char;
    }
    return returnString;
};

console.log(reverseString("Hello"));

// Do not edit below this line
module.exports = reverseString;