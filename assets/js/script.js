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
	const resumeSection = document.querySelector('#resume-section');
	const homeLink = document.querySelector('#home-link');
	const bioLink = document.querySelector('#bio-link');
	const resumeLink = document.querySelector('#resume-link');

	// Default State
	introSection.style.display = 'block';
	bioSection.style.display = 'none';
	resumeSection.style.display = 'none';
	// Helper
	const handleSwitch = (section, otherSections) => {
		otherSections.forEach((item) => (item.style.display = 'none'));
		section.style.display = 'block';
	};

	// Event Listeners
	homeLink.addEventListener('click', handleSwitch(introSection, [ bioSection, resumeSection ]));
	bioLink.addEventListener('click', () => handleSwitch(bioSection, [ introSection, resumeSection ]));
	resumeLink.addEventListener('click', () => handleSwitch(resumeSection, [ introSection, bioSection ]));
};
