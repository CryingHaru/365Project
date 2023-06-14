let n = 0;
function carrito() {
    n++;
    const icono = document.getElementById("logocarrito");
    icono.style.backgroundImage = "url('/icons/shoplleno.svg')";
    const numerito = document.getElementById("cartnum");
    numerito.innerHTML = n;
}
function Crearprod(img,nombre){
    var outerDiv = document.createElement('div');
    outerDiv.classList.add('mcont');
    var innerDiv = document.createElement('div');
    innerDiv.classList.add('mfoto');
    
    var image = document.createElement('img');
    image.src = '/imgs/producto/'+img+ '.jpg';
    image.alt = '';
    
    var itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.id = 'item';
    
    var heading = document.createElement('h2');
    heading.textContent = nombre;
    itemDiv.appendChild(heading);
    innerDiv.appendChild(image);
    innerDiv.appendChild(itemDiv);
    outerDiv.appendChild(innerDiv);
    let contenedor = document.getElementById("mostrador")
    contenedor.appendChild(outerDiv);
    
}

