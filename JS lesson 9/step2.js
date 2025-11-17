
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



for (let key in person) {
    console.log(key, ':', person[key]);
}
