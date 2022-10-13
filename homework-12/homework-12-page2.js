
  
const urls = [
  'https://swapi.dev/api/planets',
  'https://swapi.dev/api/planets/?page=2',
  'https://swapi.dev/api/planets/?page=3',
  'https://swapi.dev/api/planets/?page=4',
  'https://swapi.dev/api/planets/?page=5',
  'https://swapi.dev/api/planets/?page=6',
]

const fetchData = async () => {

  const allPlanets = []
  const allNames = []
  
  const response = await Promise.all(
    urls.map(url => fetch(url).then(res => res.json())))
    const linksArr = []
    response.forEach(obj = (obj) => linksArr.push(obj.results))
    const allLinks = linksArr.flat()
    for (let i=0; i<allLinks.length; i++) {
      allPlanets.push(allLinks[i].url)
      allNames.push(allLinks[i].name)
    }

// array with links to photos
  function makeArr() {
    const linkArr2 = []
    for (let i=1; i<60; i++) {
      linkArr2.push('https://starwars-visualguide.com/assets/img/planets/' + [i] + '.jpg')
    }
    return linkArr2
  }
  const allPhotos = makeArr()
  
  // array of pairs: name - photo
  let pairs = {};
  for (var i = 0; i < allNames.length; i++) {
    pairs[allNames[i]] = allPhotos[i]
  }

  for (const [key, value] of Object.entries(pairs)) {
    let planets = document.createElement('planets')
        planets.className = "planets"
    let planetImg = document.createElement('img')
        planetImg.className = "planetImg"
        planetImg.src = value
    let planetCard = document.createElement('div')
        planetCard.className = "planetCard"
        planetCard.textContent = `name: ${key}`
    
        planets.appendChild(planetImg)   
        planets.appendChild(planetCard)
  }
}

console.log(fetchData())

