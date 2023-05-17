export default function (
  tagName: string,
  parent: HTMLElement,
  attribute?: Record<string, any>
) {
  const element = document.createElement(tagName);
  parent.appendChild(element);
  Object.assign(element, attribute);
  return element;
}
