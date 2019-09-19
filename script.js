const button = document.getElementById('button');
const audio = new Audio('portals.mp3')

var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audio.pause()
  } else {
    audio.play();
  }
};
audio.onplaying = function() {
  isPlaying = true;
};
audio.onpause = function() {
  isPlaying = false;
};

button.addEventListener('click', ()=> {
    togglePlay() 
})

