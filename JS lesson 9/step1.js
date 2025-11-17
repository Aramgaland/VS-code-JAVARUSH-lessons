

let person = {

    name: 'Bob',
    age: 35,
    isAdmin: true,
    address: {
        street: 'Lenin',
        house: 23
    }, 
    city: "Belgrad"
    
};


console.log(person)

let user = new Object();
user.name = 'Ann';
user.age = 40;
user.city = 'Moscow' 

console.log(user);

user.age = 23;
console.log(user)

console.log(user.name);
console.log(user.city);

console.log(user['name']);
console.log(person['name']);


console.log('------------------------------');


person.job = 'Developer'
console.log(person.job)

console.log('------------------------------');

person.job = 'Devops'
console.log(person.job)

console.log('------------------------------');


delete person.age;
console.log(person);

console.log('name' in person);
console.log('name12' in person);

