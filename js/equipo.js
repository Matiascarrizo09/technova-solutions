const container = document.getElementById("team-container");

fetch("https://g11-tp3-technovasolutions.onrender.com//equipos")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((persona) => {
      const div = document.createElement("div");

      div.innerHTML = `
        <div class="BoxContent">
          <img src="https://g11-tp3-technovasolutions.onrender.com/${persona.foto}">
          <h2>${persona.nombre}</h2>
          <h3>${persona.rol}</h3>
          <p>${persona.descripcion}</p>
        </div>
      `;

      container.appendChild(div);
    });
  });
