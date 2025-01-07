// Слайдер

const swiperDoc = new Swiper('.section-easy__swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  direction: 'horizontal',
  navigation: {
    nextEl: ".section-easy__btn-right",
    prevEl: ".section-easy__btn-left"
  },

  breakpoints: {
		993: {
			spaceBetween: 20,
			slidesPerView: 3,
		},
  },
});