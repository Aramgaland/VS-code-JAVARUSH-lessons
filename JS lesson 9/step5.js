


let animal = {
    eats: true,
    walk() {
        console.log("Animal is walking..")
    }
};

let rabbit = {

    jumps: true
    
};

// __proto__ — это устаревший синтаксис, но до сих пор широко используется для обучения и отладки.
// Современный аналог, который лучше применять на практике:

// Object.setPrototypeOf(rabbit, animal);

rabbit.__proto__ = animal;
console.log(rabbit.eats);
console.log(rabbit.jumps);
console.log(rabbit.qaz);
console.log(rabbit.walk());

console.log('------------------------------')

console.log(rabbit.__proto__ === animal);