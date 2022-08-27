//GENERADOR RANDOM DE FRASES CELEBRES
//API USADA QUOTABLE

const quote = document.querySelector('#quote')
const author = document.querySelector('.author')
const btn = document.querySelector('.btn')

let getQuote = () => {
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((item) => {
            quote.innerText = item.content
            author.innerText = item.author
            //Animatio usign Anime.js Library
            anime({
                targets: quote,
                translateX: [-60,0],
                endDelay: 1000,
              });
        })
}

window.addEventListener('load',getQuote);
btn.addEventListener('click', getQuote);