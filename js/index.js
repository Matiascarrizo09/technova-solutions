const container = document.getElementById("services-container");

fetch("http://127.0.0.1:3000/services")
  .then(res => res.json())
  .then(data => {
    console.log("Servicios cargados:", data);

    data.forEach(service => {
      const div = document.createElement("div");

      div.innerHTML = `
        <h3>${service.nombre}</h3>
        <p>${service.descripcionCorta}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Error al cargar servicios:", err);
  });