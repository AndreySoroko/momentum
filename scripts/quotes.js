import {getRandomInt} from './slider.js';

const changeQuoteButton = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

async function getQuotes() {  
  const quotes = './assets/quotes/data.json';
  const res = await fetch(quotes);
  const data = await res.json();
  // console.log(data);
  let randomQuote = getRandomInt(0, data.length);
  // console.log(randomQuote);

  author.textContent = data[randomQuote].author;
  quote.textContent = data[randomQuote].text;
}
getQuotes();

changeQuoteButton.addEventListener('click', getQuotes);