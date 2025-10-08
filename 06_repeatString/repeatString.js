const repeatString = function(str, count) {
    if (count < 0) {return 'ERROR'}

    let outputStr = "";

    while (count > 0) {
        outputStr += str;
        count--;
    }

    return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
