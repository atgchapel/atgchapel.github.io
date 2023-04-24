(function renderBannerImages () {
  let images, imageIndex, timer, bannerDiv;
  images = [`/assets/images/2.jpg`,
  `/assets/images/3.jpg`,
  `/assets/images/4.jpg`,
  `/assets/images/5.jpg`,
  `/assets/images/7.jpg`,
  `/assets/images/10.jpg`,];
  bannerDiv = document.querySelector(`.welcome-banner`);
  imageIndex = 0;
  timer = 0;
  for (let i = 0; i < images.length; i++) {
    setTimeout (()=>{
      bannerDiv.innerHTML = `<img src=${images[i]}>`;
    }, timer);
    imageIndex++;
    timer += 7000;
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