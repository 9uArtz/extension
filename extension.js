(function() {
    Object.defineProperties(Object.prototype, {
        each : {
            value: function(callback) {
                for (var key in this) {
                    callback(this[key], key);
                }
                return this;
            },
        },
        map : {
            value: function(callback) {
                for (var key in this) {
                    this[key] = callback(this[key], key);
                }
                return this;
            }
        },
        collect : {
            value: function(callback) {
                var ret = {};
                for (var key in this) {
                    ret[key] = callback(this[key], key);
                }
                return ret;
            }
        },
        reduce : {
            value : function(callback) {
                var ret = (arguments.length > 1) ? arguments[1] : null;
                for (var key in this) {
                    ret = callback(this[key], ret);
                }
                return ret;
            }
        },
        has : {
            value: function(needle) {
               for (var key in this) {
                   if (this[key] == needle) {
                       return true;
                   }
               }
               return false;
            }
        },
        hasKey : {
            value: function(needle) {
                return (this[needle] != undefined);
            }
        },
        toJson : {
            value : function() {
                return JSON.stringify(this);
            }
        },
    });
})();
