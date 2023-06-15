let n = 0;
function carrito() {
    n++;
    const icono = document.getElementById("logocarrito");
    icono.style.backgroundImage = "url('/icons/shoplleno.svg')";
    const numerito = document.getElementById("cartnum");
    numerito.innerHTML = n;
}
function Crearprod(img,nombre,precio){
    var outerDiv = document.createElement('div');
    outerDiv.classList.add('mcont');
    var innerDiv = document.createElement('div');
    innerDiv.classList.add('mfoto');
    
    var image = document.createElement('img');
    image.src = '/imgs/productos/bebidas/'+img;
    image.alt = '';
    
    var itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.id = 'item';
    
    var heading = document.createElement('span');
    let price = document.createElement("span")
    price.textContent ="$" + precio;
    heading.textContent = nombre;
    itemDiv.appendChild(heading);
    itemDiv.appendChild(price);
    innerDiv.appendChild(image);
    outerDiv.appendChild(innerDiv);
    outerDiv.appendChild(itemDiv);
    let contenedor = document.getElementById("mostrador")
    contenedor.appendChild(outerDiv);
    
}

fetch("/jsons/productos.json")
    .then(response => response.json())
    .then(data => {
        const categoriaslis = document.getElementById("catlist");
        data.forEach(producto => {
           Crearprod(producto.url,producto.nombre,producto.precio)
        });
    });