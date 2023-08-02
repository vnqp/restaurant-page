"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["aboutpage"],{

/***/ "./src/pages/about-page.js":
/*!*********************************!*\
  !*** ./src/pages/about-page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAboutPage)
/* harmony export */ });
function loadAboutPage () {
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/about-page.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXRwYWdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYWJvdXQtcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQWJvdXRQYWdlICgpIHtcclxuICBjb25zdCBtYWluQ29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgbWFpbkNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgYWJvdXRDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dENvbnRlbnREaXYuaWQgPSBcImFib3V0LWNvbnRlbnRcIjtcclxuXHJcbiAgICAgIGNvbnN0IGFib3V0Q29udGVudExlZnRUaXRsZVBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGFib3V0Q29udGVudExlZnRUaXRsZVBsYWNlLmlkID0gXCJhYm91dC1jb250ZW50LWxlZnQtdGl0bGUtcGxhY2VcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYWJvdXRDb250ZW50TGVmdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBhYm91dENvbnRlbnRMZWZ0VGl0bGUuaWQgPSAnYWJvdXQtY29udGVudC1sZWZ0LXRpdGxlJztcclxuICAgICAgICBhYm91dENvbnRlbnRMZWZ0VGl0bGUuaW5uZXJUZXh0ID0gJ0Fib3V0IFVzISc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWJvdXRDb250ZW50TGVmdFRpdGxlSW1nQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFib3V0Q29udGVudExlZnRUaXRsZUltZ0FyZWEuaWQgPSAnYWJvdXQtY29udGVudC1sZWZ0LXRpdGxlLWltZy1hcmVhJztcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgYWJvdXRDb250ZW50TGVmdFRpdGxlSW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgYWJvdXRDb250ZW50TGVmdFRpdGxlSW1nMS5pZCA9ICdhYm91dC1jb250ZW50LWxlZnQtdGl0bGUtaW1nLTEnO1xyXG4gICAgICAgICAgYWJvdXRDb250ZW50TGVmdFRpdGxlSW1nMS5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250ZW50LWxlZnQtdGl0bGUtaW1nJyk7XHJcbiAgICAgICAgICBhYm91dENvbnRlbnRMZWZ0VGl0bGVJbWdBcmVhLmFwcGVuZENoaWxkKGFib3V0Q29udGVudExlZnRUaXRsZUltZzEpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGFib3V0Q29udGVudExlZnRUaXRsZUltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgIGFib3V0Q29udGVudExlZnRUaXRsZUltZzIuaWQgPSAnYWJvdXQtY29udGVudC1sZWZ0LXRpdGxlLWltZy0yJztcclxuICAgICAgICAgIGFib3V0Q29udGVudExlZnRUaXRsZUltZzIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGVudC1sZWZ0LXRpdGxlLWltZycpO1xyXG4gICAgICAgICAgYWJvdXRDb250ZW50TGVmdFRpdGxlSW1nQXJlYS5hcHBlbmRDaGlsZChhYm91dENvbnRlbnRMZWZ0VGl0bGVJbWcyKTtcclxuXHJcbiAgICAgIGFib3V0Q29udGVudExlZnRUaXRsZVBsYWNlLmFwcGVuZENoaWxkKGFib3V0Q29udGVudExlZnRUaXRsZSk7XHJcbiAgICAgIGFib3V0Q29udGVudExlZnRUaXRsZVBsYWNlLmFwcGVuZENoaWxkKGFib3V0Q29udGVudExlZnRUaXRsZUltZ0FyZWEpO1xyXG5cclxuICAgICAgY29uc3QgYWJvdXRDb250ZW50VGV4dFBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGFib3V0Q29udGVudFRleHRQbGFjZS5pZCA9ICdhYm91dC1jb250ZW50LXRleHQtcGxhY2UnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFib3V0Q29udGVudFRleHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgYWJvdXRDb250ZW50VGV4dFRpdGxlLmlkID0gJ2Fib3V0LWNvbnRlbnQtdGV4dC10aXRsZSc7XHJcbiAgICAgICAgYWJvdXRDb250ZW50VGV4dFRpdGxlLmlubmVyVGV4dCA9ICdRcG93ZXIsIEVsZXZhdGluZyBGYXN0IEZvb2QgdG8gRmluZSBEaW5pbmchJztcclxuXHJcbiAgICAgICAgY29uc3QgYWJvdXRDb250ZW50VGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgYWJvdXRDb250ZW50VGV4dDEuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGVudC10ZXh0Jyk7XHJcbiAgICAgICAgYWJvdXRDb250ZW50VGV4dDEudGV4dENvbnRlbnQgPSAnWW91ciBvbmUgZGlyZWN0aW9uIHRvIGhpZ2gtcXVhbGl0eSBmYXN0IGZvb2QsIHNlcnZpbmcgc2luY2UgMTk5OCBpbiBCcmF6aWwuIExvY2FscyB3aG8gYXJlIHByb3VkIG9mIHRoZSBjb3VudHJ5IGFuZCB3YW50IHRvIGludHJvZHVjZSBpdCB0byB2aXNpdG9ycyBmcm9tIGFyb3VuZCB0aGUgd29ybGQuJztcclxuXHJcbiAgICAgICAgY29uc3QgYWJvdXRDb250ZW50VGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgYWJvdXRDb250ZW50VGV4dDIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGVudC10ZXh0Jyk7XHJcbiAgICAgICAgYWJvdXRDb250ZW50VGV4dDIudGV4dENvbnRlbnQgPSAnV2UgYXJlIHBlcmZlY3RseSBwb3NpdGlvbmVkIHRvIHByb3ZpZGUgb3VyIGd1ZXN0cyB3aXRoIGFuIGV4dHJhb3JkaW5hcnkgaGVhbHRoIGV4cGVyaWVuY2UgdW5saWtlIGFueSB0aGV54oCZdmUgZXZlciB0YXN0ZWQuIFdlIGNhbiBjb25maWRlbnRseSBjbGFpbSB0aGF0IG91ciBtZW51IGlzIHVubGlrZSBhbnl0aGluZyBlbHNlIG9mZmVyZWQgaW4gdGhlIGluZHVzdHJ5Lic7XHJcblxyXG4gICAgICAgIGNvbnN0IGFib3V0Q29udGVudFRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGFib3V0Q29udGVudFRleHQzLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRlbnQtdGV4dCcpO1xyXG4gICAgICAgIGFib3V0Q29udGVudFRleHQzLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZmluaWJ1cyBtYXVyaXMgbmVjIHRpbmNpZHVudCB2YXJpdXMuIFV0IHNhZ2l0dGlzLCBsb3JlbSBhdCBiaWJlbmR1bSBvcm5hcmUsIG1hdXJpcyBuZXF1ZSB2ZW5lbmF0aXMganVzdG8sIHV0IGdyYXZpZGEgbWkgbmVxdWUgZXUgbG9yZW0uIFZlc3RpYnVsdW0gYXVjdG9yIGxlbyBzaXQgYW1ldCB2dWxwdXRhdGUgbW9sbGlzLiBDdXJhYml0dXIgYWMgbG9yZW0gZmVsaXMuIE1vcmJpIHVsbGFtY29ycGVyIG1heGltdXMgbG9yZW0uJztcclxuICAgICAgXHJcbiAgICAgICAgYWJvdXRDb250ZW50VGV4dFBsYWNlLmFwcGVuZENoaWxkKGFib3V0Q29udGVudFRleHRUaXRsZSk7XHJcbiAgICAgICAgYWJvdXRDb250ZW50VGV4dFBsYWNlLmFwcGVuZENoaWxkKGFib3V0Q29udGVudFRleHQxKTtcclxuICAgICAgICBhYm91dENvbnRlbnRUZXh0UGxhY2UuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50VGV4dDIpO1xyXG4gICAgICAgIGFib3V0Q29udGVudFRleHRQbGFjZS5hcHBlbmRDaGlsZChhYm91dENvbnRlbnRUZXh0Myk7XHJcblxyXG4gICAgYWJvdXRDb250ZW50RGl2LmFwcGVuZENoaWxkKGFib3V0Q29udGVudExlZnRUaXRsZVBsYWNlKTtcclxuICAgIGFib3V0Q29udGVudERpdi5hcHBlbmRDaGlsZChhYm91dENvbnRlbnRUZXh0UGxhY2UpO1xyXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKGFib3V0Q29udGVudERpdik7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=