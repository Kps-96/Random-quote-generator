const apiUrl = "https://api.quotable.io/random";
const content = document.getElementById("content");
const author = document.getElementById("author");

async function randomQuote(url) {
    const resp = await fetch(url);
    var data = await resp.json()

    content.innerHTML=data.content;
    author.innerHTML= "-- " + data.author;
}

randomQuote(apiUrl);