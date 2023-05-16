import daegun from "./dj";

const a = 1;
const b = 2;

function moreFuction(): void {
  console.log("hi");
}

daegun("대건입니다");

function c(a: number, b: number): number {
  return a + b;
}

console.log(c(a, b));
