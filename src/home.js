import './css/home.css';

export default function loadHome() {
    
    const homeWrapper = document.createElement("div");
    homeWrapper.classList.add("home-page-wrapper");

    const photoDiv = document.createElement("div");
    photoDiv.classList.add("restaurant-photo");

    const reservationContainer = document.createElement("div");
    reservationContainer.classList.add("reservation-container");
    
    const reservationCta = document.createElement("div");
    reservationCta.classList.add("reservation-cta");

    const h1 = document.createElement("h1");
    h1.textContent = "SABORES QUE CONECTAN MUNDOS";

    const p = document.createElement("p");
    p.textContent = "Tradición local, giros globales. Descubre nuestra cocina fusión asiático-mediterránea en el corazón de Madrid. Un ambiente urbano, minimalista y acogedor.";

    reservationCta.appendChild(h1);
    reservationCta.appendChild(p);

    const reservationButtons = document.createElement("div");
    reservationButtons.classList.add("reservation-buttons");

    const btnReserve = document.createElement("button");
    btnReserve.id = "action-reserve";
    btnReserve.textContent = "RESERVAR MESA";

    btnReserve.addEventListener("click", () => {
        document.querySelector("#btn-reserve").click();
    })

    const btnMenu = document.createElement("button");
    btnMenu.id = "action-menu";
    btnMenu.textContent = "VER CARTA";

    btnMenu.addEventListener("click", () => {
        document.querySelector("#btn-menu").click();
    })

    reservationButtons.appendChild(btnReserve);
    reservationButtons.appendChild(btnMenu);

    reservationContainer.appendChild(reservationCta);
    reservationContainer.appendChild(reservationButtons);

    homeWrapper.appendChild(photoDiv);
    homeWrapper.appendChild(reservationContainer);

    return homeWrapper;
}