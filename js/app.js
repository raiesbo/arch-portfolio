//Prevents from IMG download

const img = document.querySelectorAll('img');

img.forEach(i => i.addEventListener('contextmenu', event => event.preventDefault()));

