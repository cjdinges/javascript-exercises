const sumAll = function(a, b) {
    let sum = Math.min(a,b);

    if ((sum < 0) ||
        (Math.floor(a) != a) ||
        (Math.floor(b) != b) ||
        (typeof a != 'number') ||
        (typeof b != 'number'))
         {return 'ERROR'}

    for (let i = sum + 1; i <= Math.max(a,b); i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
