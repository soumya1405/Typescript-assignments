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