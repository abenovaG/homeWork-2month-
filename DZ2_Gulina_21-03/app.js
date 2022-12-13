// var series = {
//     name: ' Название сериала: "Счастье"',
//     duration: 'Просмотр:  1 час',
//     episodes: 'Серия:  12 серий',
//     releaseDate: 'Год выпуска:  2021 год',
//     country: 'Страна:  Южная Корея',
//     plot: 'Жанр:  Драма, Триллер',
//     mainActor: 'В главных ролях:  Пак Хен Сик, Хан Хе Чжу',
//     fact: 'Сюжет дорамы: Дорама «Счастье» – далеко не радужная и беззаботная история. Внезапно начавшаяся пандемия на Земле изменила нашу жизнь до неузнаваемости. Теперь многие люди задумываются, можно ли будет вернуться к прежнему ритму и привычным делам, как пару лет назад. Не удивительно, что эта тема стала все чаще появляются в кинематографе, отражающем нашу действительность. По сюжету сериала есть большой многоквартирный дом, построенный в парке вдали от столичной суеты Сеула. Он заселился совсем недавно. Жильцы дома разномастные. Они отличаются достатками и социальным статусом. Радость новоселья для людей меркнет после объявления карантина в доме вследствие выявления опасного вируса. Теперь каждый боится других, никому не доверяет и придумывает свои способы, чтобы не заразиться и выжить.',
// }

var series = {
    name: '"Счастье"',
    duration: ' 1 час',
    episodes: ' 12 серий',
    releaseDate: ' 2021 год',
    country: ' Южная Корея',
    plot: ' Драма, Триллер',
    mainActor: ' Пак Хен Сик, Хан Хе Чжу',
    fact: ' \n\tДорама «Счастье» – далеко не радужная и беззаботная история. Внезапно начавшаяся пандемия на Земле изменила нашу жизнь до неузнаваемости. Теперь многие люди задумываются, можно ли будет вернуться к прежнему ритму и привычным делам, как пару лет назад. Не удивительно, что эта тема стала все чаще появляются в кинематографе, отражающем нашу действительность.',
    story: ' \nПо сюжету сериала есть большой многоквартирный дом, построенный в парке вдали от столичной суеты Сеула. Он заселился совсем недавно. Жильцы дома разномастные. Они отличаются достатками и социальным статусом. Радость новоселья для людей меркнет после объявления карантина в доме вследствие выявления опасного вируса. Теперь каждый боится других, никому не доверяет и придумывает свои способы, чтобы не заразиться и выжить.',
    series2: {
        name: '"Деловое предложение"',
        duration: ' 1 час',
        episodes: ' 12 серий',
        releaseDate: ' 2022 год',
        country: ' Южная Корея',
        plot: ' Комедия, мелодрама',
        mainActor: ' Ким Сэ Джон, Ан Хе Соп, Ким Мин Гю, Соль Ин А',
    }
}

var seriesName = 'Название сериала: ';
var seriesDuration = 'Просмотр:';
var seriesEpisodes = 'Серия:';
var seriesReleaseDate = 'Год выпуска:';
var seriesCountry = 'Страна:';
var seriesPlot = 'Жанр:';
var seriesMainActor = 'В главных ролях:';
var seriesFact = 'Сюжет дорамы:';
var fullName = seriesName + ' ' + series.name
console.log(fullName)
var fullDuration = seriesDuration + ' ' + series.duration
console.log(fullDuration)
var fullEpisodes = seriesEpisodes + ' ' + series.episodes
console.log(fullEpisodes)
var fullReleaseDate = seriesReleaseDate + ' ' + series.releaseDate
console.log(fullReleaseDate)
var fullCountry = seriesCountry + ' ' + series.country
console.log(fullCountry)
var fullPlot = seriesPlot + ' ' + series.plot
console.log(fullPlot)
var fullMainActor = seriesMainActor + ' ' + series.mainActor
console.log(fullMainActor)
var fullFact = seriesFact + ' ' + series.fact + series.story
console.log(fullFact)

var empty
console.log(empty)
var fullName2 = seriesName + ' ' + series.series2.name
console.log(fullName2)
var fullDuration2 = seriesDuration + ' ' + series.series2.duration
console.log(fullDuration2)
var fullEpisodes2 = seriesEpisodes + ' ' + series.series2.episodes
console.log(fullEpisodes2)
var fullReleaseDate2 = seriesReleaseDate + ' ' + series.series2.releaseDate
console.log(fullReleaseDate2)
var fullCountry2 = seriesCountry + ' ' + series.series2.country
console.log(fullCountry2)
var fullPlot2 = seriesPlot + ' ' + series.series2.plot
console.log(fullPlot2)
var fullMainActor2 = seriesMainActor + ' ' + series.series2.mainActor
console.log(fullMainActor2)


var day = 'monday'

switch (day){
    case 'Monday':
    case 'monday':
        console.log('Понедельник')
        break;
        case 'Tuesday':
        case 'tuesday':
        console.log('Вторник')
        break;
        case 'Wednesday':
        case 'wednesday':
        console.log('Среда')
        break;
        case 'Thursday':
        case 'thursday':
        console.log('Четверг')
        break;
        case 'Friday':
        case 'friday':
        console.log('Пятница')
        break;
        case 'Saturday':
        case 'saturday':
        console.log('Суббота')
        break;
        case 'Sunday':
        case 'sunday':
        console.log('Воскресенье')
        break;
    default:
        console.error('error')
}