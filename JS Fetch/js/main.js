console.log("main.js is running...");

const ul = document.querySelector("ul")

fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
.then((response) => response.json())
.then((data) => {
   const pokemons = data.results;
   for (let i = 0; index < pokemons.length; index++) {
    const element = element[i];
    ul.innerHTML += `<li>${element}<li>`
   }
  
});




fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
.then((response) => {
    return response.json();
})

.then(function (data) {
    console.log("Ontvangen data: ", data);
});
