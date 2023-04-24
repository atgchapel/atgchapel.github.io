(function renderBannerImages () {
  let images, imageIndex, timer, bannerDiv;
  images = [`/assets/images/c5.jpg`,
  `/assets/images/c6.jpg`,
  `/assets/images/favicon.jpg`,
  `/assets/images/c5.jpg`];
  bannerDiv = document.querySelector(`.welcome-banner`);
  imageIndex = 0;
  timer = 0;
  for (let i = 0; i < images.length; i++) {
    setTimeout (()=>{
      bannerDiv.innerHTML = `<img src=${images[i]}/>`;
    }, timer);
    imageIndex++;
    timer += 7000;
  }
})();