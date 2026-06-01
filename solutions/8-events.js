export default () => {
  // BEGIN
let button = document.getElementById('alert-generator');
  let container = document.querySelector('.alerts');
  let count = 1;

  button.addEventListener('click', function() {
    let alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-primary';
    alertDiv.textContent = 'Alert ' + count;
    
    container.prepend(alertDiv);
    count = count + 1;
  });
  // END
};