// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él
fetch(DATA_URL)
  .then(response => response.json())
  .then(data => {
    const studentsData = data.students; // Obtenemos la lista de estudiantes del JSON
    showData(studentsData); // Llamamos a la función para mostrar los estudiantes en el DOM
  })

console.log (studentsData);

function showData(dataArray) {
  let htmlContentToAppend = "";
  for (const item of dataArray) {
      let category = dataArray[item];
      container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`;
}}
// Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
// Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData
showData(getJSONData(DATA_URL));

// Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData