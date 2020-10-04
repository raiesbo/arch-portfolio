// IMG ANIMATION

const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.eachProject img');
const original = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');

previews.forEach((preview) => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');

        //Dynamic change text and image
        const originalSrc = preview.getAttribute('data-original');
        original.src = originalSrc;

        const altTitle = preview.alt;
        const copy = preview.getAttribute('copy')
        if (copy) {
            imgText.textContent = `${altTitle}\n${copy}`;
        } else {
            imgText.textContent = altTitle;
        };
        
    });
});

modal.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal')) {
		modal.classList.remove('open');
		original.classList.remove('open');
        original.src = '';
	}
});


// original.src = `./img/p_artistsHouse/full/${originalSrc}`;