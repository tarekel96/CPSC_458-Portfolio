window.onload = () => {
	// Variables
	const particles = Particles.init({
		selector: '.background',
		color: [ '#64ffda', '#404B69', '#DBEDF3' ],
		connectParticles: true
	});
	const mainSection = document.querySelector('main');
	const introSection = document.querySelector('#intro-section');
	const bioSection = document.querySelector('#bio-section');
	const projectsSection = document.querySelector('#projects-section');
	const homeLink = document.querySelector('#home-link');
	const bioLink = document.querySelector('#bio-link');
	const projectsLink = document.querySelector('#projects-link');
	const leftArrow = document.querySelector('#leftArrow');
	const rightArrow = document.querySelector('#rightArrow');
	const cards = document.querySelectorAll('.project-card');
	let slideCounter = 0;

	// sets all of slides to display none
	const reset = () => {
		for (let i = 0; i < cards.length; i++) {
			// cards[i].style.display = 'none !important';
			cards[i].classList.add('none');
		}
	};
	const slideRight = () => {
		reset();

		cards[slideCounter + 1].classList.remove('none');
		slideCounter++;
	};
	// sets the previous slide to block to display that image
	function slideLeft() {
		reset();
		cards[slideCounter - 1].classList.remove('none');
		slideCounter--;
	}
	// reset();
	// initial the slides
	function startSlide() {
		reset();
		cards[0].classList.remove('none');
	}
	// Default State
	introSection.style.display = 'block';
	bioSection.style.display = 'none';
	projectsSection.style.display = 'none';
	// Helper
	const handleSwitch = (section, otherSections, display = 'block') => {
		otherSections.forEach((item) => (item.style.display = 'none'));
		section.style.display = display;
	};

	// Event Listeners
	homeLink.addEventListener('click', handleSwitch(introSection, [ bioSection, projectsSection ]));
	bioLink.addEventListener('click', () => handleSwitch(bioSection, [ introSection, projectsSection ]));
	projectsLink.addEventListener(
		'click',
		() => {
			handleSwitch(projectsSection, [ introSection, bioSection ]);
			startSlide();
		},
		'flex'
	);

	rightArrow.addEventListener('click', () => {
		if (slideCounter === cards.length - 1) {
			slideCounter = -1;
		}
		slideRight();
	});

	leftArrow.addEventListener('click', () => {
		if (slideCounter === 0) {
			slideCounter = cards.length;
		}
		slideLeft();
	});
};
