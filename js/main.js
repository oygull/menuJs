let elList = document.getElementById("menuList");
let elCardList = document.getElementById("cardList");
let Subtitle= document.getElementById("subPrice");
let elTax= document.getElementById("tax");
let elTotal= document.getElementById("total");
let elSubtitle = 0;
let tax = 0;
let total = 0;
let foodArr = [
  {
    id: 1,
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFPCis2feSstrV8s0z8Jhjgb-lJxSD1axkVIJjYqdxdgKMnIbjqd18rSDUuJITfeM_UQ&usqp=CAU' ,
    name: 'Papperoni',
    price: 10
  },
  {
    id: 2,
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVR6G-fJmglFlVxrqbMDftbjMh8rjwa9ulg_XnDMAHdVMOYOJNqJI9zEjRapm0pXKUIY&usqp=CAU' ,
    name: 'Margaritta',
    price: 20
  },
  {
    id: 3,
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuUiWQGBvA7KdOgbYDARfjJtjDNsUQC17zvqGVe0QRets8bY_s411D5nkaCMpCdtk1gg&usqp=CAU' ,
    name: 'Combo',
    price: 30
  },
  {
    id: 4,
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFPCis2feSstrV8s0z8Jhjgb-lJxSD1axkVIJjYqdxdgKMnIbjqd18rSDUuJITfeM_UQ&usqp=CAU' ,
    name: 'Mexican',
    price: 20
  },
  {
    id: 5,
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVR6G-fJmglFlVxrqbMDftbjMh8rjwa9ulg_XnDMAHdVMOYOJNqJI9zEjRapm0pXKUIY&usqp=CAU' ,
    name: 'Barbeque',
    price: 10
  },
  {
    id: 6,
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVR6G-fJmglFlVxrqbMDftbjMh8rjwa9ulg_XnDMAHdVMOYOJNqJI9zEjRapm0pXKUIY&usqp=CAU' ,
    name: 'Alfredo',
    price: 30
  }
]


for (let i=0; i<foodArr.length; i++){
  let li = document.createElement("li");
  li.innerHTML = ` <img src="${foodArr[i].imgUrl}" alt="pizza">
  <div class="product__desc">
    <h2 class="product__name">${foodArr[i].name}</h2>
    <p class="product__price">${foodArr[i].price} $</p>
    <button  onclick="getAdd(${foodArr[i].id})" class="add__btn ">Add to card <i class='bx bx-cart'></i></button>  </div>`
  li.classList.add("menu__item");
  elList.appendChild(li);
}

let newArr = [];
let elBtn = document.querySelectorAll(".add__btn");

function findFood (id) {
  for (let i = 0; i < foodArr.length; i++) {
      if (id == foodArr[i].id) {
          return foodArr[i]
      }
  }
}


function checkArray (item) {
    

  if (!newArr.length) {
      const newCartItem = item
      newCartItem.count = 1
     return newArr.push(newCartItem)
  }

  for (let i = 0; i < newArr.length; i++) {
      if (item.id === newArr[i].id) {
          return newArr[i].count = newArr[i].count + 1
      }
  }

  const newCartItem = item
      newCartItem.count = 1

  newArr.push(newCartItem)
}

function removeItem (id) {
  const arr = [];

  for (let i = 0; i < newArr.length; i++) {
      if (id === newArr[i].id) {
          if (newArr[i].count > 1) {
              const newFood = newArr[i]

              newFood.count = newFood .count - 1;

              arr.push(newFood)
          }
      } else {
          arr.push(newArr[i]);
      }
  }

  newArr = arr
  renderCardFood()
}

function getAdd(id) {
  let foundFood = findFood(id)

  checkArray(foundFood)

  sortItems();    
}

function sortItems () {
  elCardList.innerHTML = '';

  let subtitle = 0

  for (let i = 0; i < newArr.length; i++) {
      let li = document.createElement("li");
          li.innerHTML = `
              <img class="pizza-img" src="${newArr[i].imgUrl}" alt="pizza">
              <div class="product__desc">
                  <button class="count-times count-btn">${newArr[i].count} x</button>
                  <h3 class="product__name">${newArr[i].name}</h3>
                  <p class="product__price">$ ${newArr[i].taxiPrice}</p>
                  <div class="btn-box">
                  <button onclick = "removeItem(${i})"  class="remove__btn">Remove</button>
                  <button   class="remove__btn" onclick="addButton(${i})">Add</button>
                  </div>
              </div>
      `
      li.className = "cart__item";

      subtitle += newArr[i].count * newArr[i].price
      elCardList.appendChild(li);
  }

  let taxiPrice = subtitle * 0.1
  
  elTax.innerHTML =`Tax: ${taxiPrice}$`;
  elTotal.innerHTML = `Total: ${subtitle + taxiPrice} $`
  Subtitle.innerHTML =`Subtitle: ${subtitle} $`;

}

function addButton (foodIndex) {
  newArr[foodIndex].count = newArr[foodIndex].count + 1

  sortItems()
}

function removeItem (foodIndex) {
  let foundFood = newArr[foodIndex]
  if (foundFood.count > 1) {
      foundFood.count = foundFood.count - 1
      return  sortItems()
  }

  let arr = []

  for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].id !== foundFood.id ) {
          arr.push(newArr[i]) 
      }
  }

  newArr = arr

  sortItems()
}



