let elList = document.getElementById("menuList");
let elCardList = document.getElementById("cardList");
let subPrice= document.getElementById("subPrice");
let elTax= document.getElementById("tax");
let elTotal= document.getElementById("total");
let subtotal = 0;
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
    <button  onclick="addCart(${foodArr[i].id})" class="add__btn ">Add to card <i class='bx bx-cart'></i></button>  </div>`
  li.classList.add("menu__item");
  elList.appendChild(li);
}

let newArr = [];
let elBtn = document.querySelectorAll(".add__btn");

elCardList.innerHTML ='';

function addCart(e){
  for(let i=0; i<foodArr.length; i++){
    if(foodArr[i].id==e){
      newArr.push(foodArr[i])
      }
  }

sortItems(newArr)

}
let times = 0;
function sortItems(par){

  let b = [];
  let count = par.length;
  
  for (let i = 0; i < count; i++) {
  
      let k = [];
      let f = [];
      for (let j = 0; j < par.length; j++) {
          if(par[0].id == par[j].id) {
              k.push(par[j]);
          } else {
              f.push(par[j]);
          }
      }
      par = f;
      if (k != "") b.push(k);

  }
 

  elCardList.innerHTML ='';

  times=0;

for(let i=0; i<b.length; i++){
  times = b[i].length
  let li = document.createElement("li");
  li.className = "menu__item pizza cart__item";
  li.innerHTML = `<img src="${b[i][0].imgUrl}" alt="pizza">
  <div class="product__desc">
    <h2 class="product__name">${b[i][0].name}</h2>
    <p class="product__price">${b[i][0].price} $</p>
    <div class="btn-box">
    <button onclick="removeItem(${i})"  class="remove__btn">Remove</button> 
    <button onclick="addCart(${foodArr[i].id})" class="remove__btn">Add</button>
  </div>
    <button   class="count-times">${times} x</button> 
     </div>`;
    elCardList.appendChild(li);

    subtotal += newArr[i].price;
    tax= subtotal*0.1;
    total = subtotal+tax;

    subPrice.innerHTML=`Subtotal: $ ${subtotal}`;
    elTax.innerHTML = `Tax: $ ${tax}`;
    elTotal.innerHTML = `Total: $ ${total}`;
}

}


function removeItem(index){
  let newArrRemove = [];
  for (let i = 0; i < newArr.length; i++) {
  
    if (index != i) {
      newArrRemove.push(newArr[i]);
    }
  }
  newArr = newArrRemove;
  elCardList.innerHTML = "";
  subtotal = 0;
  tax = 0;
  total = 0;

  sortItems(newArr)

  if(newArr.length==0){
    subtotal=0;
    tax = 0;
    total = 0;
  }
  subPrice.innerHTML=`Subtotal: $ ${subtotal}`;
  elTax.innerHTML = `Tax: $ ${tax}`;
  elTotal.innerHTML = `Total: $ ${total}`;
 }


