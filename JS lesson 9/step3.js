

let person = {

    name: 'Bob',
    age: 35,
    isAdmin: true,
    address: {
        street: 'Lenin',
        house: 23
    }, 
    city: "Belgrad",
    sayHi: function() {
        console.log(`Hi, ${this.age}`)
    },

    sayGoodbye: function() {
        console.log(`Goodbye, ${person.name}`)
        
    }
    
};


console.log('--------------------------')

person.sayHi();

person.sayGoodbye();

console.log('--------------------------')

let user = {...person};

user.sayHi();
user.sayGoodbye();

console.log('--------------------------')

console.log(person);
console.log('--------------------------')
console.log(user);

console.log('--------------------------')

user.name = 'Ann';
user.age = 18;


user.sayHi();
user.sayGoodbye();
