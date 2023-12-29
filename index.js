const buttons = document.querySelectorAll(".switch");
const images = document.querySelectorAll("img");
const btns = document.querySelectorAll(".btn");
const sections = document.querySelectorAll("section");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("btn-profile")) {
      sections.forEach((section) => {
        section.classList.toggle("active");
      });
    }
    if (btn.classList.contains("btn-back")) {
      sections.forEach((section) => {
        section.classList.toggle("active");
      });
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.classList.contains("switch-1")) {
      document
        .querySelector(":root")
        .style.setProperty(`--image-url`, "url(./image/bw_bg.webp)");
      document.querySelector("body").style.backgroundPosition = "40% 20%";
      images.forEach((images, index) => {
        images.src = `./image/bw_${index}.webp`;
      });
    }
    if (button.classList.contains("switch-2")) {
      document
        .querySelector(":root")
        .style.setProperty(`--image-url`, "url(./image/color_bg.webp)");
      document.querySelector("body").style.backgroundPosition = "50%";
      images.forEach((images, index) => {
        images.src = `./image/color_${index}.webp`;
      });
    }
  });
  button.addEventListener("touchstart", function () {
    if (button.classList.contains("switch-1")) {
      document
        .querySelector(":root")
        .style.setProperty(`--image-url`, "url(./image/bw_bg.webp)");
      document.querySelector("body").style.backgroundPosition = "40% 20%";
      images.forEach((images, index) => {
        images.src = `./image/bw_${index}.webp`;
      });
    }
    if (button.classList.contains("switch-2")) {
      document
        .querySelector(":root")
        .style.setProperty(`--image-url`, "url(./image/color_bg.webp)");
      document.querySelector("body").style.backgroundPosition = "50%";
      images.forEach((images, index) => {
        images.src = `./image/color_${index}.webp`;
      });
    }
  });
});
