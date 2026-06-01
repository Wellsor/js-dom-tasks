// BEGIN
let text = document.body.innerHTML.trim();
let lines = text.split('\n');
let result = '';

for (let i = 0; i < lines.length; i++) {
  let line = lines[i].trim();
  if (line !== '') {
    result += '<p>' + line + '</p>';
  }
}

document.body.innerHTML = result;
// END