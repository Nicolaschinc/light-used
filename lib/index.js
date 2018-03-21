/**
 * created by Nico at 2017/05/26
 * base type
 */

module.exports = {
    isUndefined: function(obj) {
        return obj === void 0;
    },
    isNull: function(obj) {
        return obj === null;
    },
    isObject: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    },
    isBoolean: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Boolean]';
    },
    isArray: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    },
    isFunction: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    },
    isNumber: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
    },
    isDate: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Date]';
    },
    isString: function(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    },
    isNaN: function(obj) {
        return obj !== obj;
    },
    has: function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    },
    flatArgs: function(arg) {
        var arr = arg ? arg : [];
        return Array.prototype.slice.call(arr);
    },
    copy: function(src) {

        var newObj = (src && this.isObject(src)) ? {} : [];

        if (typeof src !== 'object') {
            return false;
        }
        for (var prop in src) {
            if (this.has(src, prop)) {
                newObj[prop] = this.isObject(src[prop]) ? this.shallowCopy(src[prop]) : src[prop];
            }
        }
        return newObj;
    }

}