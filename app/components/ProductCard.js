export function ProductCard(props) {
  const { nombre, img, precio } = props;
  const foto = img || "FrutasyVerduras.jpg";
  let path = ` /app/data/img/${foto}`;

  return `
     <article class="product-card">
      <img src=${path} alt=${nombre}">
      <div class="card-info">
         <h2>${nombre}</h2>
         <h4>Precio: $ ${precio}</h4>    
      </div>
    </article>`;
}
