const repeatString = function(string, count) {
    if (count < 0) {
        return `ERROR`;
    }
    
    let returnString = '';
    for (let i = 0; i < count; i++) {
        returnString += string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;