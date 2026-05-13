const container = document.getElementById("team-container");

fetch("http://127.0.0.1:3000/equipos")
  .then(res => res.json())
  .then(data => {

    data.forEach(persona => {
      const div = document.createElement("div");

      div.innerHTML = `
        <div class="BoxContent">
          <img src="http://127.0.0.1:3000${persona.foto}">
          <h2>${persona.nombre}</h2>
          <h3>${persona.rol}</h3>
          <p>${persona.descripcion}</p>
        </div>
      `;

      container.appendChild(div);
    });

  });