/* jshint browser: true */

/**
 * No-JS - Adds a no-js class that hides JavaScript dependent site elements.
 */
var elemsClassNojs = document.querySelectorAll('.no-js');
if (elemsClassNojs[0] !== undefined) {
  Array.prototype.forEach.call(elemsClassNojs, function (el) {
    el.classList.remove('no-js');
  });
}

// Show Yandex Map
if (document.querySelector('#yandex-map')) {
  window.addEventListener('scroll', showYandexMap);

  // Show map when scrolling to the specified section
  function showYandexMap() {
    let sectionPrev = document.querySelector('.stock-and-transfers');
    let animItemOffsetTop = offsetTop(sectionPrev);

    // If the scroll height is greater than the specified section
    if (pageYOffset > animItemOffsetTop) {
      // Cancel scroll tracking
      window.removeEventListener('scroll', showYandexMap);

      // Create Yandex Map
      let sectionMap = document.querySelector('#yandex-map');
      let yandexMap = document.createElement('script');
      yandexMap.setAttribute('charset', 'utf-8');
      yandexMap.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3f8a981f7bd0d397fd849cacbc2066ae5d60a2eb59fa8cdc5143877af4a53e06&amp;width=100%&amp;height=590&amp;lang=ru_RU&amp;scroll=true';
      sectionMap.append(yandexMap);
    }
  }

  // The height value of this section relative to the page height
  function offsetTop(el) {
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  }
}

/**
 * jQuery
 */
jQuery(document).ready(function($){
  /**
   * Slick slider
   */
  $('.big-slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  });

  $('.simple-slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.hotel-rooms__slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,

    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider-center').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 610,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: false,
        variableWidth: false
      }
    }]
  });

  $('.testimonials__slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $('.card-full-fill__col-slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  /**
   * Show button top
   */
  $(window).scroll(function(){
      if($(this).scrollTop()>540){
          $("#btnTop").addClass("btn-top--show");
      }
      else if ($(this).scrollTop()<540){
          $("#btnTop").removeClass("btn-top--show");
      }
  });

  /**
   * Enable mask phone
   */
  $('input[type="tel"]').mask('+7(999)999-99-99');

  /**
   *  Enable smooth scrolling by pressing on anchors
   */
  $("a").on("click", function(event) {
      if (this.hash !== "") {
          event.preventDefault();

          let hash = this.hash;

          $("html, body").animate({
              scrollTop: $(hash).offset().top
          }, 800);
      }
  });

});
// jQuery/
