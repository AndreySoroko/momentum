const changeQuoteButton = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

function getRandomInt(max) {
  let min = 0;
  return Math.floor(Math.random() * (max - min)) + min;
}

async function getQuotes() {  
  const quotes = './assets/quotes/data.json';
  const res = await fetch(quotes);
  const data = await res.json();
  // console.log(data);
  randomQuote =   getRandomInt(data.length);
  // console.log(randomQuote);

  author.textContent = data[randomQuote].author;
  quote.textContent = data[randomQuote].text;
}
getQuotes();

changeQuoteButton.addEventListener('click', getQuotes);