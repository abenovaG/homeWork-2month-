var name = prompt('Введите свое ФИО')
var pass = prompt ('Введите пароль');
if (pass === 'Geektech') {
    alert('Здравствуйте! '+ name)
    alert('Доступ разрешен')
}else {
    alert ('Повторите еще раз')
}

// var date = prompt('Введите месяц и день своего дня рождения');
// if (date >= '01-21' && date <= '02-18') {
//     console.log('Ваш знак зодиака-Водолей');
// }else if (date >= '02-19' && date <= '03-20') {
//     console.log('Ваш знак зодиака-Рыбы');
// }else if (date >= '03-21' && date <= '04-20') {
//     console.log('Ваш знак зодиака-Овен');
// }else if (date >= '04-21' && date <= '05-20') {
//     console.log('Ваш знак зодиака-Телец');
// }else if (date >= '05-21' && date <= '06-21') {
//     console.log('Ваш знак зодиака-Близнецы');
// }else if (date >= '06-22' && date <= '07-22') {
//     console.log('Ваш знак зодиака-Рак');
// }else if (date >= '07-23' && date <= '08-23') {
//     console.log('Ваш знак зодиака-Лев');
// }else if (date >= '08-24' && date <= '09-23') {
//     console.log('Ваш знак зодиака-Дева');
// }else if (date >= '09-24' && date <= '10-23') {
//     console.log('Ваш знак зодиака-Весы');
// }else if (date >= '10-24' && date <= '11-22') {
//     console.log('Ваш знак зодиака-Скорпион');
// }else if (date >= '11-23' && date <= '12-21') {
//     console.log('Ваш знак зодиака-Стрелец');
// }else {
//     console.log('Ваш знак зодиака-Козерог');
// }

var month = prompt('Введите месяц своего рождения');
var date = prompt('Введите день своего рождения');
if (date > 31) {
    console.log('Произошла ошибка! Пожалуйста введите цифры корректно и цифры до 10 с 0');
}else if (month === 'Январь' && date >= '21' || month === 'Февраль'&& date <= '18') {
    console.log('Ваш знак зодиака-Водолей');
}else if (month === 'Февраль'&& date >= '19' || month === 'Март' && date <= '20') {
    console.log('Ваш знак зодиака-Рыбы');
}else if (month === 'Март' && date >= '21' || month === 'Апрель' && date <= '20') {
    console.log('Ваш знак зодиака-Овен');
}else if (month === 'Апрель' && date >= '21' || month === 'Май' && date <= '20') {
    console.log('Ваш знак зодиака-Телец');
}else if (month === 'Май' && date >= '21' || month === 'Июнь' && date <= '21') {
    console.log('Ваш знак зодиака-Близнецы');
}else if (month === 'Июнь' && date >= '21' || month === 'Июль' && date <= '22') {
    console.log('Ваш знак зодиака-Рак');
}else if (month === 'Июль' && date >= '23' || month === 'Август' && date <= '23') {
    console.log('Ваш знак зодиака-Лев');
}else if (month === 'Август' && date >= '24' || month === 'Сентябрь' && date <= '23') {
    console.log('Ваш знак зодиака-Дева');
}else if (month === 'Сентябрь' && date >= '24'|| month === 'Октябрь' && date <= '23') {
    console.log('Ваш знак зодиака-Весы');
}else if (month === 'Октябрь' && date >= '24' || month === 'Ноябрь' && date <= '22') {
    console.log('Ваш знак зодиака-Скорпион');
}else if (month === 'Ноябрь' && date >= '23' || month === 'Декабрь' && date <= '21') {
    console.log('Ваш знак зодиака-Стрелец');
}else if (month === 'Декабрь' && date >= '22' || month === 'Январь' && date <= '20') {
    console.log('Ваш знак зодиака-Козерог');
 }else {
    console.log('Ошибка! Пожалуйста введите месяц на русском языке с большой буквы ' )
}


