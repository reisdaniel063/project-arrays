const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

function formartCurrency(value) {
  const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  return newValue
}

function showAll(productsArray) {
  let myLi = ''
  productsArray.forEach((product) => {
    myLi = myLi +
      `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${formartCurrency(product.price)}</p>
        </li>
        `
  }
  )
  list.innerHTML = myLi
}
function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9
  }))
  showAll(newPrices)
}

function sumAlltems() {
  const totalPrice = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
  list.innerHTML =
    `
  <li>
      <p>O valor total dos itens é R$ ${formartCurrency(totalPrice)}</p>
  </li>
  `
  console.log(totalPrice)
}

function filterAll() {
  const filterVegan = menuOptions.filter((product) => product.vegan)
  showAll(filterVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAlltems)
buttonFilterAll.addEventListener('click', filterAll)