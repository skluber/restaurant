import './css/reserve.css';

export default function loadReserve() {
    const reserveWrapper = document.createElement("div");
    reserveWrapper.classList.add("reserve-page-wrapper");

    // 1. Encabezado de la página (Headline)
    const headline = document.createElement("div");
    headline.classList.add("headline");

    const h2 = document.createElement("h2");
    h2.textContent = "RESERVA TU MESA";

    const p = document.createElement("p");
    p.textContent = "Únete a nosotros para una experiencia gastronómica única. Asegura tu lugar y déjate sorprender por nuestra fusión asiático-mediterránea.";

    headline.appendChild(h2);
    headline.appendChild(p);
    reserveWrapper.appendChild(headline);

    // 2. Contenedor del Formulario
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    const form = document.createElement("form");
    form.id = "booking-form";
    // Evitamos que recargue la página al hacer submit (típico de SPAs)
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("¡Reserva confirmada! Te esperamos en Umami & Co.");
    });

    // Función auxiliar para crear los grupos de inputs rápidamente
    function createFormGroup(labelText, inputElement) {
        const group = document.createElement("div");
        group.classList.add("form-group");

        const label = document.createElement("label");
        label.textContent = labelText;
        label.setAttribute("for", inputElement.id);

        group.appendChild(label);
        group.appendChild(inputElement);
        return group;
    }

    // --- Campos del Formulario ---

    // Nombre
    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.id = "customer-name";
    inputName.placeholder = "Tu nombre completo";
    inputName.required = true;
    form.appendChild(createFormGroup("Nombre Completo", inputName));

    // Teléfono
    const inputPhone = document.createElement("input");
    inputPhone.type = "tel";
    inputPhone.id = "customer-phone";
    inputPhone.placeholder = "+34 600 000 000";
    inputPhone.required = true;
    form.appendChild(createFormGroup("Teléfono de Contacto", inputPhone));

    // Comensales (Select)
    const selectGuests = document.createElement("select");
    selectGuests.id = "booking-guests";
    for (let i = 1; i <= 8; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `${i} ${i === 1 ? 'Persona' : 'Personas'}`;
        selectGuests.appendChild(option);
    }
    form.appendChild(createFormGroup("Número de Comensales", selectGuests));

    // Fecha
    const inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.id = "booking-date";
    inputDate.required = true;
    form.appendChild(createFormGroup("Fecha", inputDate));

    // Hora (Select con turnos del restaurante)
    const selectTime = document.createElement("select");
    selectTime.id = "booking-time";
    const shifts = ["13:00", "13:30", "14:00", "14:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
    shifts.forEach(time => {
        const option = document.createElement("option");
        option.value = time;
        option.textContent = time;
        selectTime.appendChild(option);
    });
    form.appendChild(createFormGroup("Hora", selectTime));

    // Botón de Envío
    const btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.id = "submit-booking";
    btnSubmit.textContent = "CONFIRMAR RESERVA";
    form.appendChild(btnSubmit);

    formContainer.appendChild(form);
    reserveWrapper.appendChild(formContainer);

    return reserveWrapper;
}