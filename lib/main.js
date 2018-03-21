var index = require('./index.js');

var Core = function() {}

Core.extend = function(dest) {

    var self = this;

    for (var property in dest) {
        if (dest.hasOwnProperty(property)) {
            self[property] = dest[property];
        }
    }
};

Core.extend(index);




module.exports = Core;