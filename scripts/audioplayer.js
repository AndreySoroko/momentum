import playList from './playList.js';

const playPauseButton = document.querySelector('.play');
const playPrevButton = document.querySelector('.play-prev');
const playNextButton = document.querySelector('.play-next');

const audio = new Audio();

console.log(playList);
let playNum = 0;

audio.src = playList[playNum].src;
audio.currentTime = 0;

function playPause() {
  toggleBtn();
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function toggleBtn() {
  playPauseButton.classList.toggle('pause');
}

playPauseButton.addEventListener('click', playPause);

const playListContainer = document.querySelector('.play-list');

for (let i = 0; i < playList.length; i++) {
  const li = document.createElement('li');
  playListContainer.append(li);
  li.classList.add('play-item');
  li.textContent = playList[i].title;
}

function playNext(){
  if(playNum === playList.length -1) {
    playNum = 0;
  } else playNum += 1;
  audio.src = playList[playNum].src;
  audio.play();
  // console.log(playNum);
}

function playPrev(){
  if(playNum === 0) {
    playNum = playList.length -1;
  } else playNum -= 1;
  audio.src = playList[playNum].src;
  audio.play();
  // console.log(playNum);
}



playNextButton.addEventListener('click', playNext);
playPrevButton.addEventListener('click', playPrev);
