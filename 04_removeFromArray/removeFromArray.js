const removeFromArray = function(array , a) {
    for (let i = 1; i < arguments.length; i++){
        for (let j = 0; j < array.length; j++) {
            if (array.indexOf(arguments[i] != -1)) {
                let index = array.indexOf(arguments[i])
                console.log("Removed: " + array.splice(index, 1));
            }
        }
    }
    return array;
}

console.log(removeFromArray([1,2,3,4], 3));

// Do not edit below this line
module.exports = removeFromArray;
