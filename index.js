const buttonclick = () => {
    const name = document.getElementById('nameid').value;
    const num = document.getElementById('numberid').value;
    document.getElementById('nameid').value="";
     document.getElementById('numberid').value='';
    // console.log(name,num);
    displyProduct(name,num);
}

const displyProduct = (name,num) =>{
    const ul = document.getElementById('displayProduct');
    const li = document.createElement("li");
    li.innerText=`${name} : ${num}`;
    ul.appendChild(li);
}
;