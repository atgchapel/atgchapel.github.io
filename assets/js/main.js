(function currentPage () {
  let links = document.querySelectorAll(`#navigation > ul > li`);
  for (let x of links) {
    x.addEventListener(`click`, ()=>{
      let active = document.querySelector(`.active`).className = "";
      x.className = "active";
    });
  }
})();

(function displayDopdown () {
  if (document.querySelectorAll(`.ministries, .about-atg`)) {
    let dropdownsParents = document.querySelectorAll(`.ministries, .about-atg`);
  let ministries = dropdownsParents[0];
  let aboutAtg = dropdownsParents[1];
  let ministryChecker = 0;
  let aboutAtgChecker = 0;
  ministries.addEventListener(`click`, ()=>{
    if (ministryChecker == 0) {
      aboutAtg.children[1].style.display = `none`;
      ministries.children[1].style.display = `block`;
      ministryChecker = 1;
    } else if (ministryChecker == 1) {
      ministries.children[1].style.display = `none`;
      ministryChecker = 0;
    }
  });
  aboutAtg.addEventListener(`click`, ()=>{
    if (aboutAtgChecker == 0) {
      ministries.children[1].style.display = `none`;
      aboutAtg.children[1].style.display = `block`;
      aboutAtgChecker = 1;
    } else if (aboutAtgChecker == 1) {
      aboutAtg.children[1].style.display = `none`;
      aboutAtgChecker = 0;
    }
  });
  }
})();

let slideIndex = 0;
(function slideshow () {
  if (document.getElementsByClassName("slideshow")) {
    let i;
  let slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(slideshow, 5000);
  }
})();

(function renderStatementOfFaith () {
  if (document.querySelector(`.statement-of-faith a`)) {
    let statementOfFaith = document.querySelector(`.statement-of-faith a`);
    let checker = 0;
    statementOfFaith.addEventListener(`click`, (event)=>{
    event.preventDefault();
    if (checker == 0) {
      document.querySelector(`.statement-of-faith p`).style.display = `block`;
    document.querySelector(`.fa-solid.fa-caret-down`).style.display = `none`;
    document.querySelector(`.fa-solid.fa-caret-up`).style.display = `inline`;
    checker = 1;
    } else if (checker == 1) {
      document.querySelector(`.statement-of-faith p`).style.display = `none`;
    document.querySelector(`.fa-solid.fa-caret-down`).style.display = `inline`;
    document.querySelector(`.fa-solid.fa-caret-up`).style.display = `none`;
    checker = 0;
    }
  });
  }
})();