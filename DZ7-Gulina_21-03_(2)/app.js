document.querySelector('.plus').onclick = function (){
    let num1, num2, result;
    num1 = document.querySelector('.num1').value;
    num1 = parseInt(num1);
    num2 = document.querySelector('.num2').value;
    num2 = parseInt(num2);
    result = num1 + num2;
    let sumTotal = document.querySelector('.allSum')
    num1.value; num2.value = sumTotal ;
    sumTotal.innerHTML = result;
    document.querySelector('.num1').value = ''
    document.querySelector('.num2').value = ''
    document.querySelector('.num1').focus()
}

document.querySelector('.minus').onclick = function () {
    let numb1, numb2, result;
    numb1 = document.querySelector('.num1').value;
    numb1 = parseInt(numb1);
    numb2 = document.querySelector('.num2').value;
    numb2 = parseInt(numb2);
    result = numb1 - numb2;
    let sumTotal = document.querySelector('.allSum')
    numb1.value; numb2.value = sumTotal;
    sumTotal.innerHTML = result;
    document.querySelector('.num1').value = ''
    document.querySelector('.num2').value = ''
    document.querySelector('.num1').focus()
}


document.querySelector('.multiplication').onclick = function () {
    let number1, number2, result;
    number1 = document.querySelector('.num1').value;
    number1 = parseInt(number1);
    number2 = document.querySelector('.num2').value;
    number2 = parseInt(number2);
    result = number1 * number2;
    let sumTotal = document.querySelector('.allSum')
    number1.value; number2.value = sumTotal;
    sumTotal.innerHTML = result;
    document.querySelector('.num1').value = ''
    document.querySelector('.num2').value = ''
    document.querySelector('.num1').focus()
}

