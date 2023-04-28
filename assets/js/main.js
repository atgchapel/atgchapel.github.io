(function currentPage () {
  let links = document.querySelectorAll(`#navigation > ul > li`);
  for (let x of links) {
    x.addEventListener(`click`, ()=>{
      let active = document.querySelector(`.active`).className = "";
        x.className = "active";
      x = 0;
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
  if (document.getElementsByClassName("slideshow").length > 0) {
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

function figure (imgSrc, figcaption) {
  return `<figure>
  <img src = "${imgSrc}">
  <figcaption>"${figcaption}"</figcaption>
  </figure>`;
}
function renderPastoralTeam (callback) {
  if (document.querySelectorAll(`.pastoral-team`).length > 0) {
    let pastoralTeam = document.querySelector(`.pastoral-team`);
  pastoralTeam.innerHTML = [callback("/assets/images/pastoral-team/1.png","Apostle Francis Musili"),
  callback("/assets/images/pastoral-team/02.png","Rev Cecilia Musili"),
  callback("/assets/images/pastoral-team/03.jpg","Rev Alexander Kilonzo(Resident Pst)"),
  callback("/assets/images/pastoral-team/04.jpg","Rev Victor Kitema (Administrative Pst)"),
  callback("/assets/images/pastoral-team/05.jpg","Pst Sarah Mutinda"),
  callback("/assets/images/pastoral-team/06.jpg","Pst John Ngari"),
  callback("/assets/images/pastoral-team/07.jpg","Pst Erick Maosa(Youth Pastor)"),
  callback("/assets/images/pastoral-team/08.jpg","Regina Ochieng-Deaconess"),
  callback("/assets/images/pastoral-team/09.jpg","Agnes Nyagena-Deaconess"),
  callback("/assets/images/pastoral-team/10.jpg","Pst May Mchana"),
  callback("/assets/images/pastoral-team/11.jpg","Pst Jane Maosa"),
  callback("/assets/images/pastoral-team/12.jpg","Pst Winfred Nzioka"),
  callback("/assets/images/pastoral-team/13.jpg","Pst Doreen Murungi"),
  callback("/assets/images/pastoral-team/14.jpg","Pst Rosemary Nyambura"),
  callback("/assets/images/pastoral-team/15.jpg","Pst Petronillah Kasyoki"),
  callback("/assets/images/pastoral-team/16.jpg","Pst Rebecca Dancan"),
  callback("/assets/images/pastoral-team/17.jpg","Pst Pauline Victor"),
  callback("/assets/images/pastoral-team/18.jpg","Pst Dancan Kisinga"),
  callback("/assets/images/pastoral-team/19.jpg","Pst Kamweru"),
  callback("/assets/images/pastoral-team/20.jpg","Julius Kyemba- deacon"),
  callback("/assets/images/pastoral-team/22.jpg","Pst Juliana Moraa"),
  callback("/assets/images/pastoral-team/23.jpg","Elder ALlbert Omoke"),
  callback("/assets/images/pastoral-team/24.jpg","Pst Bernard Mwendwa"),
  callback("/assets/images/pastoral-team/25.jpg","Julian Ndeke-deaconess"),
  callback("/assets/images/pastoral-team/26.jpg","Antony Kilile-Elder"),
  callback("/assets/images/pastoral-team/27.jpg","Mary Katindi - Elder"),
  callback("/assets/images/pastoral-team/28.jpg","Ndambuki - deacon"),
  callback("/assets/images/pastoral-team/29.jpg","Mercy Nyaguthii-Deaconess"),
  callback("/assets/images/pastoral-team/30.jpg","Ben Ochieng-Deacon"),
  callback("/assets/images/pastoral-team/31.jpg","Diana Ngonyo-Deaconess"),
  callback("/assets/images/pastoral-team/32.jpg","Hope Mchana Deaconess"),
  callback("/assets/images/pastoral-team/33.jpg","James Mbiti-Deacon"),
  callback("/assets/images/pastoral-team/34.jpg","Juliana Nzau-Deaconess"),
  callback("/assets/images/pastoral-team/35.jpg","Magret -deaconess")].join("");

  let apostleImages = document.querySelectorAll(`.pastoral-team figure`);
  apostleImages[0].className = `apostle`;
  apostleImages[1].className = `apostle`;
  }
}
renderPastoralTeam(figure);

function crusadeImages (callback) {
  if(document.querySelectorAll(`.crusade-image-gallery`).length > 0) {
    let imageDiv = document.querySelector(`.crusade-image-gallery`);
  imageDiv.innerHTML = [callback("/assets/images/ministries/crusades/c1.jpg",""),
  callback("/assets/images/ministries/crusades/c2.jpg", ""),
  callback("/assets/images/ministries/crusades/c3.jpg", ""),
  callback("/assets/images/ministries/crusades/c4.jpg", ""),
  callback("/assets/images/ministries/crusades/c5.jpg", ""),
  callback("/assets/images/ministries/crusades/c6.jpg", ""),].join('');;
  }
}
crusadeImages(figure);