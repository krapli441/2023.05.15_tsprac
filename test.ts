function exampleOne(object: object) {
  let value: Array<string> = [];
  for (let key in object) {
    value.push(key);
  }
  return value;
}

let test = {
  name: "박준형",
  age: "29",
  job: "neat",
};

console.log(exampleOne(test));
