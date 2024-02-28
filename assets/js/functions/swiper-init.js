import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-projects', {
	speed: 600,
	slidesPerView: 4,
	slidesPerGroup: 4,
	spaceBetween: 30,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	effect: 'slide',
});

const swiperClients = new Swiper('.swiper-clients', {
	speed: 600,
	loop: true,
	slidesPerView: 6,
	spaceBetween: 70,

	navigation: {
		nextEl: '.swiper-clients-button-next',
		prevEl: '.swiper-clients-button-prev',
	},

	effect: 'slide',
});
