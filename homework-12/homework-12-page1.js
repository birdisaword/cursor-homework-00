let charIndex
let arr = []

const showChar = document.createElement("button");
showChar.className = "get_info"
showChar.innerHTML = "show characters";
document.getElementById("buttons").appendChild(showChar);

const nextBtn = document.createElement("button");
nextBtn.className = "next"
nextBtn.innerHTML = "show planets";
document.getElementById("buttons").appendChild(nextBtn);
nextBtn.addEventListener('click', goNext)
function goNext() {
  window.open('./homework-12-page2.html','_self');
};

function showFrame() {
  var element = document.getElementById("characterFrame");
  element.classList.add("characterFrame");
}

showChar.addEventListener('click', showFrame)

showChar.addEventListener('click', async () => {
  const movie = await fetch(`https://swapi.dev/api/films/2/`)
  const response = await movie.json()
  const fullInfo = response.characters
  // arr with links of characters for the specific movie
  const link = fullInfo
 
// array with links for photos
  function photoInd() {
    const photoLinks = []
    for(let i = 1; i <= 82; i++) {
      photoLinks.push(`https://starwars-visualguide.com/assets/img/characters/${i}.jpg`);
    }
    return photoLinks
  }
  const photoIndexArr = photoInd()

// array with links for characters
  function charInd() {
    const charLinks = []
    for (let i = 1; i <= 82; i++) {
      charLinks.push(`https://swapi.dev/api/people/${i}/`)
    }
    return charLinks
  }
  const charIndexArr = charInd()


// object of pairs character-photo
  const charAndPhoto = {}
  charIndexArr.forEach((element, index) => {
    charAndPhoto[element] = photoIndexArr[index]
  })

  Promise.all(link.map(url => fetch(url)
  .then(response => response.json())))
  .then(function(data) {
    data.forEach(el => {
      function currentPhoto() {
        for (let property in charAndPhoto) {
          if (property === el.url) {
            const singleLink = Object.values(charAndPhoto[el.url]).join('')
            return Array.of(singleLink)
          }
        }
      }
      const currPhoto = currentPhoto()

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
})