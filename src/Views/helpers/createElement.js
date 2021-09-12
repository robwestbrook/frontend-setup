export default function(tag, className = [], id = "") {
  const element = document.createElement(tag);
  if (className) {
    if (className.length > 1) {
      className.forEach(cn => element.classList.add(cn));
    } else if (className.length === 1) {
      element.classList.add(className[0]);
    }
    if (id) {
      element.setAttribute("id", id);
    }
  }
  return element;
}