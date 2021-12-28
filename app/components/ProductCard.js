export function ProductCard(props) {
  const { nombre, img, precio } = props;
  let path = ` /app/data/img/${img}`;

  return `
     <article class="product-card">
      <img src=${path} alt=${nombre}>
      <div class="card-info">
         <h2>${nombre}</h2>
         <h4>Precio: $ ${precio}</h4>    
      </div>
    </article>`;
}
