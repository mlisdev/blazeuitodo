const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')

let itemList = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

localStorage.setItem('items', JSON.stringify(itemList))
const data = JSON.parse(localStorage.getItem('items'))

const newItem = (text) => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    itemList.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemList))
    newItem(input.value)
    input.value = ''
})

data.forEach((item) => {
  newItem(item)
})

button.addEventListener('click', function () {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})