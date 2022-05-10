// import Swiper JS
import Swiper from "swiper";

const items = document.querySelector(".mySwiper");
console.log(items);

const swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      810: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  },
});
