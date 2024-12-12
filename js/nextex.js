/*
  [JS Index]
  
  ---
  
  Template Name: Nextex - One Page Photography Portfolio Template
  Author:  ex-nihilo
  Version: 1.0
*/

/* 
  1. preloader
  2. navigation
  3. transitions
  4. owl carousel slider
  5. slick slider
  6. YouTube player
  7. close mobile menu
  8. magnificPopup
  9. contact form
*/

$(function () {
  "use strict";

  // 1. preloader
  $("#preloader").fadeOut(800);
  $(".preloader-bg").delay(600).fadeOut(800);

  // 2. navigation
  $('a[href*="#"]:not([href="#"])').on("click", function () {
    console.log("click");
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=" + this.hash.slice(1) + "]');
      if (target.length) {
        if ($(window).width() < 768) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 70,
            },
            1000
          );
        } else {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 110,
            },
            1000
          );
        }
        return false;
      }
    }
  });

  $(window).on("scroll", function () {
    // 3. transitions
    if ($(this).scrollTop() > 100) {
      $(".border-top").addClass("top-position-primary");
      $(".border-bottom").addClass("bottom-position-primary");
      $(".border-left").addClass("left-position-primary");
      $(".border-right").addClass("right-position-primary");
      $(".to-top-arrow, .border-bottom-2").addClass("show");
    } else {
      $(".border-top").removeClass("top-position-primary");
      $(".border-bottom").removeClass("bottom-position-primary");
      $(".border-left").removeClass("left-position-primary");
      $(".border-right").removeClass("right-position-primary");
      $(".to-top-arrow, .border-bottom-2").removeClass("show");
    }
  });

  // 4. owl carousel slider
  $("#owl-carousel-team").owlCarousel({
    loop: true,
    center: true,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    nav: true,
    navText: [
      "<i class='ion-chevron-left'></i>",
      "<i class='ion-chevron-right'></i>",
    ],
    navContainer: ".owl-nav-custom-team",
    responsive: {
      0: {
        items: 2,
        margin: 30,
      },
      768: {
        items: 2,
        margin: 50,
      },
      980: {
        items: 2,
        margin: 50,
      },
      1240: {
        items: 2,
        margin: 50,
      },
    },
  });
  $("#owl-carousel-works").owlCarousel({
    loop: true,
    center: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    nav: true,
    navText: [
      "<i class='ion-chevron-left'></i>",
      "<i class='ion-chevron-right'></i>",
    ],
    navContainer: ".owl-nav-custom-works",
    responsive: {
      0: {
        items: 1,
        margin: 30,
      },
      768: {
        items: 1,
        margin: 50,
      },
      980: {
        items: 1,
        margin: 50,
      },
      1240: {
        items: 1,
        margin: 50,
      },
    },
  });
  $("#owl-carousel-works-even-more").owlCarousel({
    loop: true,
    center: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    nav: true,
    navText: [
      "<i class='ion-chevron-left'></i>",
      "<i class='ion-chevron-right'></i>",
    ],
    navContainer: ".owl-nav-custom-works-even-more",
    responsive: {
      0: {
        items: 1,
        margin: 30,
      },
      768: {
        items: 2,
        margin: 50,
      },
      980: {
        items: 2,
        margin: 50,
      },
      1240: {
        items: 3,
        margin: 50,
      },
    },
  });
  $("#owl-carousel-news").owlCarousel({
    loop: true,
    center: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    nav: true,
    navText: [
      "<i class='ion-chevron-left'></i>",
      "<i class='ion-chevron-right'></i>",
    ],
    navContainer: ".owl-nav-custom-news",
    responsive: {
      0: {
        items: 1,
        margin: 30,
      },
      768: {
        items: 1,
        margin: 50,
      },
      980: {
        items: 1,
        margin: 50,
      },
      1240: {
        items: 1,
        margin: 50,
      },
    },
  });

  // 5. slick slider
  $(".slick-fullscreen-slideshow").slick({
    arrows: false,
    initialSlide: 0,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease",
    speed: 1600,
    draggable: true,
    dots: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $(".slick-fullscreen-slideshow-zoom-fade").slick({
    arrows: false,
    initialSlide: 0,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    speed: 1600,
    draggable: true,
    dots: false,
    pauseOnDotsHover: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  // 6. YouTube player
  $("#bgndVideo").YTPlayer();

  // 7. close mobile menu
  $(".navbar-collapse ul li a").on("click", function () {
    $(".navbar-toggle:visible").click();
  });

  // 8. magnificPopup
  $(".popup-photo-gallery").each(function () {
    $(this).magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true,
      },
      removalDelay: 100,
      mainClass: "mfp-fade",
      fixedContentPos: false,
    });
  });

  // 9. contact form
  $("form#form").on("submit", function () {
    $("form#form .error").remove();
    var s = !1;
    if (
      ($(".requiredField").each(function () {
        if ("" === jQuery.trim($(this).val()))
          $(this).prev("label").text(),
            $(this)
              .parent()
              .append('<span class="error">This field is required</span>'),
            $(this).addClass("inputError"),
            (s = !0);
        else if ($(this).hasClass("email")) {
          var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          r.test(jQuery.trim($(this).val())) ||
            ($(this).prev("label").text(),
            $(this)
              .parent()
              .append('<span class="error">Invalid email address</span>'),
            $(this).addClass("inputError"),
            (s = !0));
        }
      }),
      !s)
    ) {
      $("form#form input.submit").fadeOut("normal", function () {
        $(this).parent().append("");
      });
      var r = $(this).serialize();
      $.post($(this).attr("action"), r, function () {
        $("form#form").slideUp("fast", function () {
          $(this).before(
            '<div class="success">Your email was sent successfully.</div>'
          );
        });
      });
    }
    return !1;
  });
});
