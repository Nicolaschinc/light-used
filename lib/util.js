/**
 * created by Nico at 2018/03/21
 * util fns
 */

module.exports = {
    getUrlParam: function(url, param) {
        var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)");
        var r = url.split("?")[1].match(reg);
        if (r != null) {
            return r[2];
        } else {
            return undefined;
        }
    }
}