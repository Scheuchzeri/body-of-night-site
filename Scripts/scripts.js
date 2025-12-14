document.addEventListener("DOMContentLoaded", function () {
  console.log("Script recognized.");

  /* Constants */ 

  const sections = document.querySelectorAll('section');
  const sectionLinks = document.querySelectorAll('.tab-link');
  const hamMenu = document.querySelector('.ham-menu');
  const navBar = document.querySelector('nav');
  

  function navigation() {

    /* 
    The purpose of this function is to enable navigation of the SPA by enabling the user to switch between
    active sections, as well as to set up the hamMenu for mobile use. 
    */

    const switchSection = (dataVal) => {
      sections.forEach(el => el.id === dataVal ? el.classList.add('active') : el.classList.remove('active'));
    }

    let activeTabId = null;

    document.addEventListener('click', (e) => {

      /* First I add an event-listener to the entire document; then I filter for those parts of the DOM that are
      relevant for navigation. If no such element has been clicked, the function returns.
      */

      const target = e.target.closest('.tab-link, .ham-menu, nav-section');

      console.log(target);

      if(!target) {
        console.log('No target selected.');

        navBar.classList.remove('active');
        hamMenu.classList.remove('active');

      } else {
        currentSection = Array.from(sections).find((el) => el.classList.contains('active'));
        let activeTabId = currentSection.id;
        console.log(activeTabId); /* Here I also store the id of the current section so that the script can reference it later; */

        const links = Array.from(sectionLinks);

        /*
        Now I condition the reaction of the script based on which element has been clicked. 
        */

        if (target === target.closest('.ham-menu')) {
          console.log('HamMenu selected!');

          hamMenu.classList.contains('active') ? hamMenu.classList.remove('active') : hamMenu.classList.add('active');
          navBar.classList.toggle('active');
          switchSection(activeTabId);

          } else if (target.classList.contains('tab-link')) {
          console.log('MenuLink selected!');

          const dataValue = target.dataset.tab;
          switchSection(dataValue);
          hamMenu.classList.remove('active');
          navBar.classList.remove('active');  
          

        } else {
          navBar.classList.remove('active');
        }
         return;
      }
    })
  }

  navigation();


})