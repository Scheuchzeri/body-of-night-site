document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
});

function setupNavigation() {
  const tabLinks = document.querySelectorAll("[data-tab]");
  const tabs = document.querySelectorAll(".tab");
  const showTab = (tabId) => {
    tabs.forEach((tab) => {
      tab.classList.toggle("active", tab.id === tabId);
      if (tab.id === tabId) {
        tab.scrollTop = 0;
      }
    });
  };

  tabLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tabId = link.dataset.tab;
      window.location.hash = tabId; //updates URL
      showTab(tabId);
    });
  });

  // Handle page load with hash
  window.addEventListener("load", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) showTab(hash);
  });

  // Handle back/forward navigation
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) showTab(hash);
  });
}
