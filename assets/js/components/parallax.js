const homeDOM = document.getElementById('home');
const imagesDOM = document.querySelectorAll('.home__layer');

function parallax() {
	homeDOM.addEventListener('mousemove', (e) => {
		imagesDOM.forEach((img) => {
			const speed = img.getAttribute('data-speed');
			const x = (window.innerWidth - e.pageX * speed) / 90;
			const y = (window.innerHeight - e.pageY * speed) / 90;
			img.style.translate = `${x}px ${y}px`;
		});
	});
}

export default parallax;
