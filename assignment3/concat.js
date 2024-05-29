var Input = {
    id: 1,
    name: "soumya",
    age: 22,
    email: "S@gmail.com",
};
function concatKeysAndValues(obj) {
    var text = "";
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        text = text + "".concat(key, ": ").concat(value, ", ");
    }
    return text;
}
console.log(concatKeysAndValues(Input).slice(0, -2));
