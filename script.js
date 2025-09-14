const playBtn = document.getElementById("playBtn");
const video = document.getElementById("myVideo");

playBtn.addEventListener("click", () => {
  video.style.display = "block"; 
  video.play();
  video.volume = 1.0;

  playBtn.style.display = "none";
  document.body.style.background = "black";

  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});
