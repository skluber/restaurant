import './css/base.css';
import './css/header.css';
import './css/footer.css';

import loadHome from "./home.js";
import loadMenu from "./menu.js";

const mainContent = document.querySelector("#content")

function renderPage(pageFunction) {
    mainContent.innerHTML = "";
    mainContent.appendChild(pageFunction());
}

function setupNavigation() {
    const btnHome = document.querySelector("#btn-home");
    const btnMenu = document.querySelector("#btn-menu");
    const btnReserve = document.querySelector("#btn-reserve");
    const btnContact = document.querySelector("#btn-contact");

    btnHome.addEventListener("click", () => renderPage(loadHome));
    btnMenu.addEventListener("click", () => renderPage(loadMenu));
    btnReserve.addEventListener("click", () => renderPage(loadHome));
    btnContact.addEventListener("click", () => renderPage(loadHome));
}

setupNavigation();
renderPage(loadHome);
