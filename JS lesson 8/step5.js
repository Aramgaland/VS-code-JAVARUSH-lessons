

let userValue = Number(prompt('Enter number: '));
let sum = 0;

while (userValue !== 0) {

    alert(`Your number: ${userValue}`);
    sum += userValue;
    userValue = Number(prompt('Enter number: '));
    

}
alert(`Total: ${sum}`)

