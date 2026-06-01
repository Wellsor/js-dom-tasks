import escapeHtml from 'escape-html';

// BEGIN
export default () => {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email');
    const name = formData.get('name');
    const comment = formData.get('comment');

    const container = document.querySelector('.container');

    container.innerHTML = '';

    const title = document.createElement('p');
    title.textContent = 'Feedback has been sent';

    const emailEl = document.createElement('div');
    emailEl.textContent = `Email: ${email}`;

    const nameEl = document.createElement('div');
    nameEl.textContent = `Name: ${name}`;

    container.append(title);
    container.append(emailEl);
    container.append(nameEl);

    if (comment !== '') {
      const commentEl = document.createElement('div');
      commentEl.innerHTML = `Comment: ${escapeHtml(comment)}`;
      container.append(commentEl);
    }
  });
};
// END