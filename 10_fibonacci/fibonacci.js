const fibonacci = function(end) {
    let fib = 0;
    let add = 1;
    let next = 0;

    if (end < 0) {
        return "OOPS";
    }
    
    for (let i = 1; i <= end; i++){
        next = fib + add;
        fib = add;
        add = next;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
