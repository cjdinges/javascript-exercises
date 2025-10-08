const reverseString = function(inStr) {
    let outStr = '';

    for (let i = (inStr.length - 1); i >= 0; i--) {
        outStr += inStr[i];
    }

    return outStr;
};

// Do not edit below this line
module.exports = reverseString;
