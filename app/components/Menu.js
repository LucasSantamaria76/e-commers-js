export function Menu() {
 const $menu  = document.createElement("nav");
 //$menu.classList.add("menu");
 $menu.innerHTML = ` 
  <div class="menu">
   <a href="#/">Home</a>
   <a href="#/contacto">Contacto</a>
   <a href="#/carrito">Carrito</a>
  </div>
 `;
 return $menu;
}