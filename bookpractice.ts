// 다음의 값을 어떻게 추론할까?

let a = 1042; // number
let b = "apples and oranges"; // string
const c = "pineapples"; // pineapples
let d = [true, true, false]; // boolean
let e = { type: "ficus" }; // type : string
let f = [1, false]; // number | boolean
const g = [3]; // number[]
let h = null; // any

// 아래 코드는 왜 주석에 적힌 에러를 발생시킬까?

let i: 3 = 3;
i = 4;

let j = [1, 2, 3];
j.push(4);
j.push("5");

let k: never = 4;

let l: unknown = 4;
let m = l * 2;
