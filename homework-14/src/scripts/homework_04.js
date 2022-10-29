
export function makePairs(arrOfPeople) {
  const girls = []
  const boys = []
  const pairs = []

  for (let i = 0; i < arrOfPeople.length; i++) {

    if (arrOfPeople[i].endsWith("а")) {
      girls.push(arrOfPeople[i]) 
    } else {
      boys.push(arrOfPeople[i])
    }
  }

  for (let i = 0; i < girls.length; i++) {
    pairs.push([girls[i], boys[i]])
  }
  return pairs;
 }
