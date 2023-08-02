export default function loadAboutPage () {
  const mainContentDiv = document.getElementById('content');
  mainContentDiv.innerHTML = '';

    const aboutContentDiv = document.createElement('div');
    aboutContentDiv.id = "about-content";

      const aboutContentLeftTitlePlace = document.createElement('div');
      aboutContentLeftTitlePlace.id = "about-content-left-title-place";

        const aboutContentLeftTitle = document.createElement('h1');
        aboutContentLeftTitle.id = 'about-content-left-title';
        aboutContentLeftTitle.innerText = 'About Us!';
        
        const aboutContentLeftTitleImgArea = document.createElement('div');
        aboutContentLeftTitleImgArea.id = 'about-content-left-title-img-area';
          
          const aboutContentLeftTitleImg1 = document.createElement('div');
          aboutContentLeftTitleImg1.id = 'about-content-left-title-img-1';
          aboutContentLeftTitleImg1.classList.add('about-content-left-title-img');
          aboutContentLeftTitleImgArea.appendChild(aboutContentLeftTitleImg1);

          const aboutContentLeftTitleImg2 = document.createElement('div');
          aboutContentLeftTitleImg2.id = 'about-content-left-title-img-2';
          aboutContentLeftTitleImg2.classList.add('about-content-left-title-img');
          aboutContentLeftTitleImgArea.appendChild(aboutContentLeftTitleImg2);

      aboutContentLeftTitlePlace.appendChild(aboutContentLeftTitle);
      aboutContentLeftTitlePlace.appendChild(aboutContentLeftTitleImgArea);

      const aboutContentTextPlace = document.createElement('div');
      aboutContentTextPlace.id = 'about-content-text-place';
        
        const aboutContentTextTitle = document.createElement('h3');
        aboutContentTextTitle.id = 'about-content-text-title';
        aboutContentTextTitle.innerText = 'Qpower, Elevating Fast Food to Fine Dining!';

        const aboutContentText1 = document.createElement('p');
        aboutContentText1.classList.add('about-content-text');
        aboutContentText1.textContent = 'Your one direction to high-quality fast food, serving since 1998 in Brazil. Locals who are proud of the country and want to introduce it to visitors from around the world.';

        const aboutContentText2 = document.createElement('p');
        aboutContentText2.classList.add('about-content-text');
        aboutContentText2.textContent = 'We are perfectly positioned to provide our guests with an extraordinary health experience unlike any they’ve ever tasted. We can confidently claim that our menu is unlike anything else offered in the industry.';

        const aboutContentText3 = document.createElement('p');
        aboutContentText3.classList.add('about-content-text');
        aboutContentText3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus mauris nec tincidunt varius. Ut sagittis, lorem at bibendum ornare, mauris neque venenatis justo, ut gravida mi neque eu lorem. Vestibulum auctor leo sit amet vulputate mollis. Curabitur ac lorem felis. Morbi ullamcorper maximus lorem.';
      
        aboutContentTextPlace.appendChild(aboutContentTextTitle);
        aboutContentTextPlace.appendChild(aboutContentText1);
        aboutContentTextPlace.appendChild(aboutContentText2);
        aboutContentTextPlace.appendChild(aboutContentText3);

    aboutContentDiv.appendChild(aboutContentLeftTitlePlace);
    aboutContentDiv.appendChild(aboutContentTextPlace);
  mainContentDiv.appendChild(aboutContentDiv);
}