/**
 * created by Nico at 2018/03/21
 * array fns
 */
var _ = require('./index.js');

module.exports = {
    greatNumAdd: function(x, y) {
        var n1 = x.split('').reverse(),
            n2 = y.split('').reverse(),
            len = Math.max(n1.length, n2.length),
            temp = [],
            carry = 0, //进位
            result = 0;

        for (var i = 0; i < len; i++) {
            result = Number(n1.shift()) + Number(n2.shift()) + carry;
            if (result > 10) {
                if (i != len) {
                    result = result % 10;
                    carry = 1;
                }
            } else {
                carry = 0;
            }

            temp.push(result);
        }
        return temp.reverse().join('');
    },
    unique: function(arr) {
        var newArr = [];
        var objArr = {};

        for (var i = 0; i < arr.length; i++) {
            var tempVal = arr[i];
            if (objArr[tempVal] !== 1) {
                newArr.push(tempVal);
                objArr[tempVal] = 1;
            }
        }
        return newArr;
    }
}