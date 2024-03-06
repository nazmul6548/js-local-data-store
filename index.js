const buttonclick = () => {
    const name = document.getElementById('nameid').value;
    const num = document.getElementById('numberid').value;
    document.getElementById('nameid').value="";
     document.getElementById('numberid').value='';
    // console.log(name,num);
    displyProduct(name,num);
    saveproducttolocal(name,num)
}

const displyProduct = (name,num) =>{
    const ul = document.getElementById('displayProduct');
    const li = document.createElement("li");
    li.innerText=`${name} : ${num}`;
    ul.appendChild(li);
}
const getstoreshoppingcart = () => {
let cart = {};
const storeCart = localStorage.getItem('cart');
if (storeCart) {
    cart = JSON.parse(storeCart)
    
}
return cart;
}
const saveproducttolocal = (product,quantity) => {
const cart = getstoreshoppingcart();
cart[product] = quantity;
const stringyfy = JSON.stringify(cart);
localStorage.setItem('cart',stringyfy)
}
;
const displyshoe = () => {
    const saveCart = getstoreshoppingcart();
    for (const iterator in saveCart) {
        const quantity = saveCart[iterator];
        console.log(iterator, quantity);
        displyProduct(iterator, quantity)
    }
}
displyshoe()