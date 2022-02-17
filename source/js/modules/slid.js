export function slid (){
  var About = document.querySelector('.about-us__swiper')
  if (About) {
    var swiper = new Swiper('.about-us__swiper--cont', {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }
    });

  }
  var ElUtem = document.querySelector('.item');
  if (ElUtem) {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 20,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },

        550: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 5,

        },
        1200: {
          slidesPerView: 4,
        },
      }
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 40,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-btn-item--next',
        prevEl: '.swiper-btn-item--prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }

  var itemBTM = document.querySelector('.item__rec');
  if (itemBTM) {
    var swiper = new Swiper('.swiper-container__item', {
      slidesPerView: 4,
      spaceBetween: 24,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next__item',
        prevEl: '.swiper-button-prev__item',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },

        550: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }
    });
  }

  var prod = document.querySelector('.products');
  if (prod){
    var swiper = new Swiper('.swiper-container__main', {
      slidesPerView: 4,
      spaceBetween: 24,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next__main',
        prevEl: '.swiper-button-prev__main',
      },
      breakpoints: {
        320:{
          slidesPerView: 1,
        },

        550:{
          slidesPerView:2,
          spaceBetween:30
        },
        1000:{
          slidesPerView:3,
          spaceBetween: 24,
        },
        1200:{
          slidesPerView:4,
          spaceBetween: 24,
        },
      }
    });
  }

  var  partners = document.querySelector('.partners');
  if (partners) {
    var swiper = new Swiper('.swiper-container--part', {
      slidesPerView: 4,
      spaceBetween: 24,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next--partn',
        prevEl: '.swiper-button-prev--partn',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }
    });
  }


}
