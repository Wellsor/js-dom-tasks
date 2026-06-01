export default () => {
  // BEGIN
const tabs = document.querySelectorAll('[data-bs-target]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const row = tab.closest('.row');

      const activeTab = row.querySelector('.nav-link.active');
      if (activeTab) {
        activeTab.classList.remove('active');
      }

      const activePane = row.querySelector('.tab-pane.active');
      if (activePane) {
        activePane.classList.remove('active');
      }

      tab.classList.add('active');

      const target = row.querySelector(tab.dataset.bsTarget);
      target.classList.add('active');
    });
  });
  // END
};
