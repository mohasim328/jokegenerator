const jokebtn = document.getElementById("jkbtn");
const jokearea = document.querySelector(".joketext");

jokebtn.addEventListener('click', jokegenerate);

 async function jokegenerate() {
  const jokeres = await fetch('https://icanhazdadjoke.com/',
  {
    headers: {
        accept: 'application/json'
    }
  });
  const joke = await jokeres.json();

  jokearea.innerHTML = joke.joke;
  console.log(joke.joke)

  
}
