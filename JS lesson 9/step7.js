


class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    sayHi() {
        console.log(`Hi, ${this.name}! Are you ${this.age} years old?`)
    }

    sayB() {
        console.log(`See you later, ${this.name}!`)
    }

}

let user1 = new User('Bob', 23);
let user2 = new User('Allis', 18);

user1.sayHi();
user1.sayB();

console.log('-----------------------')

user2.sayHi();
user2.sayB();

console.log(user1.name)
