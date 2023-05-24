"use strict";
async function fetchProgrammingQuote() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "https://programming-quotes-api.herokuapp.com/quotes/random?language=en&tag=programming";
  const response = await fetch(proxyUrl + apiUrl);
  const data = await response.json();
  return data;
  console.log(data);
}

// Function to display the quote on the HTML page
function displayQuote(quote) {
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");

  quoteText.textContent = `"${quote.en}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
}

// Function to fetch new quotes every 10 seconds
function fetchNewQuotePeriodically() {
  setInterval(async () => {
    const quote = await fetchProgrammingQuote();
    displayQuote(quote);
  }, 10000); // 10 seconds interval
}

// Call the function to start fetching quotes
// fetchNewQuotePeriodically();
