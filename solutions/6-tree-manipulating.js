// BEGIN
export default function prettify(document) {
  let divs = document.getElementsByTagName('div');

  for (let i = 0; i < divs.length; i++) {
    let div = divs[i];
    let childs = Array.from(div.childNodes);

    for (let j = 0; j < childs.length; j++) {
      let node = childs[j];

      if (node instanceof Text && node.textContent.trim() !== '') {
        let p = document.createElement('p');
        p.textContent = node.textContent;
        node.replaceWith(p);
      }
    }
  }
}
// END