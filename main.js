
fetch("jsons/categorias.json")
    .then(response => response.json())
    .then(data => {
        const categoriaslis = document.getElementById("catlist");
        data.forEach(categorias => {
            let circulito = document.createElement("div");
            circulito.classList.add("circulito");
            let circulitoimg = document.createElement("img");
            circulitoimg.src = "/imgs/" + categorias.label + ".png";
            let list = document.createElement("li");
            list.innerHTML = categorias.label;
            circulito.appendChild(circulitoimg);
            circulito.appendChild(list);
            list.classList.add("textos");
            categoriaslis.appendChild(circulito);
            circulito.onclick = function () {
                window.location.href = "/productos/" + categorias.label + "/";
            };
        });
    });

function mostrar() {
    const sidebar = document.getElementById("sidebar");
    const logo = document.getElementById("logo");
    if (sidebar.style.width === "150px") {
        sidebar.style.width = "0";
        logo.classList.add("imglogocerrar");
        setTimeout(function () { logo.classList.remove("imglogocerrar"); }, 1000);
    } else {
        sidebar.style.width = "150px";
        logo.classList.add("imglogoanim");
        setTimeout(function () { logo.classList.remove("imglogoanim"); }, 1000);
    }
}

