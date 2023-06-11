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
        hautocompletado();
    }
}
function hautocompletado() {
    const list = document.getElementById('autocomplete-list');
    list.style.display = 'none';
}