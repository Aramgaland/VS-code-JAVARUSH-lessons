




class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    get age() {
        return this._age
    }

    set age(value) {
        if (value < 0) {
            console.log('Unexistible age!')
            value = 0;
        }

        return this._age = value
    }

    static add(a, b) {
        return a + b
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

console.log('-----------------------');

user2.sayHi();
user2.sayB();

console.log(user1.age);

console.log('-----------------------');

user1.age = 100;
console.log(user1.age);

console.log('-----------------------');

user1.age = -1;
console.log(user1.age);

console.log('-----------------------');
console.log(User.add(2,3));