function createElement(tagName, props) {
    var propsString = "";
    for (var key in props) {
        propsString += " ".concat(key, "=").concat(props[key]);
    }
    return "<".concat(tagName).concat(propsString, "></").concat(tagName, ">");
}
console.log(createElement("div", { class: "training", id: "typescript" }));
