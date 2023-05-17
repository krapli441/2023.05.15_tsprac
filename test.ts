// * 매개변수를 배열로 받을 예정.
// * 자바스크립트로 변환하면 typeof(arrayData) === string과 같음.

let data = ["최대건", "정성철", "허진", "이세민"];

function first(arrayData: string[], value: string): string[] {
  // 1. 첫번째 배열 인덱스의 값을 변환하는 함수를 만들고 싶다. - 의도를 써놓는 것을 의사 코드 (sudo code)라고 한다.
  arrayData.splice(0, 1, value);
  // * 기존 배열의 0번째를 최종적을 바꿔주는 형태로 첫번째 인덱스를 바꿔보기.
  // * ... 전개 연산자
  // * reduce()
  // * map()
  // * push()
  // * splice();
  return arrayData;
}

console.log(first(data, "강지민"));
