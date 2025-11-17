

function Person(name, age) {
    this.name = name,
    this.age = age,
    this.sayHi = function() {
        console.log(`Hi, ${this.name}!`)
    }
}

let user1 = new Person('Ann', 29);
let user2 = new Person('Bob', 20);

console.log(user1);
console.log(user2);

user1.name = "Ellis"
user1.sayHi()
user2.sayHi()

console.log(user1);
console.log(user2);