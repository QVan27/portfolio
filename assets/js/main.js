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
//   parent: document.querySelector(".container-banner_text_cta"),
//   // intensity: 0.3,
//   image1: "./assets/images/quentin.jpg",
//   image2: "./assets/images/quentin.jpg",
//   displacementImage: "./assets/images/diss.png",
//   imagesRatio: 1,
//   intensity1: 0.5,
//   intensity2: 0.1,
//   // angle2: Math.PI / .5,
// });

// var myAnimation = new hoverEffect({
//   parent: document.querySelector(".container-banner_text_cta"),
//   image1: "./assets/images/quentin.jpg",
//   image2: "./assets/images/quentin.jpg",
//   displacementImage: "./assets/images/diss.png",
//   imagesRatio: 100 / 100,
//   intensity: 0.5,
// });

// SMOOTH SCROLL
const scroll = new Scrooth({
  element: window,
  strength: 10,
  acceleration: 1.5,
  deceleration: 0.975,
});

// =============================




// // set the starting position of the cursor outside of the screen
// let clientX = -100;
// let clientY = -100;
// const innerCursor = document.querySelector(".cursor--small");

// const initCursor = () => {
//   // add listener to track the current mouse position
//   document.addEventListener("mousemove", e => {
//     clientX = e.clientX;
//     clientY = e.clientY;
//   });
  
//   // transform the innerCursor to the current mouse position
//   // use requestAnimationFrame() for smooth performance
//   const render = () => {
//     innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
//     // if you are already using TweenMax in your project, you might as well
//     // use TweenMax.set() instead
//     // TweenMax.set(innerCursor, {
//     //   x: clientX,
//     //   y: clientY
//     // });
    
//     requestAnimationFrame(render);
//   };
//   requestAnimationFrame(render);
// };

// initCursor();

// let lastX = 0;
// let lastY = 0;
// let isStuck = false;
// let showCursor = false;
// let group, stuckX, stuckY, fillOuterCursor;

// const initCanvas = () => {
//   const canvas = document.querySelector(".cursor--canvas");
//   const shapeBounds = {
//     width: 75,
//     height: 75
//   };
//   paper.setup(canvas);
//   const strokeColor = "rgba(255, 94,	0, 0.5)";
//   const strokeWidth = 2;
//   const segments = 8;
//   const radius = 15;
  
//   // we'll need these later for the noisy circle
//   const noiseScale = 50; // speed
//   const noiseRange = 4; // range of distortion
//   let isNoisy = false; // state
  
//   // the base shape for the noisy circle
//   const polygon = new paper.Path.RegularPolygon(
//     new paper.Point(0, 0),
//     segments,
//     radius
//   );
//   polygon.strokeColor = strokeColor;
//   polygon.strokeWidth = strokeWidth;
//   polygon.smooth();
//   group = new paper.Group([polygon]);
//   group.applyMatrix = false;
  
//   const noiseObjects = polygon.segments.map(() => new SimplexNoise());
//   let bigCoordinates = [];
  
//   // function for linear interpolation of values
//   const lerp = (a, b, n) => {
//     return (1 - n) * a + n * b;
//   };
  
//   // function to map a value from one range to another range
//   const map = (value, in_min, in_max, out_min, out_max) => {
//     return (
//       ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
//     );
//   };
  
//   // the draw loop of Paper.js 
//   // (60fps with requestAnimationFrame under the hood)
//   paper.view.onFrame = event => {
//     // using linear interpolation, the circle will move 0.2 (20%)
//     // of the distance between its current position and the mouse
//     // coordinates per Frame
//     lastX = lerp(lastX, clientX, 0.2);
//     lastY = lerp(lastY, clientY, 0.2);
//     group.position = new paper.Point(lastX, lastY);
//   }
// }

// initCanvas();