/**
 * created by Nico at 2018/03/21
 * object fns
 */


module.export = {
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