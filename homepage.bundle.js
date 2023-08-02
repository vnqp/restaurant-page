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
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-page */ "./src/pages/menu-page.js");


function loadHomepage() {
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
            homepageContentButton.onclick = () => {(0,_menu_page__WEBPACK_IMPORTED_MODULE_0__["default"])()};
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

/***/ }),

/***/ "./src/pages/menu-page.js":
/*!********************************!*\
  !*** ./src/pages/menu-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenuPage)
/* harmony export */ });
function loadMenuPage() {

  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; 
  {
    const menuTitlePlace = document.createElement('div');
    menuTitlePlace.id = 'menu-title-place';
    {
      const menuTitle = document.createElement('h1');
      menuTitle.id = 'menu-title';
      menuTitle.textContent = 'Discover Our Menu!';
      menuTitlePlace.appendChild(menuTitle);

      const menuTitleText = document.createElement('p');
      menuTitleText.id = 'menu-title-text';
      menuTitleText.textContent = 'There is a wide selection of choices approved by top chefs, prepared using best quality ingredients.';
      menuTitlePlace.appendChild(menuTitleText);
    }
    contentDiv.appendChild(menuTitlePlace);

    const menuItemsPlace = document.createElement('div');
    menuItemsPlace.id = 'menu-items-place';
    {
      menuItemsPlace.appendChild(createMenuItem('Pizza', 'pizza'));
      menuItemsPlace.appendChild(createMenuItem('Tacos', 'tacos'));
      menuItemsPlace.appendChild(createMenuItem('Hamburger', 'hamburger'));
      menuItemsPlace.appendChild(createMenuItem('Subs', 'sub'));
      menuItemsPlace.appendChild(createMenuItem('Burrito', 'burrito'));
      menuItemsPlace.appendChild(createMenuItem('Fried Chicken', 'fried-chicken'));
      menuItemsPlace.appendChild(createMenuItem('French Fries', 'french-fries'));
      menuItemsPlace.appendChild(createMenuItem('Milk Shakes', 'milk-shake'));
    }
    contentDiv.appendChild(menuItemsPlace);
  }

}

