// Top Section
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

// Bottom Section
const section = document.querySelector('section');
const end = section.querySelector('h1');

// Scroll Magic
const controller = new ScrollMagic.Controller();

// Scenes
const scene = new ScrollMagic.Scene({
  duration: 30000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

// Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

// Video Animations
let accelamount = 0.9;
let scrollpos = 0;
let delay = 0;

scene.on('update', event => {
  scrollpos = event.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 60);
