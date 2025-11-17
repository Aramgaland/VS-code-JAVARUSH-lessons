

let userName = prompt('How is your name?');
let userAge = prompt('How old are you?');

let age = Number(userAge);
console.log(age);



if (age > 18) {
    console.log(`Welcome, ${userName} `)
    if (userName == 'Bob') {
        alert(`Hi, ${userName}!`)
    }

}

else {
    console.log(`Please, came later, ${userName}`)


}