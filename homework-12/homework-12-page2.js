
const urls = [
  'https://swapi.dev/api/planets',
  'https://swapi.dev/api/planets/?page=2',
  'https://swapi.dev/api/planets/?page=3',
  'https://swapi.dev/api/planets/?page=4',
  'https://swapi.dev/api/planets/?page=5',
  'https://swapi.dev/api/planets/?page=6',
]

const backBtn = document.querySelector(".button");

const fetchData = async () => {
  
  const response = await Promise.all(
    urls.map(url => fetch(url).then(res => res.json())))
    const linksArr = response.map(obj => obj.results)
    const allLinks = linksArr.flat()
    const allNames = allLinks.map(obj => obj.name)

 
// array with links to photos
  function makeArr() {
    const linkArr2 = []
    for (let i=0; i<60; i++) {
      linkArr2.push('https://starwars-visualguide.com/assets/img/planets/' + [i] + '.jpg')
    }
    return linkArr2
  }
  const allPhotos = makeArr()
  

allPhotos.forEach((el, i) => {
    let planetFrame = document.getElementById('planetFrame')

    let planets = document.createElement('div')
        planets.className = "planets"
    let planetImg = document.createElement('img')
        planetImg.className = "planetImg"
        planetImg.src = el
        planetImg.addEventListener("error", function(event) {
          event.target.src = "./onerror_planet.png"
          event.onerror = null
        })
    let planetCard = document.createElement('div')
        planetCard.className = "planetCard"
        planetCard.textContent = `name: ${allNames[i]}`
       
 
        planetFrame.appendChild(planets)
        planets.appendChild(planetImg)   
        planets.appendChild(planetCard)
      })
}

console.log(fetchData())

