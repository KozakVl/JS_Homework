// #1 Масиви та об'єкти

// Завдання 1.1
// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, '2', 3, 4, 'five', 6, [7, 7.1, 7.2, 7.3], 8, 9, 'ten'];
console.log(arr[0], arr[1], arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8], arr[9]);
console.log(arr[6][0]);

//Завдання 1.2
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let obj_1 = {
    title: 'Кобзар',
    pageCount: 352,
    genre: 'classic',
};
let obj_2 = {
    title: 'Божественна комедія',
    pageCount: 420,
    genre: 'classic',
};
let obj_3 = {
    title: 'Маленький принц',
    pageCount: 340,
    genre: 'classic',
};

//Завдання 1.3
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book_1 = {
    title: 'Кобзар',
    pageCount: 352,
    genre: 'classic',
    authors: [{name: 'Тарас Шевченко', age: 26}]
};
let book_2 = {
    title: 'Божественна комедія',
    pageCount: 420,
    genre: 'classic',
    authors: [{name: 'Данте Аліг\'єрі', age: 24}]
};
let book_3 = {
    title: 'Маленький принц',
    pageCount: 340,
    genre: 'classic',
    authors: [{name: 'Антуан де-Сент Экзюпери'}, {age: 34}]
};

//Завдання 1.4
//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user_1_4 = [
    {
        name: 'John A',
        username:'John A',
        password: 1
    },
    {
        name: 'John B',
        username:'John B',
        password: 2
    },
    {
        name: 'John C',
        username:'John C',
        password: 3
    },
    {
        name: 'John D',
        username:'John D',
        password: 4
    },
    {
        name: 'John E',
        username:'John E',
        password: 5
    },
    {
        name: 'John F',
        username:'John F',
        password: 6
    },
    {
        name: 'John G',
        username:'John G',
        password: 7
    },
    {
        name: 'John H',
        username:'John H',
        password: 8
    },
    {
        name: 'John I',
        username:'John I',
        password: 9
    },
    {
        name: 'John J',
        username:'John J',
        password: 10
    }
]
console.log(user_1_4[0]['password'], user_1_4[1]['password'], user_1_4[2]['password'], user_1_4[3]['password']);
// Or
console.log(user_1_4[0]["password"]);
console.log(user_1_4[1]["password"]);
console.log(user_1_4[2]["password"]);
console.log(user_1_4[3]["password"]);
console.log(user_1_4[4]["password"]);
console.log(user_1_4[5]["password"]);
console.log(user_1_4[6]["password"]);
console.log(user_1_4[7]["password"]);
console.log(user_1_4[8]["password"]);
console.log(user_1_4[9]["password"]);


// #2 Логічні розгалуження

// Завдання 2.1
// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 23;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// Завдання 2.2
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = parseInt(prompt("Enter a Value"));
console.log(typeof time);

if (time >= 0 && time <=15){
    console.log('Число потрапляє до першої чверті години')
}else if (time >= 16 && time <=30) {
    console.log('Число потрапляє до другої чверті години');
}else if (time >= 31 && time <=45){
    console.log('Число потрапляє до третьої чверті години');
}else if (time >= 46 && time <=59){
    console.log('Число потрапляє до четвертої чверті години');
}else {
    console.log('Ви ввели не правильне число, введіть число від 0 до 59');
}







// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = +prompt('Enter a day of the week: ');
switch (week){
    case 1:
        console.log('Понеділок');
        break;
    case 2:
        console.log('Вівторок');
        break;
    case 3:
        console.log('Середа');
        break;
    case 4:
        console.log('четвер');
        break;
    case 5:
        console.log('П"ятниця');
        break;
    case 6:
        console.log('субота');
        break;
    case 7:
        console.log('неділя');
        break;
    default:
        console.log('wrong');
}












