"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["homepage"],{

/***/ "./src/pages/homepage.js":
/*!*******************************!*\
  !*** ./src/pages/homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHomepage)
/* harmony export */ });
function loadHomepage() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''

  const hero = document.createElement('div');
  hero.id = 'hero';

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

  contentDiv.appendChild(hero);

  const homepageContent = document.createElement('div');
  homepageContent.id = 'homepage-content';

  const homepageContentBorder = document.createElement('div');
  homepageContentBorder.id = 'homepage-content-border';
  homepageContent.appendChild(homepageContentBorder)

  const homepageContentImgPlace = document.createElement('div');
  homepageContentImgPlace.id = 'homepage-content-img-place';
    
  const homepageContentImg = document.createElement('div');
    homepageContentImg.id = 'homepage-content-img';
      
    const homepageContentImgShade = document.createElement('div');
      homepageContentImgShade.id = 'homepage-content-img-shade';
        
      const homepageContentImgButtonPlace = document.createElement('div');
        homepageContentImgButtonPlace.id = 'homepage-content-img-button-place';
          
        const homepageContentButton = document.createElement('button');
          homepageContentButton.id = 'homepage-content-button';
          homepageContentButton.textContent = "ORDER NOW!"; 
          homepageContentImgButtonPlace.appendChild(homepageContentButton);

      homepageContentImgShade.appendChild(homepageContentImgButtonPlace);

    homepageContentImg.appendChild(homepageContentImgShade)

  homepageContentImgPlace.appendChild(homepageContentImg);

  homepageContent.appendChild(homepageContentImgPlace);

  contentDiv.appendChild(homepageContent);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/homepage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWVwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lcGFnZSgpIHtcclxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXHJcblxyXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBoZXJvLmlkID0gJ2hlcm8nO1xyXG5cclxuICBjb25zdCBoZXJvQWJvdXRQbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhlcm9BYm91dFBsYWNlLmlkID0gJ2hlcm8tYWJvdXQtcGxhY2UnO1xyXG5cclxuICBjb25zdCBoZXJvQWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgaGVyb0Fib3V0VGl0bGUuaWQgPSAnaGVyby1hYm91dC10aXRsZSc7XHJcbiAgaGVyb0Fib3V0VGl0bGUudGV4dENvbnRlbnQgPSAnV2hlcmUgQ3VsaW5hcnkgQXJ0IE1lZXRzIFNwZWVkIGFuZCBUYXN0ZS4nO1xyXG4gIGhlcm9BYm91dFBsYWNlLmFwcGVuZENoaWxkKGhlcm9BYm91dFRpdGxlKTtcclxuXHJcbiAgY29uc3QgaGVyb0Fib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBoZXJvQWJvdXRDb250ZW50LmlkID0gJ2hlcm8tYWJvdXQtY29udGVudCc7XHJcbiAgaGVyb0Fib3V0Q29udGVudC50ZXh0Q29udGVudCA9ICdUaGUgd29ybGQgb2YgZmFzdCBmb29kLCByZWltYWdpbmVkLCB0cmFuc2Zvcm1pbmcgaXQgaW50byBhbiB1bnBhcmFsbGVsZWQgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCB0YW50YWxpemVzIHlvdXIgdGFzdGUgYnVkcyB3aXRoIGV2ZXJ5IGJpdGUuJztcclxuICBoZXJvQWJvdXRQbGFjZS5hcHBlbmRDaGlsZChoZXJvQWJvdXRDb250ZW50KTtcclxuXHJcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvQWJvdXRQbGFjZSk7XHJcblxyXG4gIGNvbnN0IGhlcm9JbWdQbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhlcm9JbWdQbGFjZS5pZCA9ICdoZXJvLWltZy1wbGFjZSc7XHJcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvSW1nUGxhY2UpO1xyXG5cclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlcm8pO1xyXG5cclxuICBjb25zdCBob21lcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob21lcGFnZUNvbnRlbnQuaWQgPSAnaG9tZXBhZ2UtY29udGVudCc7XHJcblxyXG4gIGNvbnN0IGhvbWVwYWdlQ29udGVudEJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvbWVwYWdlQ29udGVudEJvcmRlci5pZCA9ICdob21lcGFnZS1jb250ZW50LWJvcmRlcic7XHJcbiAgaG9tZXBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGhvbWVwYWdlQ29udGVudEJvcmRlcilcclxuXHJcbiAgY29uc3QgaG9tZXBhZ2VDb250ZW50SW1nUGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob21lcGFnZUNvbnRlbnRJbWdQbGFjZS5pZCA9ICdob21lcGFnZS1jb250ZW50LWltZy1wbGFjZSc7XHJcbiAgICBcclxuICBjb25zdCBob21lcGFnZUNvbnRlbnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVwYWdlQ29udGVudEltZy5pZCA9ICdob21lcGFnZS1jb250ZW50LWltZyc7XHJcbiAgICAgIFxyXG4gICAgY29uc3QgaG9tZXBhZ2VDb250ZW50SW1nU2hhZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaG9tZXBhZ2VDb250ZW50SW1nU2hhZGUuaWQgPSAnaG9tZXBhZ2UtY29udGVudC1pbWctc2hhZGUnO1xyXG4gICAgICAgIFxyXG4gICAgICBjb25zdCBob21lcGFnZUNvbnRlbnRJbWdCdXR0b25QbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhvbWVwYWdlQ29udGVudEltZ0J1dHRvblBsYWNlLmlkID0gJ2hvbWVwYWdlLWNvbnRlbnQtaW1nLWJ1dHRvbi1wbGFjZSc7XHJcbiAgICAgICAgICBcclxuICAgICAgICBjb25zdCBob21lcGFnZUNvbnRlbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgIGhvbWVwYWdlQ29udGVudEJ1dHRvbi5pZCA9ICdob21lcGFnZS1jb250ZW50LWJ1dHRvbic7XHJcbiAgICAgICAgICBob21lcGFnZUNvbnRlbnRCdXR0b24udGV4dENvbnRlbnQgPSBcIk9SREVSIE5PVyFcIjsgXHJcbiAgICAgICAgICBob21lcGFnZUNvbnRlbnRJbWdCdXR0b25QbGFjZS5hcHBlbmRDaGlsZChob21lcGFnZUNvbnRlbnRCdXR0b24pO1xyXG5cclxuICAgICAgaG9tZXBhZ2VDb250ZW50SW1nU2hhZGUuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VDb250ZW50SW1nQnV0dG9uUGxhY2UpO1xyXG5cclxuICAgIGhvbWVwYWdlQ29udGVudEltZy5hcHBlbmRDaGlsZChob21lcGFnZUNvbnRlbnRJbWdTaGFkZSlcclxuXHJcbiAgaG9tZXBhZ2VDb250ZW50SW1nUGxhY2UuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VDb250ZW50SW1nKTtcclxuXHJcbiAgaG9tZXBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGhvbWVwYWdlQ29udGVudEltZ1BsYWNlKTtcclxuXHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChob21lcGFnZUNvbnRlbnQpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9