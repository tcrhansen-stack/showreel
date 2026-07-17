const backgroundFiles = [
  "images/hero-01.jpg",
  "images/hero-02.jpg",
  "images/hero-03.jpg",
  "images/hero-04.jpg",
  "images/hero-05.jpg",
  "images/hero-06.jpg"
];

const backgrounds = document.getElementById("backgrounds");
const loadedBackgrounds = [];
let activeBackground = 0;

if (backgrounds) {
  backgroundFiles.forEach((src) => {
    const image = new Image();
    image.onload = () => {
      const layer = document.createElement("div");
      layer.className = "background";
      layer.style.backgroundImage = `url("${src}")`;
      backgrounds.appendChild(layer);
      loadedBackgrounds.push(layer);
      if (loadedBackgrounds.length === 1) layer.classList.add("is-active");
    };
    image.src = src;
  });

  setInterval(() => {
    if (loadedBackgrounds.length < 2) return;
    loadedBackgrounds[activeBackground].classList.remove("is-active");
    activeBackground = (activeBackground + 1) % loadedBackgrounds.length;
    loadedBackgrounds[activeBackground].classList.add("is-active");
  }, 11000);
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();