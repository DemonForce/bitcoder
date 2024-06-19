document.addEventListener("DOMContentLoaded", function () {
  function detectDevice() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.body.classList.add("mobile");
    } else {
      document.body.classList.remove("mobile");
    }
  }

  window.addEventListener("resize", detectDevice);
  window.addEventListener("orientationchange", detectDevice);
  detectDevice();

  const titleElements = document.querySelectorAll(".binary-title");
  const binaryCharacters = "01";

  function getRandomBinary() {
    return binaryCharacters[
      Math.floor(Math.random() * binaryCharacters.length)
    ];
  }

  function animateCharacter(characterElement, targetChar, maxIterations) {
    let iterations = 0;
    const interval = setInterval(() => {
      if (iterations >= maxIterations) {
        characterElement.textContent =
          targetChar === " " ? "\u00A0" : targetChar;
        clearInterval(interval);
      } else {
        characterElement.textContent = getRandomBinary();
      }
      iterations++;
    }, 100);
  }

  function animateTitle(element, text) {
    const characters = text.split("");
    element.innerHTML = characters
      .map((char) => `<span>${getRandomBinary()}</span>`)
      .join("");
    const characterElements = element.querySelectorAll("span");

    characterElements.forEach((charElement, index) => {
      animateCharacter(charElement, characters[index], 20 + index * 2);
      charElement.addEventListener("mouseenter", () => {
        animateCharacter(charElement, getRandomBinary(), 20);
      });
      charElement.addEventListener("mouseleave", () => {
        animateCharacter(charElement, characters[index], 20);
      });
      charElement.addEventListener("touchstart", () => {
        animateCharacter(charElement, getRandomBinary(), 20);
      });
      charElement.addEventListener("touchend", () => {
        animateCharacter(charElement, characters[index], 20);
      });
    });
  }

  function showTitles() {
    titleElements.forEach((element) => {
      const text = element.textContent;
      element.classList.add("visible");
      animateTitle(element, text);
    });
  }

  setTimeout(showTitles, 500);
});

