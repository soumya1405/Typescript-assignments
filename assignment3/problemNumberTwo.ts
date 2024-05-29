// Write a function to take object as parameter (both keys and values are string) and return concat all keys along with values
// Ex Input: {
//     name: "User",
//     email: "user@gmail.com"
// }

// Output: "name: User, email: user@gmail.com"

interface Inputtype {
  id: number;
  name: string;
  age: number;
  email: string;
}

const Input: Inputtype = {
  id: 1,
  name: "soumya",
  age: 22,
  email: "S@gmail.com",
};

function concatKeysAndValues<T extends Inputtype>(obj: T) {
  let text = "";
  for (const [key, value] of Object.entries(obj)) {
    text = text + `${key}: ${value}, `;
  }
  return text
}
console.log(concatKeysAndValues(Input).slice(0,-2));