const contenedorDetalle = document.querySelector("#detalle");
const mensajeError = document.querySelector("#mensajeError");

const imagen = document.querySelector("#imagen");
const titulo = document.querySelector("#titulo");
const genero = document.querySelector("#genero");
const clasificacion = document.querySelector("#clasificacion");
const formatos = document.querySelector("#formatos");
const sinopsis = document.querySelector("#sinopsis");
const director = document.querySelector("#director");
const reparto = document.querySelector("#reparto");
const duracion = document.querySelector("#duracion");
const idioma = document.querySelector("#idioma");
const pais = document.querySelector("#pais");
const dias = document.querySelector("#dias");
const horarios = document.querySelector("#horarios");

// TODO 2: reemplazá el texto vacío por window.location.search.
const parametros = new URLSearchParams(window.location.search);

// TODO 3: obtené el valor del parámetro "id" mediante get().
const idPelicula = parametros.get("id");

// TODO 4: utilizá find() para buscar la película correspondiente.
const peliculaSeleccionada = peliculas.find(pelicula => pelicula.id === idPelicula);

function mostrarDetalle(pelicula) {
  // TODO 5: completá el contenido utilizando las propiedades de pelicula.
  imagen.src = pelicula.imagen;
  imagen.alt = pelicula.titulo;
  titulo.textContent = pelicula.titulo;
  genero.textContent = pelicula.genero;
  clasificacion.textContent = pelicula.clasificacion;
  formatos.textContent = pelicula.formatos.join(" . ");
  sinopsis.textContent = pelicula.sinopsis;
  director.textContent = pelicula.director;
  reparto.textContent = pelicula.reparto.join(", ");
  duracion.textContent = pelicula.duracion;
  idioma.textContent = pelicula.idioma;
  pais.textContent = pelicula.pais;
  dias.textContent = pelicula.dias;
  horarios.innerHTML = pelicula.horarios
    .map(horario => `<span class="horario">${horario}</span>`)
    .join("");

  contenedorDetalle.classList.remove("d-none");
}

function mostrarError() {
  mensajeError.classList.remove("d-none");
}

if (peliculaSeleccionada) {
  mostrarDetalle(peliculaSeleccionada);
} else {
  mostrarError();
}
