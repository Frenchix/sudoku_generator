const validations = {
    arrayEquals: function(a, b) {
        //Return True if arrays has same length, type, and value on same index
        return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
    },
    rowValidation: function(allArray, arr) {
            if (validations.arrayEquals(allArray, arr)) {
                return true;
            }
            return false;
    },
}

module.exports = validations