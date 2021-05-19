var $status_s1 = $('.infoslide_count');
    var $slickElement_s1 = $('.content_slide');

    $slickElement_s1.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status_s1.text(i + '/' + slick.slideCount);
    });

    $slickElement_s1.slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 300,
  autoplay:false,
  focusOnSelect: false,
  slidesToShow: 1,
  slidesToScroll: 1,
   vertical: false,
   verticalSwiping: false,
    // prevArrow: '<img class="pre_arrow" src="assets/images/arrow_up.svg">',
    // nextArrow: '<img class="next_arrow" src="assets/images/arrow_up.svg">',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: false,
        touchMove:true,
        verticalSwiping: false,
        pauseOnHover: true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: true,
        touchMove:true,
        verticalSwiping: false,
        pauseOnHover: true,
        slidesToScroll: 1
      }
    }

  ]
});


// video ligtbox
    
window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}

// end video light box

// scroll down
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
// scroll down end


  
  $('.destination_slider').slick({
       dots: true,
  infinite: true,
  arrows:true,
  speed: 300,
  autoplay:false,
  focusOnSelect: false,
  slidesToShow: 2,
  slidesToScroll: 1,
    prevArrow: '<img class="pre_arrow_tstmonl" src="./assets/images/carousel.png">',
    nextArrow: '<img class="next_arrow_tstmonl" src="./assets/images/carousel.png">',

    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows:false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
         arrows:false,
        slidesToScroll: 1
      }
    }

  ]
    });


  // social shar button
  $( document ).ready(function() {
  //custom button for homepage
     $( ".share-btn" ).click(function(e) {
       $('.networks-5').not($(this).next( ".networks-5" )).each(function(){
          $(this).removeClass("active");
       });
     
            $(this).next( ".networks-5" ).toggleClass( "active" );
    });   
});
  // social share button end
