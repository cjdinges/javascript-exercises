const removeFromArray = function(inArray, ...removalElements) {

    return inArray.filter(item => !removalElements.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
