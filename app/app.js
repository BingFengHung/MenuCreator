const ul = document.querySelector('.ul')

function Generate() {
  fetch('./menu.json', { mode: 'no-cors' }) 
  .then(response => response.json()) 
  .then( data => RandomData(data))
}

function RandomData(data) {
  let meat = data.meat
  let vegetable = data.vegetable
  let soup = data.soup

  const selectMeat = Math.floor(Math.random() * meat.length)

  const selectVegetables = []
  while(true) {
    if (selectVegetables.length === 3) {
      break
    } else { 
      const selectVegetable = Math.floor(Math.random() * vegetable.length)

      if (selectVegetables.indexOf(selectVegetable) === -1) {
        selectVegetables.push(selectVegetable)
      }
    }
  }

  const selectSoup  = Math.floor(Math.random() * soup.length)

  createElement(meat[selectMeat])
  createElement(vegetable[selectVegetables[0]])
  createElement(vegetable[selectVegetables[1]])
  createElement(vegetable[selectVegetables[2]])
  createElement(soup[selectSoup])
}

function createElement(content) {
  const li = document.createElement('li')
  const text = document.createTextNode(content)
  li.append(text)
  ul.append(li)
}