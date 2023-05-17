/**
 * @ params {array} arradyData
 * @ params {string} insertData
 * @ return {array} 문자열로 된 배열.
 * 
 * 내가 만든 스니펫
 *  */


function first(arrayData: string[], value: string): string[] {
  // 1. 첫번째 배열 인덱스의 값을 변환하는 함수를 만들고 싶다. - 의도를 써놓는 것을 의사 코드 (sudo code)라고 한다.
  arrayData.splice(0, 1, value);
  // * 기존 배열의 0번째를 최종적을 바꿔주는 형태로 첫번째 인덱스를 바꿔보기.
  // * splice();
  return arrayData;
}

let data = ["최대건", "정성철", "허진", "이세민"];
console.log(first(data, "강지민"));

function second(arrayData: string[], value: string): string[] {
  //* 1.
  arrayData.pop(); // 배열의 마지막 요소를 제거하는 pop 메서드
  //* 2.
  let combineArray: string[] = []; // 바뀐 값을 넣을 빈 배열 생성. 타입을 array로 명시함.
  //* 3.
  combineArray = [value, ...arrayData]; // 빈 배열 안에 매개변수 value와 전개연산자 arrayData
  //* 4.
  return combineArray;
}

console.log(second(data, "박준형"));
