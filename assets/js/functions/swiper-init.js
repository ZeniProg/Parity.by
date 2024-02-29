import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-projects', {
	speed: 600,
	slidesPerView: 'auto',
	slidesPerGroup: 4,
	spaceBetween: 30,

	pagination: {
		el: '.swiper-projects__pagination',
		clickable: true,
	},

	effect: 'slide',
});

const swiperClients = new Swiper('.swiper-clients', {
	speed: 600,
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 70,

	navigation: {
		nextEl: '.swiper-clients-button-next',
		prevEl: '.swiper-clients-button-prev',
	},

	effect: 'slide',
});
