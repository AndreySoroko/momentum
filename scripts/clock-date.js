const time = document.querySelector('.time');
const date = document.querySelector('.date');

// var 

function showTime(){
  const dat = new Date();
  const currentTime = dat.toLocaleTimeString('en-Gb');
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate();
}
showTime();

function showDate(){
  const dat = new Date();
  // const options  = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
  const options  = {weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = dat.toLocaleDateString('en-Us', options);
  date.textContent = currentDate;
}