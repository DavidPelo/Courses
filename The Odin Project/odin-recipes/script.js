var ingredientLinks = document.querySelectorAll('.ingredient-item');

loadEventListeners();

function loadEventListeners() {
    ingredientLinks.forEach(function(link) {
        link.addEventListener('click', toggleStrikethrough);
    })
}

function toggleStrikethrough(e) {
    if(e.target.classList.contains("strike")) {
        e.target.className = '';
    } else {
        e.target.className = "strike";
    }
}