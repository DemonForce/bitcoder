document.addEventListener("DOMContentLoaded", function () {
  function detectDevice() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
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
        // Restablecer el caracter correcto al finalizar el toque
        setTimeout(() => {
          animateCharacter(charElement, characters[index], 20);
        }, 200); // Ajustar el tiempo según sea necesario
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

  function loadDynamicCSS() {
    if (!document.querySelector('link[href*="styles.css"]')) {
      var cssLink = document.createElement("link");
      cssLink.href = "styles.css?v=" + Math.floor(Math.random() * 1000);
      cssLink.rel = "stylesheet";
      document.head.appendChild(cssLink);
    }
  }

  function loadDynamicJS() {
    if (!document.querySelector('script[src*="index.js"]')) {
      var jsLink = document.createElement("script");
      jsLink.src = "index.js?v=" + Math.floor(Math.random() * 1000);
      document.head.appendChild(jsLink);
    }
  }

  // Cargar archivos CSS y JS dinámicamente
  loadDynamicCSS();
  loadDynamicJS();
});

function toggleLanguage() {
  const aboutText = document.getElementById("about-text");
  const skillsText = document.getElementById("skills-text");
  const projectsText = document.getElementById("projects-text");
  const contactText = document.getElementById("contact-text");

  if (aboutText.innerText === "About") {
    aboutText.innerText = "Sobre mí";
    skillsText.innerText = "Habilidades";
    projectsText.innerText = "Proyectos";
    contactText.innerText = "Contacto";
  } else {
    aboutText.innerText = "About";
    skillsText.innerText = "Skills";
    projectsText.innerText = "Projects";
    contactText.innerText = "Contact";
  }
}
