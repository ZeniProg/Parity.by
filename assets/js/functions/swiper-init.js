import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-projects', {
	speed: 600,
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	spaceBetween: 10,

	pagination: {
		el: '.swiper-projects__pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<button class="' + className + ' swiper-blue__bullet btn-reset"></button>';
		},
	},

	breakpoints: {
		1440: {
			spaceBetween: 25,
			slidesPerGroup: 4,
		},
		1024: {
			spaceBetween: 25,
			slidesPerGroup: 3,
		},
		768: {
			spaceBetween: 25,
			slidesPerGroup: 2,
		},
	},

	effect: 'slide',
});

const swiperClients = new Swiper('.swiper-clients', {
	speed: 600,
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 20,

	navigation: {
		nextEl: '.swiper-clients-button-next',
		prevEl: '.swiper-clients-button-prev',
	},

	breakpoints: {
		768: {
			spaceBetween: 70,
		},
	},

	effect: 'slide',
});

const swiperTextsArticles = new Swiper('.swiper-articles-texts', {
	speed: 600,
	loop: true,
	slidesPerView: 'auto',

	navigation: {
		nextEl: '.swiper-texts-articles-button-next',
		prevEl: '.swiper-texts-articles-button-prev',
	},

	effect: 'slide',
});

const swiperArticles = new Swiper('.swiper-articles', {
	speed: 600,
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	spaceBetween: 10,

	pagination: {
		el: '.swiper-articles__pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<button class="' + className + ' swiper-blue__bullet btn-reset"></button>';
		},
	},

	breakpoints: {
		1440: {
			slidesPerGroup: 3,
			spaceBetween: 30,
		},
		1024: {
			slidesPerGroup: 2,
			spaceBetween: 30,
		},
	},

	effect: 'slide',
});

const swiperImages = new Swiper('.swiper-images', {
	speed: 600,
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,

	effect: 'slide',
});
