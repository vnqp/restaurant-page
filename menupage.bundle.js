"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menupage"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/menu-page.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudXBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS1wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpIHtcclxuXHJcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJzsgXHJcbiAge1xyXG4gICAgY29uc3QgbWVudVRpdGxlUGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVUaXRsZVBsYWNlLmlkID0gJ21lbnUtdGl0bGUtcGxhY2UnO1xyXG4gICAge1xyXG4gICAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICBtZW51VGl0bGUuaWQgPSAnbWVudS10aXRsZSc7XHJcbiAgICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdEaXNjb3ZlciBPdXIgTWVudSEnO1xyXG4gICAgICBtZW51VGl0bGVQbGFjZS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xyXG5cclxuICAgICAgY29uc3QgbWVudVRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgbWVudVRpdGxlVGV4dC5pZCA9ICdtZW51LXRpdGxlLXRleHQnO1xyXG4gICAgICBtZW51VGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ1RoZXJlIGlzIGEgd2lkZSBzZWxlY3Rpb24gb2YgY2hvaWNlcyBhcHByb3ZlZCBieSB0b3AgY2hlZnMsIHByZXBhcmVkIHVzaW5nIGJlc3QgcXVhbGl0eSBpbmdyZWRpZW50cy4nO1xyXG4gICAgICBtZW51VGl0bGVQbGFjZS5hcHBlbmRDaGlsZChtZW51VGl0bGVUZXh0KTtcclxuICAgIH1cclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudVRpdGxlUGxhY2UpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVJdGVtc1BsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51SXRlbXNQbGFjZS5pZCA9ICdtZW51LWl0ZW1zLXBsYWNlJztcclxuICAgIHtcclxuICAgICAgbWVudUl0ZW1zUGxhY2UuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ1BpenphJywgJ3BpenphJykpO1xyXG4gICAgICBtZW51SXRlbXNQbGFjZS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnVGFjb3MnLCAndGFjb3MnKSk7XHJcbiAgICAgIG1lbnVJdGVtc1BsYWNlLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdIYW1idXJnZXInLCAnaGFtYnVyZ2VyJykpO1xyXG4gICAgICBtZW51SXRlbXNQbGFjZS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnU3VicycsICdzdWInKSk7XHJcbiAgICAgIG1lbnVJdGVtc1BsYWNlLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdCdXJyaXRvJywgJ2J1cnJpdG8nKSk7XHJcbiAgICAgIG1lbnVJdGVtc1BsYWNlLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdGcmllZCBDaGlja2VuJywgJ2ZyaWVkLWNoaWNrZW4nKSk7XHJcbiAgICAgIG1lbnVJdGVtc1BsYWNlLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdGcmVuY2ggRnJpZXMnLCAnZnJlbmNoLWZyaWVzJykpO1xyXG4gICAgICBtZW51SXRlbXNQbGFjZS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnTWlsayBTaGFrZXMnLCAnbWlsay1zaGFrZScpKTtcclxuICAgIH1cclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1zUGxhY2UpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGl0ZW1OYW1lLCBpdGVtSWQpIHtcclxuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xyXG4gIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtUGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVJdGVtUGhvdG8uaWQgPSBpdGVtSWQ7XHJcbiAgICBtZW51SXRlbVBob3RvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1waG90bycpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1QaG90byk7XHJcblxyXG4gICAgY29uc3QgbWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51SXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLW5hbWUnKTtcclxuICAgIG1lbnVJdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW1OYW1lXHJcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbU5hbWUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVudUl0ZW1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==