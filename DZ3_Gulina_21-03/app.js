// var num =0
// while (num <= 20) {
//     if (num % 2 === 0) console.log(num)
//     num++
// }


////////////////////////////////////////////////////////


var number = 0;
var sum = 0;
do{
    number = Number(prompt('Введите число:'));
    if (number <= 0) {
        console.log(number);
    }
    else {
        sum = sum + number;
        console.log ('Сумма введенных чисел:' + sum);
    }
}
while (number > 0 );



//////////////////////////////////////////////////

// var sum = 0;
// var num = Number(prompt('Введите число:'));
// if (num > 0 ) {
//     while (num > 0) {
//         sum = sum + num ;
//         console.log(sum);
//         num = Number(prompt('Введите число:'));
//         if (num <= 0 ){
//             console.log(num);
//         }
//     }
// }else if (num <= 0 ) {
//     console.log(num);
// }

