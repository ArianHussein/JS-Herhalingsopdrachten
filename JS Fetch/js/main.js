// console.log("main.js is running...");

// const ul = document.querySelector("ul")

// fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
// .then((response) => response.json())
// .then((data) => {
//    const pokemons = data.results;
//    for (let i = 0; index < pokemons.length; index++) {
//     const element = element[i];
//     ul.innerHTML += `<li>${element}<li>`
//    }
  
// });




// fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
// .then((response) => {
//     return response.json();
// })

// .then(function (data) {
//     console.log("Ontvangen data: ", data);
// });

const card = document.querySelector(".card");

fetch("https://dummyjson.com/products")
.then((response) => {
    return response.json();
})



.then(function (data) {
const products = data.products;
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
    //    const jsonn = JSON.stringify(element)
        card.innerHTML += createlist (element)
       
        
    }
    
})

function createlist(elements) {
   const listItem =
   `
   <div class = "insidecard">
   <div class="kaartje">
   <img class="gone" src="${elements.thumbnail}"></img>
   ${elements.id}<br>
   ${elements.title}<br>
   ${elements.description}<br>
   ${elements.price}<br>
   ${elements.discountPercentage}<br>
   ${elements.rating}<br>
   ${elements.stock}<br>
   ${elements.brand}<br>
   ${elements.category}<br>
   ${elements.images}<br>
   
   </div>
   </div>
   `;
   

   return listItem;
}



