export function Data(props) {
  fetch("./app/data/db.json")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => props.cbSuccess(json))
    .catch(error => {
      let msg = error.statusText || "Error al cargar los datos";
      document.getElementById("root").innerHTML = `
      <div class="error"><p>Error ${error.status}: ${msg}</p></div>
      `;
      console.log(error); 
    })
}