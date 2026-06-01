import camelCase from 'lodash/camelCase';

// BEGIN
export default function normalize(document) {
  let elements = document.body.getElementsByTagName('*');

  for (let i = 0; i < elements.length; i++) {
    let el = elements[i];
    let classes = Array.from(el.classList);

    for (let j = 0; j < classes.length; j++) {
      let oldClass = classes[j];
      let newClass = camelCase(oldClass);
      
      el.classList.replace(oldClass, newClass);
    }
  }
}
// END