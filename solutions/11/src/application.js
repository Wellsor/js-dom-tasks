import 'whatwg-fetch';

export default () => {
  // BEGIN
  const inputs = document.querySelectorAll('input[data-autocomplete-name]');

  inputs.forEach((input) => {
    input.addEventListener('input', async (e) => {
      const value = e.target.value;

      const url = `${input.dataset.autocomplete}?search=${value}`;

      const response = await fetch(url);
      const items = await response.json();

      const list = document.querySelector(
        `ul[data-autocomplete-name="${input.dataset.autocompleteName}"]`
      );

      list.innerHTML = '';

      if (items.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Nothing';
        list.append(li);
        return;
      }

      items.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        list.append(li);
      });
    });
  });
  // END
};
