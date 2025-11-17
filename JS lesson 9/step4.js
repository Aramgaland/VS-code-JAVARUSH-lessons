

//Стрелочные функции в словарях


let person = {

    name: 'Bob',
    sayHi: () => {
        console.log(`Hello, ${this.name}`)
    },
};


console.log(person)

console.log('-------------------------')

person.sayHi();

// Тут В данном случае:

// Стрелочная функция объявлена в глобальном контексте, а не внутри метода function.

// Следовательно, this внутри неё указывает не на объект person,
// а на глобальный объект:

// в браузере → window

// в Node.js → undefined (в strict mode)