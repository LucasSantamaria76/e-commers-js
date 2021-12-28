import { Data } from "./helpers/Data.js";
import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";

import { ProductCard } from "./components/ProductCard.js";
import { Cards } from "./components/Cards.js";

export function App() {
  const $root = document.getElementById("root");
  $root.appendChild(Header());
  $root.appendChild(Cards());
  //$root.appendChild(Loader());

  Data({
    cbSuccess: (products) => {
      const frutas = products.Frutas,
        verduras = products.Verduras;
      console.log(frutas);
      console.log(verduras);
      let html = "";
      frutas.forEach((el) => (html += ProductCard(el)));
      /*       const $loader = document.querySelector(".loader");
      $loader.style.display = "none"; */
      document.getElementById("cards").innerHTML = html;
    },
  });
}
