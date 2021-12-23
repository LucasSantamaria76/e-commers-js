export function Menu() {
 const $menu  = document.createElement("nav");
 //$menu.classList.add("menu");
 $menu.innerHTML = ` 
  <ul>
   <li><a href="#/">Home</a></li>
   <li><a href="#/contacto">Contacto</a></li>
   <li><a href="#/carrito">Carrito</a></li>
  </ul>
 `;
 return $menu;
}