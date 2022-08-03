import $ from "jquery";
window.jQuery = $;
window.$ = $;
import { Fancybox } from "@fancyapps/ui";
// import Swiper from "swiper/bundle";
// import { gsap } from "../../node_modules/gsap/dist/gsap";
// import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger";

// import LocomotiveScroll from "../../node_modules/locomotive-scroll/dist/locomotive-scroll";

import "./libs/jquery.event.move";
import "./libs/jquery.twentytwenty";
import "./openseadragon/openseadragon";
import "./modules/tab-section";
import "./libs/jquery.magnific-popup.min";
// require("./slickQuiz");
// require("./master");
// require("../js/libs/three.min");
// require("../js/libs/panolens.min");
import Swiper from "swiper/bundle";
import { Tabs } from "./modules/tabs";
import tippy, { followCursor } from "tippy.js";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

let tabs;

const initTabs = () => {
  tabs = new Tabs();
  // Используйте в разработке экспортируемую переменную tabs, window сделан для бэкэнда
  window.tabs = tabs;
};

export { initTabs, tabs };
initTabs();

import "../js/modules/read-more";

document.addEventListener("DOMContentLoaded", () => {
  // require("/js/modules/tab-section");
  // Слайдер на главной
  const mainSlider = new Swiper(".promo-slider .swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    mousewheelControl: true,
    slidesPerView: 1.5,
    initialSlide: 2,
    coverflowEffect: {
      //rotate: 5,
      rotate: 1,
      stretch: 250,
      depth: 50,
      modifier: 2,
      slideShadows: false,
      scale: 0.9,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: {
      sensitivity: 1,
    },
    slideToClickedSlide: true,
    // navigation: {
    //   nextEl: ".promo-slider__button-next",
    //   prevEl: ".promo-slider__button-prev",
    // },
    pagination: {
      el: ".promo-slider__pagination",
      type: "bullets",
      clickable: true,
    },
  });

  //Слайдер карусель на лендинге
  const sectionSlider = new Swiper(".section__slider.swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    mousewheelControl: true,
    slidesPerView: 1,
    initialSlide: 1,
    coverflowEffect: {
      rotate: 1,
      stretch: 500,
      depth: 50,
      modifier: 2,
      slideShadows: false,
      scale: 0.9,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: {
      sensitivity: 1,
    },
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".section__slider-button-next",
      prevEl: ".section__slider-button-prev",
    },
  });

  const menuButton = document.querySelector(".main-nav__button");
  const menuList = document.querySelector(".main-nav__list");
  const body = document.querySelector("body");
  const lang = document.querySelector(".lang");
  const playBtn = document.querySelector(".volume__button");

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      let expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", !expanded);
      menuButton.classList.toggle("main-nav__button--open");
      menuList.classList.toggle("main-nav__list--open");
      lang.classList.toggle("lang--active");
      // playBtn.classList.toggle("volume__button--active");
      body.classList.toggle("page__body--fixed");
    });

    document.onkeydown = function (evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        menuButton.classList.remove("main-nav__button--open");
        menuList.classList.remove("main-nav__list--open");
        lang.classList.remove("lang--active");
      }
    };
  }

  const playAudio = () => {
    if (playBtn.classList.contains("volume__button--play")) {
      document.querySelector("audio").pause();
      console.log("pause!");
      playBtn.classList.remove("volume__button--play"); // changing icon for button
    } else {
      document.querySelector("audio").play();
      console.log("play!");
      playBtn.classList.add("volume__button--play");
    }
  };

  if (playBtn) {
    setTimeout(() => {
      playBtn.addEventListener("click", (e) => {
        // playBtn.classList.toggle("volume__button--play");
        playAudio();
      });
    }, 500);
  }

  if (document.querySelector("audio")) {
    document.querySelector("audio").addEventListener("ended", (e) => {
      playBtn.classList.remove("volume__button--play");
    });
  }

  //Слайдр для карт
  const swiperMap = new Swiper(".map__slider", {
    slidesPerView: 1,
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  // let mapTabs = document.querySelectorAll(".map [role=tab]");

  // if (mapTabs) {
  //   mapTabs.forEach((tab) => {
  //     tab.addEventListener("click", function () {
  //       //Слайдр для карт
  //       const swiperMap = new Swiper(".map__slider", {
  //         effect: "fade",
  //         navigation: {
  //           nextEl: ".swiper-button-next",
  //           prevEl: ".swiper-button-prev",
  //         },
  //         pagination: {
  //           el: ".swiper-pagination",
  //           clickable: true,
  //         },
  //       });
  //     });
  //   });
  // }

  const swiperGallery = new Swiper(".swiper-gallery", {
    effect: "coverflow",
    spaceBetween: 10,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    mousewheelControl: false,
    initialSlide: 0,
    coverflowEffect: {
      //rotate: 5,
      rotate: 5,
      stretch: 20,
      depth: 100,
      modifier: 3,
      slideShadows: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    slideToClickedSlide: true,
    // thumbs: {
    //   swiper: swiperThumbs,
    // },
  });

  //Слайдр с фейдом на лендиге
  const sectionFadeSlider = new Swiper(".swiper-fade-slider", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      waitForTransition: false,
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 2500,
    loop: true,
    simulateTouch: false,
  });

  const swiper = new Swiper(".textpage__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const textpageImagesSlider = new Swiper(".textpage__images-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
      },
    },
  });

  const tooltips = Array.from(document.querySelectorAll(".tooltip"));
  const tooltipContainer = document.querySelector(".tooltip-content");

  let tooltipID;
  tooltips.forEach((tooltip) => {
    if (tooltip) {
      tooltip.addEventListener("mouseenter", (e) => {
        console.log("check");
        tooltipID = e.target.getAttribute("data-id");
        tooltipContainer.classList.add("tooltip-content--fade-in");
        tooltipContainer.style.left = `${e.pageX}px`;
        tooltipContainer.style.top = `${e.pageY}px`;
        tooltipContainer.innerHTML = tooltipData[tooltipID - 1].txt;
      });

      tooltip.addEventListener("mouseout", (e) => {
        tooltipContainer.classList.remove("tooltip-content--fade-in");
      });
    }
  });

  if (tooltipContainer) {
    tooltipContainer.addEventListener("mouseenter", () => {
      tooltipContainer.classList.add("tooltip-content--fade-in");
    });
    tooltipContainer.addEventListener("mouseout", () => {
      tooltipContainer.classList.remove("tooltip-content--fade-in");
    });
  }

  // let dropdown = document.querySelectorAll(".main-nav__item--with-dropdown");

  // dropdown.forEach((element) =>
  //   element.addEventListener("click", (event) => {
  //     // event.preventDefault();
  //     // event.stopPropagation();

  //     document
  //       .querySelectorAll(".main-nav__item--with-dropdown")
  //       .forEach((element) => {
  //         element.classList.remove("main-nav__item--open");
  //       });
  //     element.classList.add("main-nav__item--open");

  //     let innerLists = element.querySelector("ul");
  //     if (innerLists) {
  //       if (!innerLists.classList.contains("main-nav__sublist--open")) {
  //         document
  //           .querySelector("ul")
  //           .querySelectorAll("ul")
  //           .forEach((elm) => {
  //             if (!isDescendant(elm, element)) {
  //               elm.classList.remove("main-nav__sublist--open");
  //             }
  //           });
  //       }

  //       innerLists.classList.toggle("main-nav__sublist--open");
  //     }
  //   })
  // );

  function isDescendant(parent, child) {
    let node = child.parentNode;
    while (node != null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  $(".textpage__img-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    tCounter: '<span class="mfp-counter">%curr% / %total%</span>', // markup of counter
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return item.el.attr("data-caption");
      },
    },
    zoom: {
      enabled: true,
    },
  });

  $(".textpage__iframe-popup").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-with-zoom mfp-img-mobile",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $(".popup-inline").magnificPopup({
    type: "inline",
    preloader: false,
    mainClass: "mfp-img-mobile  mfp-fade",
    // closeBtnInside: false,
    // fixedContentPos: true,
    // gallery: {
    // 	enabled: true
    // },

    callbacks: {
      open: function () {
        $(".before-after").twentytwenty({
          before_label: "До реставрации",
          after_label: "После реставрации",
        });

        $(".before-after-eng").twentytwenty({
          before_label: "Before restoration",
          after_label: "Digital reconstruction",
        });
      },
    },
  });

  // var $items = $('path');
  var $items = $(".map__img");
  var $description = $(".description__item");

  $(".btn-group").on("click", ".filter", function () {
    // var value = $(this).data('filter');
    // $items.removeClass();
    // $items.not($selected).removeClass(value);

    // var $selected = $items.filter(function () {
    //   return $(this).data('filter').indexOf(value) != -1;
    // }).addClass(value);

    var value = $(this).data("filter");
    $items.removeClass("active");
    $items.not($selected).removeClass("active");

    var $selected = $items
      .filter(function () {
        return $(this).data("filter").indexOf(value) != -1;
      })
      .addClass("active");
    $(this).addClass("active").siblings().removeClass("active");

    $description.removeClass("active");
    var $selectedDescr = $description
      .filter(function () {
        return $(this).data("filter").indexOf(value) != -1;
      })
      .fadeIn();
    $description.not($selectedDescr).fadeOut(10);
  });

  const slides = document.querySelectorAll(".cards-section__item");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }

  tippy("[data-tippy-content]", {
    arrow: false,
    placement: "bottom-start",
    maxWidth: "800px",
    theme: "custom",
    offset: [0, 10],
    plugins: [followCursor],
    followCursor: true,

    // trigger: "click",
    onShow(instance) {
      let urlSrc = instance.reference.getAttribute("data-src");
      fetch(urlSrc)
        .then((response) => response.blob())
        .then((blob) => {
          // Convert the blob into a URL
          const url = URL.createObjectURL(blob);
          // Create an image
          const image = new Image();
          // image.width = 200;
          // image.height = 200;
          image.style.display = "block";
          image.src = url;
          // Update the tippy content with the image
          instance.setContent(image);
        })
        .catch((error) => {
          // Fallback if the network request failed
          instance.setContent(`Request failed. ${error}`);
        });
    },
  });

  Fancybox.bind("[data-fancybox]", {
    lockAxis: "y",
    Toolbar: {
      display: [
        { id: "prev", position: "center" },
        { id: "counter", position: "center" },
        { id: "next", position: "center" },
        "close",
      ],
    },
  });

  Fancybox.bind("[data-fancybox='3d']", {
    Toolbar: {
      autoEnable: false,
      display: ["counter", "close"],
    },
    Thumbs: {
      autoStart: false,
    },
  });

  const MAPBOXGLCONF = {
    accessToken:
      "pk.eyJ1IjoiY2FuZWtsaXMiLCJhIjoiY2tqc2g2bWk1M3pyODJ6bG9jNTlicG1qbSJ9.kAq6U0hW3k2xL5j7paZWcg",
    style: "mapbox://styles/caneklis/cl4gpg4fw000j14ogfk525oi0",
  };

  // mapboxgl.accessToken = 'pk.eyJ1IjoiY2FuZWtsaXMiLCJhIjoiY2tqc2g2bWk1M3pyODJ6bG9jNTlicG1qbSJ9.kAq6U0hW3k2xL5j7paZWcg';
  mapboxgl.accessToken = MAPBOXGLCONF.accessToken;

  if (document.querySelector("#poimapbox-map")) {
    var map = new mapboxgl.Map({
      container: "poimapbox-map",
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: MAPBOXGLCONF.style,
      center: [37.61270240042472, 55.77190807654196],
      // initial zoom
      zoom: 10,
      scrollZoom: false,
      bearing: 0,
      // pitch: 15
    });

    map.on("load", function (e) {
      map.addSource("places", {
        type: "geojson",
        data: places,
      });
      buildLocationList(places);
    });

    places.features.forEach(function (marker, i) {
      // Create an img element for the marker
      const el = document.createElement("div");
      el.id = "poimapbox-marker-" + i;
      el.className = "poimapbox-marker";
      // Add markers to the map at all points
      new mapboxgl.Marker(el, { offset: [0, 0] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      el.addEventListener("mouseover", function (e) {
        const description = marker.properties.name;
        const address = marker.properties.address;
        const innerContent = description + "<br> " + address;

        const pinDescription = document.createElement("div");
        pinDescription.classList.add("mapboxgl-pin-description");
        pinDescription.innerHTML = innerContent;

        const map = document.querySelector("#poimapbox-map");

        map.appendChild(pinDescription);
      });

      el.addEventListener("mouseleave", function (e) {
        const pinDescription = document.querySelector(
          ".mapboxgl-pin-description"
        );

        pinDescription.remove();
      });

      el.addEventListener("click", function (e) {
        // 1. Fly to the point
        flyToPark(marker);

        // 2. Close all other popups and display popup for clicked Park
        createPopUp(marker);

        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        const activeItem = document.getElementsByClassName("active");

        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove("active");
        }

        const listing = document.getElementById("listing-" + i);
        listing.classList.add("active");
      });
    });

    function flyToPark(currentFeature) {
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 12,
      });
    }

    const setAttributes = (el, attrs) => {
      for (const key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    };

    function createPopUp(currentFeature) {
      const popUps = document.getElementsByClassName("mapboxgl-popup");
      if (popUps[0]) {
        popUps[0].remove();
      }

      const generateGallery = (galleryImg, galleryLink, modClass, type) => {
        if (galleryImg.length > 0) {
          const photosContainer = document.createElement("div");
          photosContainer.classList.add("mapbox__gallery-list");
          photosContainer.classList.add(modClass);
          for (let i = 0; i < galleryImg.length; i++) {
            const photoLink = document.createElement("a");
            if (modClass === "mapbox__gallery-list--desktop-3d") {
              setAttributes(photoLink, {
                href: galleryLink[i].link,
                "data-fancybox": "3d",
                "data-type": "iframe",
                "data-caption": galleryLink[i].caption,
              });
            } else if (modClass === "mapbox__gallery-list--desktop") {
              setAttributes(photoLink, {
                href: galleryLink[i].link,
                "data-fancybox": "mapbox-gallery-desktop",
                "data-caption": galleryLink[i].caption,
              });
            } else if (modClass === "mapbox__gallery-list--mobile") {
              setAttributes(photoLink, {
                href: galleryLink[i].link,
                "data-fancybox": "mapbox-gallery-mobile",
                "data-caption": galleryLink[i].caption,
              });
            } else {
              setAttributes(photoLink, {
                href: galleryLink[i].link,
                "data-fancybox": "mapbox-gallery",
                "data-caption": galleryLink[i].caption,
              });
            }

            const photo = document.createElement("img");
            photo.classList.add("mapbox__gallery-pic");
            setAttributes(photo, {
              src: galleryImg[i],
              alt: "Фотография интерьера",
            });
            photoLink.appendChild(photo);
            photosContainer.appendChild(photoLink);
          }

          return photosContainer;
        }
      };

      const galleryTpl = (el) => {
        if (el.gallery3dLink.length > 0) {
          return generateGallery(
            el.galleryTmbDesktop,
            el.gallery3dLink,
            "mapbox__gallery-list--desktop-3d",
            "iframe"
          ).outerHTML;
        }

        return generateGallery(
          el.galleryTmb,
          el.gallery,
          "mapbox__gallery-list--desktop"
        ).outerHTML;
      };

      const tpl = `<a class="mapbox__preview-pic" href="${
        currentFeature.properties.image
      }" data-fancybox="mapbox-gallery"><img src="${
        currentFeature.properties.image
      }"></a>
      <div class="mapbox__popup-text">
        <h3>${currentFeature.properties.name}</h3>
        <p><small>${currentFeature.properties.address}</small></p>
        ${currentFeature.properties.info}
      </div>
      <div class="mapbox__gallery">
        ${galleryTpl(currentFeature.properties)}
        ${
          generateGallery(
            currentFeature.properties.galleryTmb,
            currentFeature.properties.gallery,
            "mapbox__gallery-list--mobile"
          ).outerHTML
        }
      </div>`;

      const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(tpl)
        .addTo(map);
    }

    function buildLocationList(data) {
      for (let i = 0; i < data.features.length; i++) {
        const currentFeature = data.features[i];
        const prop = currentFeature.properties;

        const listings = document.getElementById("poimapbox-listings");
        const listing = listings.appendChild(document.createElement("div"));
        listing.className = "amenity-poi";
        listing.id = "listing-" + i;

        const link = listing.appendChild(document.createElement("a"));
        link.href = "#";
        link.className = "name";
        link.dataPosition = i;
        link.innerHTML = `
        <img src="${currentFeature.properties.imagetmb}" alt="Фотография ${currentFeature.properties.name}">
        <h3>${currentFeature.properties.name}</h3>
      `;

        link.addEventListener("click", function (e) {
          const clickedListing = data.features[this.dataPosition];

          flyToPark(clickedListing);

          createPopUp(clickedListing);

          const activeItem =
            document.getElementsByClassName("amenity-poi active");

          if (activeItem[0]) {
            activeItem[0].classList.remove("active");
          }
          this.parentNode.classList.add("active");
        });
      }
    }

    map.addControl(new mapboxgl.NavigationControl());
  }
});

// $(function () {
//   $("#slickQuiz").slickQuiz({});
// });
