import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-projects', {
	speed: 600,
	slidesPerView: 'auto',
	slidesPerGroup: 4,
	spaceBetween: 30,

	pagination: {
		el: '.swiper-projects__pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<button class="' + className + ' swiper-blue__bullet btn-reset"></button>';
		},
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

const swiperArticles = new Swiper('.swiper-articles', {
	speed: 600,
	slidesPerView: 'auto',
	slidesPerGroup: 3,
	spaceBetween: 30,

	pagination: {
		el: '.swiper-articles__pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<button class="' + className + ' swiper-blue__bullet btn-reset"></button>';
		},
	},

	effect: 'slide',
});
