// Меню бургер
const menuInnerBurger = document.querySelector('.menu__inner-burger');
const menuBurger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');
if (menuInnerBurger) {
	menuInnerBurger.addEventListener('click', function (e) {
		document.body.classList.toggle('lock');
		menuInnerBurger.classList.toggle('active');
		menuBurger.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				pageYOffset -
				document.querySelector('header').offsetHeight;

			if (menuInnerBurger.classList.contains('active')) {
				document.body.classList.remove('lock');
				menuInnerBurger.classList.remove('active');
				menuBurger.classList.remove('active');
				menuBody.classList.remove('active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		}
	}
}
