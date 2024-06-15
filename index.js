var audio = document.getElementById("backgroundAudio");
var volumeControl = document.getElementById("volumeControl");
var isPlaying = false;

volumeControl.addEventListener("input", function () {
  if (volumeControl.value > 0 && !isPlaying) {
    audio.play();
    isPlaying = true;
  }
  audio.volume = volumeControl.value;
});

document.addEventListener("DOMContentLoaded", function() {
  const titleElements = document.querySelectorAll('.binary-title');
  const binaryCharacters = '01';
  
  function getRandomBinary() {
      return binaryCharacters[Math.floor(Math.random() * binaryCharacters.length)];
  }
  
  function animateCharacter(characterElement, targetChar, maxIterations) {
      let iterations = 0;
      const interval = setInterval(() => {
          if (iterations >= maxIterations) {
              characterElement.textContent = targetChar === ' ' ? '\u00A0' : targetChar;
              clearInterval(interval);
          } else {
              characterElement.textContent = getRandomBinary();
          }
          iterations++;
      }, 100);
  }
  
  function animateTitle(element, text) {
      const characters = text.split('');
      element.innerHTML = characters.map(char => `<span>${getRandomBinary()}</span>`).join('');
      const characterElements = element.querySelectorAll('span');
      
      characterElements.forEach((charElement, index) => {
          animateCharacter(charElement, characters[index], 20 + index * 2);
          charElement.addEventListener('mouseenter', () => {
              animateCharacter(charElement, getRandomBinary(), 20);
          });
          charElement.addEventListener('mouseleave', () => {
              animateCharacter(charElement, characters[index], 20);
          });
      });
  }
  
  function showTitles() {
      titleElements.forEach(element => {
          const text = element.textContent;
          element.classList.add('visible');
          animateTitle(element, text);
      });
  }
  
  setTimeout(showTitles, 500);
});
