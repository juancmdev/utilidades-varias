const jokeContainer = document.getElementById("jokeContainer");
const getJokeBtn = document.getElementById("getJokeBtn");
const getAnswer = document.getElementById("answer");

function fetchJoke() {
  // Fetch for joke data and use chaining here 💖
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      jokeContainer.innerHTML = data.setup;
      getAnswer.innerHTML = data.punchline;
    })
    .catch((error) => {
      console.error(error);
    });
}

getJokeBtn.addEventListener("click", fetchJoke);
