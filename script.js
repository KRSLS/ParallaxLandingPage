window.addEventListener("scroll", (event) => {
  console.log(scrollY);

  var opacity = 1;
  var opacity2 = 1;
  var scale = 1;
  var blur = 0;

  opacity -= scrollY * 0.006;
  opacity2 -= scrollY * 0.001;
  if (opacity < 0) opacity = 0;

  scale += scrollY * 0.004;
  if (scale < 0) scale = 0;
  // if (scale > 2) scale = 2;

  blur += scrollY * 0.03;
  if (blur < 0) blur = 0;
  if (blur > 40) blur = 40;

  var landingPageImage = document.getElementById("landingPageImage");
  var hero = document.getElementById("heroContainer");
  hero.style.opacity = opacity;
  landingPageImage.style.opacity = opacity2;
  hero.style.top = window.innerHeight / 2 + scrollY;
  if (scrollY < 1000) landingPageImage.style.scale = scale;
  landingPageImage.style.filter = `blur(${blur}px)`;
  hero.style.filter = `blur(${blur}px)`;
});
