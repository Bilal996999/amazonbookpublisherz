$('.logos-sliders').slick({
  dots: false,
  arrows:false,
  infinite: true,
  pauseOnFocus:false,
  pauseOnHover:false,
  speed: 7100,
  autoplay:true,
  autoplaySpeed: 0,
  slidesToShow: 6,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"290px",
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1398,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding:"190px",
      }
    },
    {
      breakpoint: 1198,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding:"130px",
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding:"90px",
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding:"60px",
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding:"40px",
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"20px",
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.work-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  pauseOnFocus:false,
  pauseOnHover:false,
  speed: 7100,
  autoplay:true,
  autoplaySpeed: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"290px",
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1398,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding:"190px",
      }
    },
    {
      breakpoint: 1198,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding:"130px",
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding:"90px",
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"60px",
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"40px",
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"20px",
      }
    }
  ]
});
  
  

  $(document).ready(function(){

    function detect_active(){
        // get active
        var get_active = $("#dp-slider .dp_item:first-child").data("class");
        $("#dp-dots li").removeClass("active");
        $("#dp-dots li[data-class="+ get_active +"]").addClass("active");
      }
      $("#dp-next").click(function(){
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
          $(dp_item).attr('data-position', index + 1);
        });
        detect_active();
    
      });
    
      $("#dp-prev").click(function(){
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
          $(dp_item).attr('data-position', index + 1);
        });
    
        detect_active();
      });
    
      $("#dp-dots li").click(function(){
        $("#dp-dots li").removeClass("active");
        $(this).addClass("active");
        var get_slide = $(this).attr('data-class');
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
          $(dp_item).attr('data-position', index + 1);
        });
      });
    
    
      $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(){
        var get_slide = $(this).attr('data-class');
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
          $(dp_item).attr('data-position', index + 1);
        });
    
        detect_active();
      });
    });