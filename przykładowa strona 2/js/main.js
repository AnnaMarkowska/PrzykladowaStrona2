document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const navbarCollapse = document.querySelector('.navbar-collapse');
	const navLink = document.querySelectorAll('.nav-link');

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}
    window.addEventListener('scroll', addShadow);

	navLink.forEach(item => item.addEventListener('click', () => navbarCollapse.classList.remove('show')))

	navLink.addEventListener('click', closeNavbar);
	
});
