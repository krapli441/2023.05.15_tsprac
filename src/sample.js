//
// 엘리먼트를 생성하는 함수
// @param {string} tagName
// @param {object} props
// @returns {string}
// 첫번째 매개변수 tagName은 문자열이어야 합니다.
// 두번째 매개변수 props는 객체여야 합니다.
// 리턴값은 문자열입니다.

// 아래의 함수의 안정성을 위해 타입스크립트로 작성해보세요.

function createElement(tagName, props) {
  let propsString = "";
  for (let key in props) {
    propsString += `${key}="${props[key]}"`;
  }
  return `<${tagName}${propsString}></${tagName}>`;
}

console.log(createElement("div", { class: "training", id: "typescript" }));
