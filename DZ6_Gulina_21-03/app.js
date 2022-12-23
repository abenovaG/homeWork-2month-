const incBtn = document.querySelector('.increment');
const decBtn = document.querySelector('.decrement');
const input = document.querySelector('input');

let i = 0;

incBtn.addEventListener('click', function (){
    i++;
    input.value = i
})

decBtn.addEventListener('click', function (){
    i--;
    input.value = i
})