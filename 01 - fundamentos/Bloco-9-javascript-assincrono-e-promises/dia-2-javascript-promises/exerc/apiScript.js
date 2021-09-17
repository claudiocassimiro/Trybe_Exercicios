// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'accept': 'application/JSON' },
  }

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(objJoke => appendJoke(objJoke.joke));
};

const appendJoke = (joke) => {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerHTML = joke;
};

window.onload = () => fetchJoke();