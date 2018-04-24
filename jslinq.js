//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//
// Extensions

Array.prototype.select = function (func) {
    var result = [];
    for (var index = 0; index < this.length; index++) {
        result.push(func(this[index], index));
    }
    return result;
}
Array.prototype.selectMany = function (func) {
    var result = [];
    for (var index = 0; index < this.length; index++) {
        var arr = func(this[index], index);
        for (var index2 = 0; index2 < arr.length; index2++) {
            result.push(arr[index2]);
        }
    }
    return result;
}
Array.prototype.where = function (func) {
    var result = [];
    for (var index = 0; index < this.length; index++) {
        if (func(this[index], index) === true) {
            result.push(this[index]);
        }
    }
    return result;
}

Array.prototype.single = function (func, _default) {
    for (var index = 0; index < this.length; index++) {
        if (func(this[index], index) === true) {
            return this[index];
        }
    }
    return _default;
}

Array.prototype.any = function (func) {
    for (var index = 0; index < this.length; index++) {
        if (func(this[index], index) === true) {
            return true;
        }
    }
}

Array.prototype.each = function (func) {
    for (var index = 0; index < this.length; index++) {
        func(this[index], index);
    }
}

Array.prototype.count = function (func) {
    var count = 0;
    for (var index = 0; index < this.length; index++) {
        if (func(this[index], index) === true) {
            count++;
        }
    }
    return count;
}

Array.prototype._concat = function (func) {
    var result = "";
    for (var index = 0; index < this.length; index++) {
        result += func(this[index], index);
    }
    return result;
}

// End Of Extensions
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//
