document.addEventListener("DOMContentLoaded", () => {
  console.log("Script Connected.");
  tabSwitch();
  hamMenuLogic();
});

function tabSwitch() {
  const tabs = document.querySelectorAll(".tab");
  const tabLinks = document.querySelectorAll(".tab-link");

  tabLinks.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      tabs.forEach((tab) => tab.classList.remove("active"));

      const targetTabId = e.target.dataset.tab;
      const targetTab = document.getElementById(targetTabId);

      targetTab.classList.add("active");
    })
  );
}

function hamMenuLogic() {
  const hamMenu = document.querySelector(".ham-menu");
  const tabLinks = document.querySelectorAll(".tab-link");
  const navBar = document.querySelector(".nav-section");
  const audio = document.querySelector(".recording");

  document.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target !== hamMenu) {
      console.log("Operation started.");
      navBar.classList.remove("active");
      hamMenu.classList.remove("active");
    } else if (e.target === hamMenu) {
      hamMenu.classList.contains("active")
        ? hamMenu.classList.remove("active")
        : hamMenu.classList.add("active");
      navBar.classList.toggle("active");
      audio.classList.toggle("inactive");
    }
  });

  tabLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamMenu.classList.remove("active");
      navBar.classList.remove("active");
    });
  });
}
