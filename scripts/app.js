import  { iceCreams } from "./products.js"

const container = document.getElementById('main-container')

window.addEventListener('DOMContentLoaded', renderIceCreams)

function renderIceCreams() {
  iceCreams.forEach(iceCream => createCardIceCream(iceCream))
}

function createCardIceCream(iceCream) {

  const divCard = document.createElement('div')
  divCard.classList.add('ice-cream')
  divCard.id = iceCream.id

  const imgCard = document.createElement('img')
  imgCard.alt = iceCream.product
  imgCard.src = iceCream.image

  const titleCard = document.createElement('h2')
  titleCard.textContent = iceCream.product

  const priceCard = document.createElement('p')
  priceCard.textContent = iceCream.price

  const btnCard = document.createElement('button')
  btnCard.textContent = 'Agregar al carrito'

  divCard.appendChild(imgCard)
  divCard.appendChild(titleCard)
  divCard.appendChild(priceCard)
  divCard.appendChild(btnCard)

  container.appendChild(divCard)
      
}



{/* <i class='bx bxs-bowl-rice'></i> */}