import './css/menu.css';

const menuData = [
  {
    categoria: "TAPAS MODERNAS",
    platos: [
      {
        nombre: "Burrata con Tapenade de Yuzu y Olivas",
        descripcion: "Burrata cremosa acompañada de un tapenade mediterráneo con notas cítricas de yuzu japonés y chips crujientes de raíz de loto.",
        precio: "16€"
      },
      {
        nombre: "Croquetas de Kimchi con Jamón Ibérico",
        descripcion: "Base de bechamel infusionada con kimchi coreano ahumado, rebozado crujiente en panko y coronado con finas lascas de jamón ibérico.",
        precio: "14€"
      },
      {
        nombre: "Almejas al Miso-Mantequilla con Patatas",
        descripcion: "Almejas locales salteadas con una reducción de mantequilla de miso y sake, servidas sobre patatas confitadas.",
        precio: "22€"
      }
    ]
  },
  {
    categoria: "ASIÁTICO-MED PRIMEROS",
    platos: [
      {
        nombre: "Ramen de Azafrán con Caldo de Queso Manchego",
        descripcion: "Fideos ramen artesanales en un caldo meloso infusionado con azafrán, acompañados de huevo marinado en soja y sopleteado.",
        precio: "24€"
      },
      {
        nombre: "Tiradito de Lubina Marinado en Yuzu",
        descripcion: "Cortes finos de lubina salvaje con emulsión de yuzu y aceite de oliva virgen extra, acompañados de brevas e higos de temporada.",
        precio: "26€"
      }
    ]
  },
  {
    categoria: "SEGUNDOS FUSIÓN",
    platos: [
      {
        nombre: "Salmón Pochado en Aceite de Oliva con Caldo de Curry",
        descripcion: "Lomo de salmón cocinado a baja temperatura en aceite de oliva, servido sobre una cama de quinoa y un sutil caldo curri tailandés con verduras de huerta.",
        precio: "32€"
      },
      {
        nombre: "Tagliata de Ternera Wagyu con Chimichurri de Wasabi",
        descripcion: "Ternera Wagyu sellada al fuego, fileteada y aderezada con una versión picante de chimichurri elaborado con wasabi fresco, acompañada de espárragos trigueros.",
        precio: "48€"
      }
    ]
  },
  {
    categoria: "POSTRES",
    platos: [
      {
        nombre: "Tarta de Queso Vasca de Té Matcha y Aceite de Oliva",
        descripcion: "La clásica tarta de queso horneada al estilo de San Sebastián, infusionada con té verde matcha premium y un toque final de aceite de oliva.",
        precio: "12€"
      },
      {
        nombre: "Crème Brûlée de Sésamo y Mandarina",
        descripcion: "Crema catalana/brûlée con base de pasta de sésamo tostado, costra de azúcar caramelizado y ralladura de mandarina.",
        precio: "11€"
      }
    ]
  }
];

function renderCarta(data) {
    return data.map(seccion => {

    const platosHTML = seccion.platos.map(plato => `
      <div class="plate">
          <h4>${plato.nombre}</h4>
          <p>${plato.descripcion}</p>
          <span class="price">${plato.precio}</span>
      </div>
    `).join(''); 

    
    return `
      <div class="food-block">
          <div class="titulo-comida tapas">
              <h3>${seccion.categoria}</h3>
          </div>
          ${platosHTML}
      </div>
    `;
  }).join(''); 
}

export default function loadMenu() {

    const menuWrapper = document.createElement("div");
    menuWrapper.id = "carta-wrapper";

    const photoDiv = document.createElement("div");
    photoDiv.classList.add("restaurant-food");

    const headline = document.createElement("div");
    headline.classList.add("headline")

    const h2 = document.createElement("h2");
    h2.textContent = "NUESTRA EXPERIENCIA FUSIÓN";

    const p = document.createElement("p");
    p.textContent = "Te invitamos a un viaje gastronómico donde el alma de la cocina mediterránea se encuentra con la profundidad de los sabores asiáticos. Una propuesta diseñada para sorprender y disfrutar en un ambiente urbano, minimalista y acogedor.";

    headline.appendChild(h2);
    headline.appendChild(p);

    const carta = document.createElement("div");
    carta.classList.add("carta");

    carta.innerHTML = renderCarta(menuData);

    menuWrapper.appendChild(photoDiv);
    menuWrapper.appendChild(headline);
    menuWrapper.appendChild(carta);

    return menuWrapper;
}