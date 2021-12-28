export function NavSelect() {
  const $menu = document.createElement("nav");
  $menu.innerHTML = ` 
  <div class="navSelect">
      <select name="select" id="select">
        <option value="verduras">Verduras</option>
        <option value="frutas" selected>Frutas</option>
    </select>
 </div>
 `;
  return $menu;
}
