const subtitle = document.querySelector(".subtitle");
const buttons = document.querySelector(".buttons");
const text = "“那个夏天的蝉鸣比哪一年都聒噪，教室窗边枝桠疯长，无奈挡不住烈阳......”";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    subtitle.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  } else {
    buttons.style.opacity = 1;
  }
}

setTimeout(() => {
  subtitle.classList.add("typing");
  typeWriter();
}, 1000);
