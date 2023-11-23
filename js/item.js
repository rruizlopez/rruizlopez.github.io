const add = document.querySelector('#add');
const substract = document.querySelector('#substract');
const quantity = document.querySelector('#quantity')

add.addEventListener('click',()=> quantity.value = Number(quantity.value)+1 );
substract.addEventListener('click',()=> {
    if(Number(quantity.value)>0){
        quantity.value = Number(quantity.value)-1 
    }
});
