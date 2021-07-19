function MagicGetterSetter() {
    var emptyValue = null;
    var obj = {};

    this.get = function(prop){
        return (typeof obj[prop] == "undefined") ? emptyValue : obj[prop];
    };

    this.set = function(prop, value){
        Object.defineProperty(obj, prop, {
            value: value
        });
    };
}

module.exports =  MagicGetterSetter;