function createMenuItem(itemName, itemId) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  {
    const menuItemPhoto = document.createElement('div');
    menuItemPhoto.id = itemId;
    menuItemPhoto.classList.add('menu-item-photo');
    menuItem.appendChild(menuItemPhoto);

    const menuItemName = document.createElement('div');
    menuItemName.classList.add('menu-item-name');
    menuItemName.textContent = itemName
    menuItem.appendChild(menuItemName)
  }

  return menuItem
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/homepage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3ZDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHNEQUFZO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUtcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gJy4vbWVudS1wYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lcGFnZSgpIHtcclxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXHJcbiAge1xyXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVyby5pZCA9ICdoZXJvJztcclxuICAgIHtcclxuICAgICAgY29uc3QgaGVyb0Fib3V0UGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaGVyb0Fib3V0UGxhY2UuaWQgPSAnaGVyby1hYm91dC1wbGFjZSc7XHJcblxyXG4gICAgICBjb25zdCBoZXJvQWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgIGhlcm9BYm91dFRpdGxlLmlkID0gJ2hlcm8tYWJvdXQtdGl0bGUnO1xyXG4gICAgICBoZXJvQWJvdXRUaXRsZS50ZXh0Q29udGVudCA9ICdXaGVyZSBDdWxpbmFyeSBBcnQgTWVldHMgU3BlZWQgYW5kIFRhc3RlLic7XHJcbiAgICAgIGhlcm9BYm91dFBsYWNlLmFwcGVuZENoaWxkKGhlcm9BYm91dFRpdGxlKTtcclxuXHJcbiAgICAgIGNvbnN0IGhlcm9BYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIGhlcm9BYm91dENvbnRlbnQuaWQgPSAnaGVyby1hYm91dC1jb250ZW50JztcclxuICAgICAgaGVyb0Fib3V0Q29udGVudC50ZXh0Q29udGVudCA9ICdUaGUgd29ybGQgb2YgZmFzdCBmb29kLCByZWltYWdpbmVkLCB0cmFuc2Zvcm1pbmcgaXQgaW50byBhbiB1bnBhcmFsbGVsZWQgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCB0YW50YWxpemVzIHlvdXIgdGFzdGUgYnVkcyB3aXRoIGV2ZXJ5IGJpdGUuJztcclxuICAgICAgaGVyb0Fib3V0UGxhY2UuYXBwZW5kQ2hpbGQoaGVyb0Fib3V0Q29udGVudCk7XHJcblxyXG4gICAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9BYm91dFBsYWNlKTtcclxuXHJcbiAgICAgIGNvbnN0IGhlcm9JbWdQbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBoZXJvSW1nUGxhY2UuaWQgPSAnaGVyby1pbWctcGxhY2UnO1xyXG4gICAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9JbWdQbGFjZSk7XHJcblxyXG4gICAgfVxyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZXJvKTtcclxuXHJcbiAgICBjb25zdCBob21lcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVwYWdlQ29udGVudC5pZCA9ICdob21lcGFnZS1jb250ZW50JztcclxuICAgIHtcclxuICAgICAgY29uc3QgaG9tZXBhZ2VDb250ZW50Qm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGhvbWVwYWdlQ29udGVudEJvcmRlci5pZCA9ICdob21lcGFnZS1jb250ZW50LWJvcmRlcic7XHJcbiAgICAgIGhvbWVwYWdlQ29udGVudC5hcHBlbmRDaGlsZChob21lcGFnZUNvbnRlbnRCb3JkZXIpXHJcblxyXG4gICAgICBjb25zdCBob21lcGFnZUNvbnRlbnRJbWdQbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBob21lcGFnZUNvbnRlbnRJbWdQbGFjZS5pZCA9ICdob21lcGFnZS1jb250ZW50LWltZy1wbGFjZSc7XHJcbiAgICAgIHtcclxuICAgICAgICBjb25zdCBob21lcGFnZUNvbnRlbnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBob21lcGFnZUNvbnRlbnRJbWcuaWQgPSAnaG9tZXBhZ2UtY29udGVudC1pbWcnO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnN0IGhvbWVwYWdlQ29udGVudEltZ1NoYWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICBob21lcGFnZUNvbnRlbnRJbWdTaGFkZS5pZCA9ICdob21lcGFnZS1jb250ZW50LWltZy1zaGFkZSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgaG9tZXBhZ2VDb250ZW50SW1nQnV0dG9uUGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgIGhvbWVwYWdlQ29udGVudEltZ0J1dHRvblBsYWNlLmlkID0gJ2hvbWVwYWdlLWNvbnRlbnQtaW1nLWJ1dHRvbi1wbGFjZSc7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGhvbWVwYWdlQ29udGVudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBob21lcGFnZUNvbnRlbnRCdXR0b24uaWQgPSAnaG9tZXBhZ2UtY29udGVudC1idXR0b24nO1xyXG4gICAgICAgICAgICBob21lcGFnZUNvbnRlbnRCdXR0b24udGV4dENvbnRlbnQgPSBcIk9SREVSIE5PVyFcIjsgXHJcbiAgICAgICAgICAgIGhvbWVwYWdlQ29udGVudEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge2xvYWRNZW51UGFnZSgpfTtcclxuICAgICAgICAgICAgaG9tZXBhZ2VDb250ZW50SW1nQnV0dG9uUGxhY2UuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VDb250ZW50QnV0dG9uKTtcclxuXHJcbiAgICAgICAgICBob21lcGFnZUNvbnRlbnRJbWdTaGFkZS5hcHBlbmRDaGlsZChob21lcGFnZUNvbnRlbnRJbWdCdXR0b25QbGFjZSk7XHJcbiAgICAgICAgICBob21lcGFnZUNvbnRlbnRJbWcuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VDb250ZW50SW1nU2hhZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBob21lcGFnZUNvbnRlbnRJbWdQbGFjZS5hcHBlbmRDaGlsZChob21lcGFnZUNvbnRlbnRJbWcpO1xyXG4gICAgICB9XHJcbiAgICAgIGhvbWVwYWdlQ29udGVudC5hcHBlbmRDaGlsZChob21lcGFnZUNvbnRlbnRJbWdQbGFjZSk7XHJcbiAgICB9XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVwYWdlQ29udGVudCk7XHJcbiAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpIHtcclxuXHJcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJzsgXHJcbiAge1xyXG4gICAgY29uc3QgbWVudVRpdGxlUGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVUaXRsZVBsYWNlLmlkID0gJ21lbnUtdGl0bGUtcGxhY2UnO1xyXG4gICAge1xyXG4gICAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICBtZW51VGl0bGUuaWQgPSAnbWVudS10aXRsZSc7XHJcbiAgICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdEaXNjb3ZlciBPdXIgTWVudSEnO1xyXG4gICAgICBtZW51VGl0bGVQbGFjZS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xyXG5cclxuICAgICAgY29uc3QgbWVudVRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgbWVudVRpdGxlVGV4dC5pZCA9ICdtZW51LXRpdGxlLXRleHQnO1xyXG4gICAgICBtZW51VGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ1RoZXJlIGlzIGEgd2lkZSBzZWxlY3Rpb24gb2YgY2hvaWNlcyBhcHByb3ZlZCBieSB0b3AgY2hlZnMsIHByZXBhcmVkIHVzaW5nIGJlc3QgcXVhbGl0eSBpbmdyZWRpZW50cy4nO1xyXG4gICAgICBtZW51VGl0bGVQbGFjZS5hcHBlbmRDaGlsZChtZW51VGl0bGVUZXh0KTtcclxuICAgIH1cclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudVRpdGxlUGxhY2UpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVJdGVtc1BsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51SXRlbXNQbGFjZS5pZCA9ICdtZW51LWl0ZW1zLXBsYWNlJztcclxuICAgIHtcclxuICAgICAgbWVudUl0ZW1zUGxhY2UuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ1BpenphJywgJ3BpenphJykpO1xyXG4gICAgICBtZW51SXRlbXNQbGFjZS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnVGFjb3MnLCAndGFjb3MnKSk7XHJcbiAgICAgIG1lbnVJdGVtc1BsYWNlLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdIYW1idXJnZXInLCAnaGFtYnVyZ2VyJykpO1xyXG4gICAgICBtZW51SXRlbXNQbGFjZS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnU3VicycsICdzdWInKSk7XHJcbiAgICAgIG1lbnVJdGVtc1BsYWNlLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdCdXJyaXRvJywgJ2J1cnJpdG8nKSk7XHJcbiAgICAgIG1lbnVJdGVtc1BsYWNlLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdGcmllZCBDaGlja2VuJywgJ2ZyaWVkLWNoaWNrZW4nKSk7XHJcbiAgICAgIG1lbnVJdGVtc1BsYWNlLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdGcmVuY2ggRnJpZXMnLCAnZnJlbmNoLWZyaWVzJykpO1xyXG4gICAgICBtZW51SXRlbXNQbGFjZS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnTWlsayBTaGFrZXMnLCAnbWlsay1zaGFrZScpKTtcclxuICAgIH1cclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1zUGxhY2UpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGl0ZW1OYW1lLCBpdGVtSWQpIHtcclxuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xyXG4gIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtUGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVJdGVtUGhvdG8uaWQgPSBpdGVtSWQ7XHJcbiAgICBtZW51SXRlbVBob3RvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1waG90bycpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1QaG90byk7XHJcblxyXG4gICAgY29uc3QgbWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51SXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLW5hbWUnKTtcclxuICAgIG1lbnVJdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW1OYW1lXHJcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbU5hbWUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVudUl0ZW1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==