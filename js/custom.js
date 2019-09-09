// Sticky Header 
$(window).scroll(function() {
    if ($(this).scrollTop() > 50){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

// Main menu 
$(document).ready(function(){
    $('.nav-button').click(function(){
      $('body').toggleClass('nav-open');
    });
  });


  
// Home Top Slider
$('.slider-home-top').slick({
  autoplay: false,
  infinite: true,
  autoplaySpeed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  adaptiveHeight: true,
  variableWidth: false,
  centerMode: false,
  cssEase: 'linear',
  responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 768,
       settings: {
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }]
});


// Home Featured News Slider
$('.featured-slider').slick({
  autoplay: false,
  infinite: true,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: false,
  centerMode: false,
  cssEase: 'linear'
});


  
// Home Bottom Slider
$('.slider-home-bottom').slick({
  autoplay: false,
  infinite: true,
  autoplaySpeed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 600,
       settings: {
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }]
});


// Home Bottom Slider
$('.slider-juniors-gallery').slick({
  autoplay: false,
  infinite: true,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 600,
       settings: {
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }]
});


  
// Home Bottom Slider
$('.vacancies-slider').slick({
  autoplay: false,
  infinite: true,
  autoplaySpeed: 1500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  responsive: [{
    breakpoint: 1366,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },{
    breakpoint: 1280,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 600,
       settings: {
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }]
});

