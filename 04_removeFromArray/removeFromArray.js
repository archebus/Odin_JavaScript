const removeFromArray = function(array, a) {
    for (let j = 0; j < array.length; j++) {
        for (let i = 1; i < arguments.length; i++) {
            let index = array.indexOf(arguments[i]);
            if (index != -1) {
                array.splice(index, 1);
            }
        }
    }
    return array;
}

console.log(removeFromArray([1,2,3,4]));

// Do not edit below this line
module.exports = removeFromArray;
