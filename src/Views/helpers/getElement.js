// Get an element from the DOM
export default function getElement(selector) {
  const element = document.querySelector(selector);
  return element;
}