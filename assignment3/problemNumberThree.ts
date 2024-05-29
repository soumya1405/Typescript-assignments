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


type userType = {
  [key: string]: string | any;
};
namespace Util {
  export const concatKeysAndValues = (obj: userType) => {
    const keys = Object.keys(obj);
    let result: string = "";
    keys.map((key) => {
      if (typeof obj[key] === "string") {
        result = result + key + ": " + obj[key] + ", ";
      } else {
        let keys = Object.keys(obj[key]);
        keys.map((internalKey) => {
          result =
            result + internalKey + ": " + obj[key][internalKey] + ", ";
        });
      }
    });
    return result;
  };
}
const user: userType = {
  name: "soumya",
  email:"S@gmail.com",
  age: "21",
  address: {
    city: "manchirial",
    state: "telangana",
  },
};
console.log(Util.concatKeysAndValues(user).slice(0, -2));









