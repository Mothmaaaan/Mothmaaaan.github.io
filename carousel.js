document.querySelectorAll('.carousel').forEach(carousel => {
	const track = carousel.querySelector('.carousel-track');
	const slides = Array.from(track.children);

	const nextButton = carousel.querySelector('.carousel-button.next');
	const prevButton = carousel.querySelector('.carousel-button.prev');

	let currentIndex = 0;

	function updateCarousel() {
		track.style.transform = `translateX(-${currentIndex * 100}%)`;
	}

	nextButton.addEventListener('click', () => {
		currentIndex = (currentIndex + 1) % slides.length;
		updateCarousel();
	});

	prevButton.addEventListener('click', () => {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		updateCarousel();
	});
});