AOS.init();

function readMore() {
  if (window.location.search == "?sponsor") {
    $(".sponsor-main").show();
    $(".mobile-application-main").hide();
    $(".mob-btn").removeClass("btn-bg");
    $(".sp-btn").addClass("btn-bg");
  }
}

readMore();

$(document).ready(function () {
  //counter

  $(".count").countTo();
  $(".ftr-counter-block").appear(
    function () {
      $(".count").countTo();
    },
    {
      accY: -100,
    }
  );

  // new WOW().init();

  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
  });
  wow.init();

  //This is id of HTML element (English) with attribute lng-tag
  $("#enLocale").click(function () {
    translate("en", "lng-tag");
  });
  //This is id of HTML element (Khmer) with attribute lng-tag
  $("#jpLocale").click(function () {
    translate("jp", "lng-tag");
  });

  $(".lng-dropdown").on("click", function () {
    $(".locale-list").slideToggle();
  });

  $(".header__nav-button").on("click", function () {
    $(".header-res").addClass("slide");
    $(this).hide();
    $(".header-close").show();
    $(".locale-dropdown").hide();
    $(".mob-dropdown-bg").show();
    $("header").removeClass("bg");
  });

  $(".header-close").on("click", function () {
    $(".header-res").removeClass("slide");
    $(this).hide();
    $(".header__nav-button").show();
    $(".locale-dropdown").show();
    $(".mob-dropdown-bg").hide();
    $("header").addClass("bg");
  });

  $(".mob-dropdown-bg").on("click", function () {
    $(".header-res").removeClass("slide");
    $(".header-close").hide();
    $(".header__nav-button").show();
    $(this).hide();
    $("header").removeClass("bg");
    $("header").addClass("bg");
    $(".locale-dropdown").show();
  });

  // switching service tabs

  $(".service-tabs li:first-child").addClass("active");
  $(".service-tabs li:first-child a").addClass("clr-white");
  $(".service-main-block").hide();
  $(".service-main-block:first").show();

  // Click function
  $(".service-tabs li").click(function () {
    $(".service-tabs li").removeClass("active");
    $(".service-tabs li a").removeClass("clr-white");
    $(this).addClass("active");
    $(this).children("a").addClass("clr-white");
    $(".service-main-block").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });

  $(".sp-btn").on("click", function () {
    $(".sponsor-main").show();
    $(".mobile-application-main").hide();
    $(".mob-btn").removeClass("btn-bg");
    $(this).addClass("btn-bg");
  });

  $(".mob-btn").on("click", function () {
    $(".sponsor-main").hide();
    $(".mobile-application-main").show();
    $(".sp-btn").removeClass("btn-bg");
    $(this).addClass("btn-bg");
  });

  $(".pf-sp-btn").on("click", function () {
    $(".platform-info-btn").removeClass("btn-bg");
    $(this).addClass("btn-bg");
  });

  $(".platform-info-btn").on("click", function () {
    $(this).addClass("btn-bg");
    $(".pf-sp-btn").removeClass("btn-bg");
  });

  // faq drpdown

  $(".drp-head").on("click", function () {
    $(this).children(".drp-down").toggleClass("rt-180");
    $(this).siblings().toggle();
  });

  // tab switching on portal page

  $(".faq-sponsor-portal").hide();
  $(".faq-sp-btn").on("click", function () {
    $(".faq-sponsor-portal").show();
    $(".faq-mobile-application").hide();
    $(this).addClass("btn-bg");
    $(".faq-mob-btn").removeClass("btn-bg");
  });

  $(".faq-mob-btn").on("click", function () {
    $(".faq-sponsor-portal").hide();
    $(".faq-mobile-application").show();
    $(this).addClass("btn-bg");
    $(".faq-sp-btn").removeClass("btn-bg");
  });

  // manual toggling

  $(".app-manual-block").hide();
  $(".user-manual-btn").on("click", function () {
    $(".app-manual-block").slideToggle();
  });

  $(".sponsor-manual-block").hide();
  $(".sponsor-manual-btn").on("click", function () {
    $(".sponsor-manual-block").slideToggle();
  });

  $(".platform-sp-block").hide();
  $(".pf-sp-btn").on("click", function () {
    $(".platform-sp-block").fadeToggle();
  });

  $(".platform-mob-block").hide();
  $(".pf-mb-btn").on("click", function () {
    $(".platform-mob-block").fadeToggle();
  });

  // play video

  $(".play-btn-block").on("click", function () {
    $(".popup-block").fadeIn();
    $(".popup").fadeIn();
  });

  $(".close-button").on("click", function () {
    $(".popup").fadeOut();
    $(".popup-block").fadeOut();
  });

  // adding youtube links

  $(".hero-btn").on("click", function () {
    $("#ifr").attr("src", "https://www.youtube-nocookie.com/embed/oR5KMKEqZoM");
  });
  $(".sponsor-ply-btn").on("click", function () {
    $("#ifr").attr("src", "https://www.youtube-nocookie.com/embed/RJ78_l1VVGc");
  });
  $(".sponsor-mob-button").on("click", function () {
    $("#ifr").attr("src", "https://www.youtube-nocookie.com/embed/oR5KMKEqZoM");
  });
});

$(document).ready(function () {
  $("header .header__dropdown .locale-dropdown .lng-dropdown").hover(
    function () {
      $("header .header__dropdown .locale-dropdown .lng-dropdown .globe").attr(
        "src",
        "./assets/images/globe-navy.svg"
      );
      $(
        "header .header__dropdown .locale-dropdown .lng-dropdown .arw-dwn"
      ).attr("src", "./assets/images/arw-down-navy.svg");
    },
    function () {
      $("header .header__dropdown .locale-dropdown .lng-dropdown .globe").attr(
        "src",
        "./assets/images/globe.png"
      );
      $(
        "header .header__dropdown .locale-dropdown .lng-dropdown .arw-dwn"
      ).attr("src", "./assets/images/arw-down.png");
    }
  );
});
