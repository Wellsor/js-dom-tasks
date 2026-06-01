// BEGIN
export default function extractData(element) {
  let paragraphs = element.getElementsByTagName('p');
  let result = [];

  for (let i = 0; i < paragraphs.length; i++) {
    result.push(paragraphs[i].textContent.trim());
  }

  return result;
}
// END