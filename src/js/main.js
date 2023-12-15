const hearts = document.querySelectorAll('.heart');

hearts.forEach((heart) => {
	return heart.addEventListener('click', () => {
		heart.classList.toggle('like');
	});
});
