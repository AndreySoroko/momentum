import {getTimeOfDay} from './clock-date-greeting.js';

const bgImage = document.querySelector('.body');

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let randomInt = getRandomInt(1, 21);

function setBg(int){
  let timeOfDay = getTimeOfDay();
  let bgNum = int.toString().padStart(2, "0");
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/andreysoroko/momentum-assets/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {
    bgImage.style.background = `url(${img.src})`;
  }
}
 
setBg(randomInt);

let slideNextButton = document.querySelector('.slide-next');
let slidePrevButton = document.querySelector('.slide-prev');

function getSlideNext(){
    if (randomInt === 20) {
      randomInt = 1;
    } else {
      randomInt = randomInt + 1;
    }
    // console.log("Next", randomInt);
    setBg(randomInt);
  };

function getSlidePrev(){
  if (randomInt === 1) {
    randomInt = 20;
  } else {
    randomInt = randomInt - 1;
  }
  // console.log("Prev", randomInt);
  setBg(randomInt);
};

slideNextButton.addEventListener('click', getSlideNext);
slidePrevButton.addEventListener('click', getSlidePrev);