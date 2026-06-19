import './css/base.css';
import './css/header.css';
import './css/footer.css';

import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadReserve from "./reserve.js";

const mainContent = document.querySelector("#content")

function renderPage(pageFunction) {
    mainContent.classList.remove("fade-in");

    setTimeout(() => {
        mainContent.innerHTML = "";
        mainContent.appendChild(pageFunction());

        window.scrollTo(0, 0);
        
        requestAnimationFrame(() => {
            mainContent.classList.add("fade-in");
        })
    }, 300);

    
}

function setupNavigation() {
    const btnHome = document.querySelector("#btn-home");
    const btnMenu = document.querySelector("#btn-menu");
    const btnReserve = document.querySelector("#btn-reserve");


    btnHome.addEventListener("click", () => renderPage(loadHome));
    btnMenu.addEventListener("click", () => renderPage(loadMenu));
    btnReserve.addEventListener("click", () => renderPage(loadReserve));
}

function inicializarWeb(pageFunction) {
    mainContent.innerHTML = "";
    mainContent.appendChild(pageFunction());
    
    setTimeout(() => {
        mainContent.classList.add("fade-in");
    }, 300);
}

setupNavigation();
inicializarWeb(loadHome);
