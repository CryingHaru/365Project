
fetch("jsons/test.json")
    .then(response => response.json())
    .then(data => {
        const categoriaslis = document.getElementById("catlist")
        data.forEach(categorias => {
            let circulito = document.createElement("div")
            circulito.classList.add("circulito")
            let circulitoimg = document.createElement("img")
            circulitoimg.src = "/imgs/" + categorias.label + ".png"
            let list = document.createElement("li")
            list.innerHTML = categorias.label;
            circulito.appendChild(circulitoimg)
            circulito.appendChild(list)
            list.classList.add("textos");
            categoriaslis.appendChild(circulito)
            circulito.onclick = function () {
                window.location.href = "/productos/" + categorias.label+"/";
            };
        })
    });

function mostrar() {
    if (document.getElementById("sidebar").style.width == "150px") {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("logo").classList.add("imglogocerrar")
        setTimeout(function () { document.getElementById("logo").classList.remove("imglogocerrar") }, 1000)

    } else {
        document.getElementById("sidebar").style.width = "150px";
        document.getElementById("logo").classList.add("imglogoanim")
        setTimeout(function () { document.getElementById("logo").classList.remove("imglogoanim") }, 1000)
    }
}
