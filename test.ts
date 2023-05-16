import { data } from "./module-file";

const a = 1;
const b = 2;

function moreFuction(): void {
  console.log("hi");
}

function c(a: number, b: number): number {
  return a + b;
}

console.log(c(a, b));
console.log(data);
