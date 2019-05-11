import mostVisible from 'most-visible';


//#region [ rgba(0, 0, 255, 0.1) ] reusable functions
function classToggle(element: Element, className: string, enable: boolean) {
  if (enable) element.classList.add(className);
  else element.classList.remove(className);
}
//#endregion


const nav = document.getElementsByTagName('nav')[0],
  trigger = document.getElementById('navBreakpoint'),
  langs = document.getElementsByClassName('lang');

function scrollNav() {

  const yPos = trigger.getBoundingClientRect().top,
    activeEl = mostVisible(langs),
    navSections = document.querySelectorAll('nav.stick .bar');

  classToggle(nav, 'stick', yPos <= 0);
  for (let i = 0; i < navSections.length; i++) {
    if (langs[i] == activeEl) navSections[i].classList.add('active');
    else navSections[i].classList.remove('active');
  }
}

const learnCards = Array.from(document.querySelectorAll('.lang .item a'));
learnCards.forEach(btn => btn.addEventListener('mouseover', () => btn.parentElement.classList.add('hov')));
learnCards.forEach(btn => btn.addEventListener('mouseleave', () => btn.parentElement.classList.remove('hov')));


// onload-setup at the end here:
window.onscroll = scrollNav;
scrollNav();