function first(arrayData) {
  // 1. 첫번째 배열 인덱스의 값을 변환하는 함수를 만들고 싶다. - 의도를 써놓는 것을 의사 코드 (sudo code)라고 한다.
  let result = arrayData[0];
  result = "강지민";
  let arr = arrayData.unshift(result);
  return arr;
}

let data = ["최대건", "정성철", "허진", "이세민"];
first(data);
