const mainContainer = document.querySelector(".main-container");
const msg = document.getElementById("msg");

msg.style.fontSize = "2rem";
msg.style.fontWeight = "Bold";

const animate = () => {
  msg.textContent = "Inhale";
  mainContainer.classList.add("grow");

  setTimeout(() => {
    msg.textContent = "Freeze";

    setTimeout(() => {
      msg.textContent = "Exhale";
      mainContainer.classList.add("fadeOut");
    }, 2000);
  }, 4000);
};
setInterval(() => {
  animate();
}, 10000);

animate();
