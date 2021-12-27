import {getData} from "./helpers/getData.js";
import { Loader } from './components/Loader.js';
import { Header } from "./components/Header.js";
//import { Cards } from "./Cards.js";

export function App() {
  const $root = document.getElementById("root");
  $root.appendChild(Header());
  //$root.appendChild(Cards());
  //$root.appendChild(Loader());
 //const product = getData();
 console.log(getData());
}