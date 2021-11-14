const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-mobile");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

// var container = document.getElementById("container-banner_text_title");
// var inner = document.getElementById("web");
// var counter = 0;
// var updateRate = 10;
// var isTimeToUpdate = function () {
//   return counter++ % updateRate === 0;
// };
// var mouse = {
//   _x: 0,
//   _y: 0,
//   x: 0,
//   y: 0,
//   updatePosition: function (event) {
//     var e = event || window.event;
//     this.x = e.clientX - this._x;
//     this.y = (e.clientY - this._y) * -1;
//   },
//   setOrigin: function (e) {
//     this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
//     this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
//   },
//   show: function () {
//     return "(" + this.x + ", " + this.y + ")";
//   },
// };
// // Track the mouse position relative to the center of the container.
// mouse.setOrigin(container);

// var update = function (event) {
//   mouse.updatePosition(event);
//   updateTransformStyle(
//     (mouse.y / inner.offsetHeight / 2).toFixed(2),
//     (mouse.x / inner.offsetWidth / 2).toFixed(2)
//   );
// };

// var updateTransformStyle = function (x, y) {
//   var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
//   inner.style.transform = style;
//   inner.style.webkitTransform = style;
//   inner.style.mozTransform = style;
//   inner.style.msTransform = style;
//   inner.style.oTransform = style;
// };

// var onMouseEnterHandler = function (event) {
//   update(event);
// };
// var onMouseLeaveHandler = function () {
//   inner.style = "";
// };
// var onMouseMoveHandler = function (event) {
//   if (isTimeToUpdate()) {
//     update(event);
//   }
// };

// container.onmouseenter = onMouseEnterHandler;
// container.onmouseleave = onMouseLeaveHandler;
// container.onmousemove = onMouseMoveHandler;

// (function () {
//   // Init
//   var container = document.querySelector("body"),
//     inner = document.getElementById("web");

//   // Mouse
//   var mouse = {
//     _x: 0,
//     _y: 0,
//     x: 0,
//     y: 0,
//     updatePosition: function (event) {
//       var e = event || window.event;
//       this.x = e.clientX - this._x;
//       this.y = (e.clientY - this._y) * -1;
//     },
//     setOrigin: function (e) {
//       this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
//       this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
//     },
//     show: function () {
//       return "(" + this.x + ", " + this.y + ")";
//     },
//   };

//   // Track the mouse position relative to the center of the container.
//   mouse.setOrigin(container);

//   //-----------------------------------------

//   var counter = 0;
//   var updateRate = 10;
//   var isTimeToUpdate = function () {
//     return counter++ % updateRate === 0;
//   };

//   //-----------------------------------------

//   var onMouseEnterHandler = function (event) {
//     update(event);
//   };

//   var onMouseLeaveHandler = function () {
//     inner.style = "";
//   };

//   var onMouseMoveHandler = function (event) {
//     if (isTimeToUpdate()) {
//       update(event);
//     }
//   };

//   //-----------------------------------------

//   var update = function (event) {
//     mouse.updatePosition(event);
//     updateTransformStyle(
//       (mouse.y / inner.offsetHeight / 2).toFixed(2),
//       (mouse.x / inner.offsetWidth / 2).toFixed(2)
//     );
//   };

//   var updateTransformStyle = function (x, y) {
//     var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
//     inner.style.transform = style;
//     inner.style.webkitTransform = style;
//     inner.style.mozTransform = style;
//     inner.style.msTransform = style;
//     inner.style.oTransform = style;
//   };

//   //-----------------------------------------

//   container.onmouseenter = onMouseEnterHandler;
//   container.onmouseleave = onMouseLeaveHandler;
//   container.onmousemove = onMouseMoveHandler;
// })();

// new hoverEffect({
//   parent: document.querySelector(".container-banner_img"),
//   // intensity: 0.3,
//   image1: "./assets/images/quentin.png",
//   image2: "./assets/images/quentin.png",
//   displacementImage: "./assets/images/diss.png",
//   // imagesRatio: 100 / 100,
//   intensity1: 0.1,
//   intensity2: 0.1,
//   // angle2: Math.PI / 2,
// });

// var myAnimation = new hoverEffect({
// 	parent: document.querySelector('.container-banner_img'),
// 	image1: './assets/images/quentin.jpg',
// 	image2: './assets/images/quentin.jpg',
// 	displacementImage: './assets/images/diss.png'
// });

// SMOOTH SCROLL
const scroll = new Scrooth({
  element: window,
  strength: 10,
  acceleration: 1.5,
  deceleration: 0.975,
});

// =============================

// OVERLAY
TweenMax.to(".first", 1.5, {
  delay: 0.3,
  top: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.to(".second", 1.5, {
  delay: 0.5,
  top: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.to(".third", 1.5, {
  delay: 0.7,
  top: "-100%",
  ease: Expo.easeInOut,
});
// BANNER
gsap.fromTo(
  ".gsap-nav",
  1,
  { y: -100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.4 }
);
gsap.fromTo(
  ".gsap-icons",
  1,
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.5 }
);
gsap.fromTo(
  ".gsap-banner_img",
  1,
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2 }
);
gsap.fromTo(
  ".gsap-banner_1",
  1,
  { x: -200, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, delay: 1 }
);
gsap.fromTo(
  ".gsap-banner_2",
  1,
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.2 }
);
gsap.fromTo(
  ".gsap-banner_3",
  1,
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 1.8 }
);
gsap.fromTo(
  ".gsap-banner_4",
  1,
  { x: 200, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, delay: 1.6 }
);
gsap.fromTo(
  ".gsap-banner_5",
  1,
  { x: -200, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, delay: 1.4 }
);

gsap.registerPlugin(ScrollTrigger);


