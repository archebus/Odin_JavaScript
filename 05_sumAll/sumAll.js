const sumAll = function(start, end) {
    
    //Swap values if there is a larger number first.
    if (start > end){
        let hold = end;
        end = start;
        start = hold;
    }

    if (start < 0 || end < 0) {
        return `ERROR`;
    }

    if (typeof start != "number" || typeof end != "number"){
        return `ERROR`;
    }

    let count = 0;
    for (let i = start; i <= end; i++) {
        count += i;
    }
    return count;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
