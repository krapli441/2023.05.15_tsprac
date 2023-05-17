// * 매개변수를 배열로 받을 예정.
// * 자바스크립트로 변환하면 typeof(arrayData) === string과 같음.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var data = ["최대건", "정성철", "허진", "이세민"];
function first(arrayData, value) {
    // 1. 첫번째 배열 인덱스의 값을 변환하는 함수를 만들고 싶다. - 의도를 써놓는 것을 의사 코드 (sudo code)라고 한다.
    arrayData.splice(0, 1, value);
    // * 기존 배열의 0번째를 최종적을 바꿔주는 형태로 첫번째 인덱스를 바꿔보기.
    // * splice();
    return arrayData;
}
console.log(first(data, "강지민"));
function second(arrayData, value) {
    //* 1.
    arrayData.pop(); // 배열의 마지막 요소를 제거하는 pop 메서드
    //* 2.
    var combineArray = []; // 바뀐 값을 넣을 빈 배열 생성. 타입을 array로 명시함.
    //* 3.
    combineArray = __spreadArray([value], arrayData, true); // 빈 배열 안에 매개변수 value와 전개연산자 arrayData
    //* 4.
    return combineArray;
}
console.log(second(data, "박준형"));
