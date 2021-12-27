import { Menu } from './Menu.js';
import { SearchForm } from "./SearchForm.js";


export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.appendChild(SearchForm());
  $header.appendChild(Menu());
  return $header;
}