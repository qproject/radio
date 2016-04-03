require('./radio.styl');
module.exports = {
    template: require('./radio.jade'),
    imports(data) {
        return data;
    },
    exports(scope) {
        return scope;
    }
};