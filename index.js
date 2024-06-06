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

// Función para generar un número aleatorio
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Generar un número aleatorio como versión
var randomVersion = getRandomInt(1000000);

// Añadir el parámetro aleatorio a los archivos CSS y JS
document.write(
  '<link rel="stylesheet" href="styles.css?v=' + randomVersion + '">'
);
document.write(
  '<script src="index.js?v=' + randomVersion + '"><\/script>'
);
