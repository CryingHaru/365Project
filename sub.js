let cdata;
function Crearprod(img, nombre, precio, index) {
  var outerDiv = document.createElement('div');
  outerDiv.classList.add('mcont');
  outerDiv.id = "out" + index;
  var innerDiv = document.createElement('div');
  innerDiv.classList.add('mfoto');

  var image = document.createElement('img');
  image.src = '/imgs/productos' + img;
  image.alt = '';

  var itemDiv = document.createElement('div');
  itemDiv.classList.add('item');
  itemDiv.id = 'item';

  var heading = document.createElement('span');
  let price = document.createElement("strong")
  price.textContent = "$" + precio;
  heading.textContent = nombre;
  let boton = document.createElement('div')
  let conten = document.createElement('div')
  boton.classList.add("boton")
  conten.classList.add("boton")
  conten.innerHTML = '<input type="button" value="-" onclick="compra(\'resta\', \'' + index + '\')"><input class="cvalor" id="cvalor' + index + '" value="0" type="number" max="100" size="2" oninput="compra(\'cvalor\', \'' + index + '\')"><input type="button" onclick="compra(\'suma\', \'' + index + '\')" value="+">';
  boton.innerHTML = "comprar"
  boton.onclick = function () {
    console.log(index)
    itemDiv.replaceChild(conten, boton)
  };
  itemDiv.appendChild(boton);
  itemDiv.appendChild(price);
  itemDiv.appendChild(heading);
  innerDiv.appendChild(image);
  outerDiv.appendChild(innerDiv);
  outerDiv.appendChild(itemDiv);
  let contenedor = document.getElementById("mostrador");
  contenedor.appendChild(outerDiv);

}
function carritos(n) {
  const icono = document.getElementById("logocarrito");
  icono.style.backgroundImage = "url('/icons/shoplleno.svg')";
  const numerito = document.getElementById("cartnum");
  numerito.innerHTML = n;
}
fetch("productos.json")
  .then(response => response.json())
  .then(data => {
    data.forEach((producto, dataindex) => {
      Crearprod(producto.url, producto.nombre, producto.precio, dataindex);
    });
    cdata = data
    document.title = "365 EXPRESS - "+ cdata[0].cat;
    document.getElementById("titulo").innerText=cdata[0].cat
  });

// Función compra
let news;
function compra(operacion, id) {
  const cantidadElement = document.getElementById("cvalor" + id);
  const cantidad = parseInt(cantidadElement.value);

  if (operacion === "suma") {
    if (cdata.hasOwnProperty(id)) {
      if (carrito.hasOwnProperty(id)) {
        news = cantidad + 1;
        cantidadElement.value = news.toString();
        carrito[id].cantidad = news;
      } else {
        carrito[id] = {
          nombre: cdata[id].nombre,
          precio: cdata[id].precio,
          cantidad: cantidad
        };
      }
    }
  } else if (operacion === "resta") {
    if (carrito.hasOwnProperty(id)) {
      news = cantidad-1;
      cantidadElement.value = news.toString();
      carrito[id].cantidad = news;
      if (carrito[id].cantidad <= 0) {
        delete carrito[id];
      }
    }
  }

  displayCartItems(carrito);
}

const carrito = {}; 

function displayCartItems(cart) {
  const cartItemsElement = document.getElementById("cartItems");
  cartItemsElement.innerHTML = ""; 
carritos(Object.keys(cart).length)
for (const productId in cart) {
  const product = cart[productId];
  const listItem = document.createElement("li");

  const nameInput = document.createElement("input");
  nameInput.type = "hidden";
  nameInput.name = "product_name[]";
  nameInput.value = product.nombre;
  listItem.appendChild(nameInput);

  const quantityInput = document.createElement("input");
  quantityInput.type = "hidden";
  quantityInput.name = "product_quantity[]";
  quantityInput.value = product.cantidad;
  listItem.appendChild(quantityInput);

  const priceInput = document.createElement("input");
  priceInput.type = "hidden";
  priceInput.name = "product_price[]";
  priceInput.value = product.precio;
  listItem.appendChild(priceInput);
  listItem.textContent = `${product.nombre} - ${product.cantidad} unidades - Precio: $${product.precio * product.cantidad}`;
  cartItemsElement.appendChild(listItem);
}
  


}
function modalshow(c){
  const compraxd = document.getElementById("carritoxd");
  if(c==false){
    compraxd.showModal()
  }else{
    compraxd.close()
  }

}

