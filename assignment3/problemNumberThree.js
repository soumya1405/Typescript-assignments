// To make above problem more complex (property value can be either string or object of same recursive type with any nested objects)
// Ex Input: {
//     name: "User",
//     email: "user@gmail.com",
//     address: {
//         city: "Hyderabad",
//         state: "Telangana"
//     }
// }
// Output: "name: User, email: user@gmail.com, city: Hyderabad, state: Telangana"
// For the above problem use util function with namespace
var Util;
(function (Util) {
    Util.concatKeysAndValues = function (obj) {
        var keys = Object.keys(obj);
        var result = "";
        keys.map(function (key) {
            if (typeof obj[key] === "string") {
                result = result + key + ": " + obj[key] + ", ";
            }
            else {
                var keys_1 = Object.keys(obj[key]);
                keys_1.map(function (internalKey) {
                    result =
                        result + internalKey + ": " + obj[key][internalKey] + ", ";
                });
            }
        });
        return result;
    };
})(Util || (Util = {}));
var user = {
    name: "soumya",
    email: "S@gmail.com",
    age: "21",
    address: {
        city: "manchirial",
        state: "telangana",
    },
};
console.log(Util.concatKeysAndValues(user).slice(0, -2));
