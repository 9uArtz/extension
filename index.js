(function() {
    Object.defineProperties(Object.prototype, {
        each : {
            value: function(callback) {
                for (var key in this) {
                    callback(this[key], key);
                }
                return this;
            },
            writable: true,
        },
        map : {
            value: function(callback) {
                for (var key in this) {
                    this[key] = callback(this[key], key);
                }
                return this;
            },
            writable: true,
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
            },
            writable: true,
        },
        has : {
            value: function(needle) {
               for (var key in this) {
                   if (this[key] == needle) {
                       return true;
                   }
               }
               return false;
            },
            writable: true,
        },
        hasKey : {
            value: function(needle) {
                return (this[needle] !== undefined);
            }
        },
        toJson : {
            value : function() {
                return JSON.stringify(this);
            },
            writable: true,
        },
    });
    Object.defineProperties(String.prototype, {
        replaceAll : {
            value : function(from, to) {
                return this.split(from).join(to);
            },
            writable: true,
        }
    });
})();
