// Consumir API
const API = "https://rickandmortyapi.com/api/character";

// Consumir API
const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      dibujarData(json.results), paginacion(json.info);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

// Dibujar cards de personaje
const dibujarData = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += '<div class="col-sm-4 contCard">'  
    html += '<div class="card text-white bg-dark" style="width: 18rem;">';
    html += `<img src="${pj.image}" class="card-img-top" alt="${pj.name}">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title"><strong>Nombre: </strong>${pj.name}</h5>`;
    html += `<p class="card-text"><strong>Especie: </strong>${pj.species}</p>`;
    html += `<p class="card-text"><strong>Genero: </strong>${pj.gender}</p>`;
    html += `<p class="card-text"><strong>Estado: </strong>${pj.status}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>"
  });
  document.getElementById("datosPj").innerHTML = html;
};

// Paginación
const paginacion = (data) => {
  let html = "";
  html += `<li class="page-item ${data.prev ? "" : "disabled"}"><a class="page-link" onclick="getData('${data.prev}')">Prev</a></li>`;
  html += `<li class="page-item ${data.next ? "" : "disabled"}"><a class="page-link" onclick="getData('${data.next}')">Next</a></li>`;
  document.getElementById("paginacion").innerHTML = html;
};

//  Ejecutar getData
getData(API);
