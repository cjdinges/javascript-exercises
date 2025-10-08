const leapYears = function(inYear) {
    if (inYear % 100 == 0) {
        return (inYear % 400 == 0)
    }

    return inYear % 4 == 0;
};

// Do not edit below this line
module.exports = leapYears;
