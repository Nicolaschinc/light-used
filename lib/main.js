var index = require('./index.js'),
    array = require('./Array.js'),
    object = require('./Object'),
    util = require('./util.js');

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
Core.extend(array);
Core.extend(object);
Core.extend(util);




module.exports = Core;