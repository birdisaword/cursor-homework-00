let charIndex
let arr = []
async function generalInfo(moviePart) {
  const movie = await fetch('https://swapi.dev/api/films/' + [moviePart] + '/')
  const response = await movie.json()
  const fullInfo = response.characters;
  const link = fullInfo;
  // const link = ('https://swapi.dev/api/people/' + [charIndex] + '/')
  console.log(link);

  
link.forEach(el => {
    charIndex = el.replace( /^\D+/g, '').replace('/', '')
    console.log(charIndex);
      return charIndex;
})



  Promise.all(link.map(url =>
    fetch(url)              
     .then(response => response.json())
  ))
  .then(function(data) {
    console.log(data);
  
    data.forEach(el => {
    //  console.log(imgIndex);
  
    let charImg = document.createElement('img');
    charImg.className = "charImg";
    charImg.src = 'https://starwars-visualguide.com/assets/img/characters/' + [charIndex] + '.jpg';
    console.log(charIndex);

      let character = document.getElementById('character');
      let charCard = document.createElement('div');
      charCard.className = "charCard";
      charCard.textContent = 
      `name: ${el.name}, 
      gender: ${el.gender}, 
      date: ${el.birth_year}`

      
     
       character.appendChild(charImg);
      character.appendChild(charCard);
   

// return `name: ${el.name}, gender: ${el.gender}, date: ${el.birth_year}`;
    })
    	})
}

console.log(generalInfo(4));



// let character = document.getElementById('character');
// let charCard = document.createElement('charCard');
// charCard.className = "charCard";
// charCard.textContent = generalInfo(3)

// character.appendChild(charCard);




//   function fetchKantoPokemon() {
//     fetch('https://swapi.dev/api/films/2/')
//         .then(response => response.json())
//         .then(function(allpokemon) {
// 	    allpokemon.results.forEach(function(pokemon) {
// 		fetchPokemonData(pokemon); // <--- this and the line above are the pieces I'm confused on.
//                     })
// 		})
// }

// function fetchPokemonData(pokemon) {
//     let url = pokemon.url
//     fetch(url)
//         .then(response => response.json())
// 	.then(function(pokeData) {
// 	    renderPokemon(pokeData)
// 	})
// }
//   console.log(fetchPokemonData());
 
//     const waitFetch = await fetch(link)
// const personInfo = await waitFetch.json()

// const name =  personInfo.name
// const dateOfBirth = personInfo.birth_year
// const gender = personInfo.gender
// const characterCard = `name: ${name} date of birth: ${dateOfBirth} gender: ${gender}`
  
   



// let character = document.getElementById('character');

// let charCard = document.createElement('charCard');
// charCard.textContent = characterCard

// character.appendChild(charCard);

// console.log(character.innerHTML);

  //   name.forEach(myFunction)
 
  //  function myFunction(item) {
  //  let text = ''
  //  text += item;
  //  return text


    
  // console.log(generalInfo(3));


  

// async function genInfo(res) {
//   const movie = await fetch('https://swapi.dev/api/films/2/')
//   .then((res) => await res.json())
//   .then(() =>  console.log(res))
// }