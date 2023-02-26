const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

function showTime(){
  const dat = new Date();
  const currentTime = dat.toLocaleTimeString('en-Gb');
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate();
  showGreeting();
}
showTime();

function showDate(){
  const dat = new Date();
  const options  = {weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = dat.toLocaleDateString('en-Us', options);
  date.textContent = currentDate;
}

function showGreeting(){
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;
  greeting.textContent = greetingText;
}

export function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 0 && hours < 6) {
    return ('night,'); // Good night / Доброй/Спокойной ночи / Дабранач
  } else if (hours >= 6 && hours < 12) {
    return ('morning,'); // Good morning / Доброе утро / Добрай раніцы
  } else if (hours >= 12 && hours < 18) {
    return ('afternoon,'); // Good afternoon / Добрый день / Добры дзень
  } else return ('evening,'); // Good evening / Добрый вечер / Добры вечар
}

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)