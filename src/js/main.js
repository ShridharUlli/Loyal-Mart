var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".trending", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });