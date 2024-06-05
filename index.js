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
