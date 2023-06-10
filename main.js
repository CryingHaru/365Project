const suggestions = [
    { label: 'Coca Cola', url: '/productos/bebidas/' },
    { label: 'Carnes', url: '/productos/bebidas/' },
    { label: 'Variedades', url: '/productos/bebidas/' },
];

function buscar() {
    const input = document.getElementById('buscarinput');
    const list = document.getElementById('autocomplete-list');
    list.innerHTML = '';
    list.style.display = 'block';
    const inputValue = input.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.label.toLowerCase().startsWith(inputValue)
    );
    filteredSuggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.textContent = suggestion.label;
        listItem.onclick = function () {
            window.location.href = suggestion.url;
        };
        list.appendChild(listItem);
    });
    if (input.value == "") {
        hideAutocomplete();
    }
}

function hideAutocomplete() {
    const list = document.getElementById('autocomplete-list');
    list.style.display = 'none';
}
let datacategorias = [{
    "nombre":"test"
}]

function cargarcategorias() {
    const categoriaslis = document.getElementById("catlist");
    datacategorias.forEach(categorias => {
        let list = document.createElement("li")
        list.innerHTML = categorias.nombre;
        categoriaslis.appendChild(list)
        console.log(categorias)
    })

}

