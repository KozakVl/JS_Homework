let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: false},
    {name: 'olya', age: 28, status: true},
    {name: 'max', age: 27, status: false},
    {name: 'anya', age: 26, status: true},
    {name: 'aleg', age: 25, status: false},
    {name: 'andrey', age: 24, status: true},
    {name: 'masha', age: 23, status: false},
    {name: 'olya', age: 22, status: true},
];

console.log(users[3].name + ' ' + users[0].name);
document.write('1- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом ')

for (let i = 0; i < 10; i++) {
    document.write(`<h3>текст</h3>`);
}


document.write('2- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередиі')
for (let i = 0; i < 10; i++) {
    document.write(`<h3>текст ${i}</h3>`);
}

document.write('3- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.')


let n = 0
while (n < 20) {
    n++
    document.write(`<h1>Text content</h1>`)
}


document.write('4- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.')


let x = 0
while (x < 20) {
    x++
    document.write(`<h1>Text content ${x}</h1>`)
}


document.write('5- Використовуючи данні з масиву, за допомоги document.write та циклу\n' +
    'побудувати структуру по шаблону')

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
let y = 0

document.write(`<ul>`)
while (y < listOfItems.length) {
    document.write(`<li>${listOfItems[y]}</li>`)
    y++
}
document.write(`</ul>`)


document.write('6-Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону Великими літерами прописанні властивості обєкту які потрібно впровадити в шаблон')

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write(`<div class="product-card">`)
for (let i = 0; i < products.length; i++) {
    document.write(`<h3 class="product-title">${products[i].title} Price - ${products[i].price}</h3><img src=${products[i].image} alt="" class="product-image">`);
}
document.write(`</div>`)

// --------------------------------------------------------------------

let usersApp = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write(`<h4>користувачі зі статусом true</h4>`)
for (let i = 0; i < usersApp.length; i++) {
    if (usersApp[i].status === true) {
        document.write(`<h3>${usersApp[i].name}</h3>`)
    }
}
document.write(`<h4>користувачі зі статусом false</h4>`)
for (let i = 0; i < usersApp.length; i++) {
    if (usersApp[i].status === false) {
        document.write(`<h3>${usersApp[i].name}</h3>`)
    }
}
document.write(`<h4>користувачі які старші за 30 років</h4>`)
for (let i = 0; i < usersApp.length; i++) {
    if (usersApp[i].age > 30) {
        document.write(`<h3>${usersApp[i].name}</h3>`)
    }
}