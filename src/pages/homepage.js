import loadMenuPage from './menu-page';

export default function loadHomepage() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''
  {
    const hero = document.createElement('div');
    hero.id = 'hero';
    {
      const heroAboutPlace = document.createElement('div');
      heroAboutPlace.id = 'hero-about-place';

      const heroAboutTitle = document.createElement('h2');
      heroAboutTitle.id = 'hero-about-title';
      heroAboutTitle.textContent = 'Where Culinary Art Meets Speed and Taste.';
      heroAboutPlace.appendChild(heroAboutTitle);

      const heroAboutContent = document.createElement('p');
      heroAboutContent.id = 'hero-about-content';
      heroAboutContent.textContent = 'The world of fast food, reimagined, transforming it into an unparalleled dining experience that tantalizes your taste buds with every bite.';
      heroAboutPlace.appendChild(heroAboutContent);

      hero.appendChild(heroAboutPlace);

      const heroImgPlace = document.createElement('div');
      heroImgPlace.id = 'hero-img-place';
      hero.appendChild(heroImgPlace);

    }
    contentDiv.appendChild(hero);

    const homepageContent = document.createElement('div');
    homepageContent.id = 'homepage-content';
    {
      const homepageContentBorder = document.createElement('div');
      homepageContentBorder.id = 'homepage-content-border';
      homepageContent.appendChild(homepageContentBorder)

      const homepageContentImgPlace = document.createElement('div');
      homepageContentImgPlace.id = 'homepage-content-img-place';
      {
        const homepageContentImg = document.createElement('div');
        homepageContentImg.id = 'homepage-content-img';
        {
          const homepageContentImgShade = document.createElement('div');
          homepageContentImgShade.id = 'homepage-content-img-shade';
            
          const homepageContentImgButtonPlace = document.createElement('div');
          homepageContentImgButtonPlace.id = 'homepage-content-img-button-place';
              
            const homepageContentButton = document.createElement('button');
            homepageContentButton.id = 'homepage-content-button';
            homepageContentButton.textContent = "ORDER NOW!"; 
            homepageContentButton.onclick = () => {loadMenuPage()};
            homepageContentImgButtonPlace.appendChild(homepageContentButton);

          homepageContentImgShade.appendChild(homepageContentImgButtonPlace);
          homepageContentImg.appendChild(homepageContentImgShade);
        }
        homepageContentImgPlace.appendChild(homepageContentImg);
      }
      homepageContent.appendChild(homepageContentImgPlace);
    }
    contentDiv.appendChild(homepageContent);
  }

}