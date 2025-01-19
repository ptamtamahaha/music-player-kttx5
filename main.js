// Khai báo biến cho các nút điều khiển, thanh thời lượng và bài hát
let progress = document.getElementById('progress');
let song = document.getElementById('song');
let controlIcon = document.getElementById('control-icon');
// Load data trực tiếp, Set giá trị maximum và giá trị dựa trên thời lượng của bài hát(id=Song)
song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
// Biến playPause cho nút play/pause nhạc
function playPause() {
  if (controlIcon.classList.contains('fa-pause')) {
    song.pause();
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
  } else {
    song.play();
    controlIcon.classList.remove("fa-play");
    controlIcon.classList.add("fa-pause");
  }
}
// Thể hiện sự thay đổi của thanh thời lượng mỗi 500ms theo thời lượng của bài
if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
// JS cho thanh thời lượng di chuyển theo đúng thời gian của bài(liên hệ với mỗi lần bấm play/pause để di chuyển thanh thời lượng)
progress.onchange = () => {
  song.currentTime = progress.value;
  song.play();

  controlIcon.classList.remove('fa-play');
  controlIcon.classList.add('fa-pause');
};