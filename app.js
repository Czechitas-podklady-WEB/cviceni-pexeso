const karticky = document.querySelectorAll('.karticka')

const otocitKarticku = (event) => {
	event.target.classList.toggle('otocena')
}

karticky.forEach((karticka) => {
	karticka.addEventListener('click', otocitKarticku)
})
