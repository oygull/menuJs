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
    name: 'Margaritta',
    price: 10
  },
  {
    id: 6,
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVR6G-fJmglFlVxrqbMDftbjMh8rjwa9ulg_XnDMAHdVMOYOJNqJI9zEjRapm0pXKUIY&usqp=CAU' ,
    name: 'Margaritta',
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

function addCart(e){
  for(let i=0; i<foodArr.length; i++){
    if(foodArr[i].id==e){
      newArr.push(foodArr[i])
       subtotal = 0;
       tax = 0;
       total = 0;
      }
      elCardList.innerHTML ='';
      for (let i=0; i<newArr.length; i++){
        subtotal += newArr[i].price;
        tax= subtotal*0.1;
        total = subtotal+tax;
        let li = document.createElement("li");
        li.innerHTML = ` <img src="${newArr[i].imgUrl}" alt="pizza">
        <div class="product__desc">
          <h2 class="product__name">${newArr[i].name}</h2>
          <p class="product__price">${newArr[i].price} $</p>
          <button  id="${newArr[i].id}" class="remove__btn">-</button>  </div>`
        li.classList.add("cart__item");
        elCardList.appendChild(li);
      }
      subPrice.innerHTML=`Subtotal: $ ${subtotal}`;
      elTax.innerHTML = `Tax: $ ${tax}`;
      elTotal.innerHTML = `Total: $ ${total}`;
  }
let btns = document.querySelectorAll(".remove__btn")
for (let i=0; i<btns.length; i++){
  btns[i].addEventListener("click", removeItem)
}
}


function removeItem(e){
 let a = e.target;
 a.parentNode.parentNode.remove();
 subtotal = 0;
 tax = 0;
 total = 0;
 subPrice.innerHTML=`Subtotal: $ ${subtotal}`;
 elTax.innerHTML = `Tax: $ ${tax}`;
 elTotal.innerHTML = `Total: $ ${total}`;
 newArr=[];
 }







