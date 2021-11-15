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
ScrollTrigger.create({
  trigger: "#about",
  animation: gsap.fromTo(
    ".about-content_p",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 }
  ),
  start: "top center",
  end: " center bottom",
  scrub: 2,
});

var anim = document.querySelectorAll(".anim");
anim.forEach((anims) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: anims,
      start: "top center",
      end: "center bottom",
      scrub: 1.5,
    },
  });
  tl.fromTo(
    anims,
    {
      y: 100,
      opacity: 0,
    },
    { y: 0, opacity: 1 }
  );
});

var animLeft = document.querySelectorAll(".anim-left");
animLeft.forEach((animLefts) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: animLefts,
      start: "top center",
      end: "center bottom",
      scrub: 1,
    },
  });
  tl.fromTo(
    animLefts,
    {
      x: -100,
      opacity: 0,
    },
    { x: 0, opacity: 1 }
  );
});

var animLeft2 = document.querySelectorAll(".anim-left-2");
animLeft2.forEach((animLeft2s) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: animLeft2s,
      start: "top center",
      end: "center bottom",
      scrub: 2,
    },
  });
  tl.fromTo(
    animLeft2s,
    {
      x: -100,
      opacity: 0,
    },
    { x: 0, opacity: 1 }
  );
});
