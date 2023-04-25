let slideIndex = 0;
(function slideshow () {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(slideshow, 5000);
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