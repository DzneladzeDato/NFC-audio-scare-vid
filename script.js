const playBtn = document.getElementById("playBtn");
const video = document.getElementById("myVideo");

playBtn.addEventListener("click", () => {
  video.style.display = "block"; // Show video
  video.play();
  video.volume = 1.0; // Full volume

  // Hide button when video starts
  playBtn.style.display = "none";

  // Request fullscreen
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { // Safari
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { // IE/Edge
    video.msRequestFullscreen();
  }
});
