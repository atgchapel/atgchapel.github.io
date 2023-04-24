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
console.log(location.pathname)