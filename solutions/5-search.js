export default (document) => {
  // BEGIN
let categoryTitle = document.querySelector('.content h1').textContent.trim();
  let categoryDesc = document.querySelector('.content .description').textContent.trim();
  
  let articleElements = document.querySelectorAll('.links > div');
  let items = [];

  for (let i = 0; i < articleElements.length; i++) {
    let item = articleElements[i];
    let articleTitle = item.querySelector('h2 a').textContent.trim();
    let articleDesc = item.querySelector('p').textContent.trim();
    
    items.push({
      title: articleTitle,
      description: articleDesc
    });
  }

  return {
    title: categoryTitle,
    description: categoryDesc,
    items: items
  };
  // END
};
