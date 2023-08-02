import "./styles/style.css";
import "./styles/homepage.css";
import "./styles/about-page.css";
import "./styles/menu-page.css";
import loadHomePage from './pages/homepage';
import loadAboutPage from './pages/about-page';
import loadMenuPage from './pages/menu-page';

loadMenuPage();
window.onload = loadHomePage();

{
  const homePageLink = document.getElementById('home-link');
  homePageLink.addEventListener('click', homePageLinkClick, false)

  function homePageLinkClick(event) {
    loadHomePage();

    event.preventDefault();
  }
}
{
  const menuLink = document.getElementById('menu-link');
  menuLink.addEventListener('click', menuLinkClick, false);

  const HeaderMenuButton = document.getElementById('header-button');
  HeaderMenuButton.addEventListener('click', menuLinkClick, false);

  function menuLinkClick(event) {
    loadMenuPage();

    event.preventDefault();
  }
}
{
  const aboutLink = document.getElementById('about-link');
  aboutLink.addEventListener('click', aboutLinkClick, false);

  function aboutLinkClick(event) {
    loadAboutPage();

    event.preventDefault();
  }
}