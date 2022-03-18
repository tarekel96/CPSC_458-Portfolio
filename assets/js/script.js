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
	projectsLink.addEventListener('click', () => handleSwitch(projectsSection, [ introSection, bioSection ]), 'flex');
};
