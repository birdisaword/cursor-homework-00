
const showChar = document.querySelector('.get_info')
const nextBtn = document.querySelector('.next')

function showFrame() {
  let element = document.getElementById("characterFrame")
  element.classList.add("characterFrame")
  return element
}
showChar.addEventListener('click', showFrame)

let charIndex
let arr = []

showChar.addEventListener('click', async () => {
  const movie = await fetch(`https://swapi.dev/api/films/2/`)
  const response = await movie.json()
  const link = response.characters
  // arr with links of characters for the specific movie

 const charQuantity = 82;

// array with links for photos
  function photoInd() {
    const photoLinks = []
    for(let i = 1; i <= charQuantity; i++) {
      photoLinks.push(`https://starwars-visualguide.com/assets/img/characters/${i}.jpg`);
    }
    return photoLinks
  }
  const photoIndexArr = photoInd()

// array with links for characters
  function charInd() {
    const charLinks = []
    for (let i = 1; i <= charQuantity; i++) {
      charLinks.push(`https://swapi.dev/api/people/${i}/`)
    }
    return charLinks
  }
  const charIndexArr = charInd()


// object of pairs character-photo
  const charAndPhoto = {}
  charIndexArr.forEach((el, i) => {
    charAndPhoto[el] = photoIndexArr[i]
  })
console.log(charIndexArr);

  const charResponse = await Promise.all(
    link.map(url => fetch(url).then(res => res.json())))
    charResponse.forEach(el => {() => {
      for (let property in charAndPhoto) {
        if (property === el.url) {
          const singleLink = Object.values(charAndPhoto[el.url]).join('')
          return Array.of(singleLink)
        }
      }
    }
    const currPhoto = charAndPhoto[el.url]

      let characterFrame = document.getElementById('characterFrame')

      let character = document.createElement('character')
          character.className = "character"

      let charImg = document.createElement('img')
          charImg.className = "charImg"
          charImg.src = currPhoto;

      let charCard = document.createElement('div')
          charCard.className = "charCard"
          charCard.textContent = 
          `name: ${el.name}, 
           gender: ${el.gender}, 
           date: ${el.birth_year}`

      characterFrame.appendChild(character)
      character.appendChild(charImg)
      character.appendChild(charCard)
      
    })
})