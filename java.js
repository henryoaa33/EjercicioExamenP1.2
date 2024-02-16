document.addEventListener("DOMContentLoaded", function () {

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => mostrarProductos(data))
        .catch(error => console.error('Error al obtener los productos:', error));
});

function mostrarProductos(productos) {
    const productosContainer = document.getElementById('productosContainer');

    productos.forEach(producto => {

        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';

        card.innerHTML = `
            <div class="card">
                <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.description}</p>
                    <p class="card-text"><strong>Precio:</strong> ${producto.price}$</p>
                    <p class="card-text"><strong>Categoría:</strong> ${producto.category}</p>
                </div>
            </div>
        `;

        productosContainer.appendChild(card);
    });
}
