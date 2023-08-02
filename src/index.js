import "./styles/style.css";
import "./styles/homepage.css";
import "./styles/about-page.css"
import loadHomePage from './pages/homepage';
import loadAboutPage from './pages/about-page';

window.onload = loadHomePage();

const homePageLink = document.getElementById('home-link');
homePageLink.addEventListener('click', homePageLinkClick, false)

function homePageLinkClick(event) {
  loadHomePage();

  event.preventDefault();
}

const aboutLink = document.getElementById('about-link');
aboutLink.addEventListener('click', aboutLinkClick, false);

function aboutLinkClick(event) {
  loadAboutPage();

  event.preventDefault();
}

