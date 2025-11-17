

let alph = ['a', 'b', 'c', 'd', 'e'];


console.log(alph);
console.log(alph.length);
alph.push('D');

console.log(alph);
console.log(alph.length);

let myStr = alph.pop();
console.log(alph.length);
console.log(alph);
console.log(myStr);

//  удалить элемент в начало массива\списка

let myStr2 = alph.shift(myStr)
console.log(alph.length);
console.log(alph);
console.log(myStr2);

//  добавить элемент в начало массива\списка

alph.unshift(myStr)
console.log(alph.length);
console.log(alph);
