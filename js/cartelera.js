const contenedorCartelera = document.querySelector("#cartelera");

function mostrarPeliculas(listaPeliculas) {
  contenedorCartelera.innerHTML = "";

  listaPeliculas.forEach(pelicula => {
    const columna = document.createElement("div");
    columna.className = "col-12 col-md-6 col-lg-3";

    const tarjeta = document.createElement("article");
    tarjeta.className = "card h-100 border-0 shadow-sm tarjeta-pelicula";

    const botonesHorarios = pelicula.horarios
      .map(horario => `<span class="horario">${horario}</span>`)
      .join("");

    tarjeta.innerHTML = `
      <img src="${pelicula.imagen}" class="card-img-top poster" alt="${pelicula.titulo}">
      <div class="card-body d-flex flex-column">
        <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
          <span class="badge text-bg-danger">${pelicula.genero}</span>
          <span class="badge text-bg-light border text-dark">${pelicula.clasificacion}</span>
        </div>
        <h3 class="h5 card-title fw-bold">${pelicula.titulo}</h3>
        <p class="small text-uppercase fw-bold text-secondary mb-2">${pelicula.dias}</p>
        <div class="d-flex flex-wrap gap-2 mb-3">${botonesHorarios}</div>
        <p class="small text-secondary mb-3">${pelicula.formatos.join(" · ")} · ${pelicula.idioma}</p>
        <a class="btn btn-dark mt-auto enlace-detalle" href="#">Ver detalle</a>
      </div>
    `;

    const enlaceDetalle = tarjeta.querySelector(".enlace-detalle");

    // TODO 1: reemplazá "#" por la dirección detalle.html?id=...
    // El valor del id debe obtenerse desde pelicula.id.
    enlaceDetalle.href = `detalle.html?id=${pelicula.id}`;

    columna.appendChild(tarjeta);
    contenedorCartelera.appendChild(columna);
  });
}

mostrarPeliculas(peliculas);
