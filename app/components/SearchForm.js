export function SearchForm() {
  const $searchForm = document.createElement("form"),
    $input = document.createElement("input");
  $input.type = "search";
  $input.name = "search";
  $input.placeholder = "Ingrese texto a buscar...";
  $input.classList.add("search");
  
  $searchForm.appendChild($input);
  return $searchForm;
}
