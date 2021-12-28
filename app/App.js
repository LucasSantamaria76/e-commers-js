import { Data } from "./helpers/Data.js";
import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";

import { ProductCard } from "./components/ProductCard.js";
import { Cards } from "./components/Cards.js";
import { NavSelect } from "./components/NavSelect.js";

export function App() {
  const $root = document.getElementById("root");
  $root.appendChild(Header());
  $root.appendChild(NavSelect());
  $root.appendChild(Cards());
  $root.appendChild(Loader());
  let seleccion = document.getElementById('select');
  
  const renderProduct = (products) => {
      const productos = seleccion.value === 'frutas' ? products.Frutas : products.Verduras;
      /*       console.log(frutas);
      console.log(verduras); */
      let html = "";
      productos.forEach((el) => (html += ProductCard(el)));
      document.getElementById("loader").style.display = "none";
      document.getElementById("cards").innerHTML = html;
    }

  Data({
    cbSuccess: (products) => renderProduct(products),
  });
  
  seleccion.addEventListener("change", () => {
    Data({
      cbSuccess: (products) => renderProduct(products),
    });
});
}
