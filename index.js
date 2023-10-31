// const car = {
//     marka: "gm",
//     model: "malibu",
//     price: 33000,
//     engine: 2.4,
//     wheels: 5,
//     color: "white"
// }

// console.log(types);

// let detail = prompt("which details do you want to see?")

// console.log(car[detail]);


let arr = [
    {
        name: 'ismail',
        age: 12,
        isMarried: true
    },
    {
        name: 'dilruh',
        age: 16,
        isMarried: false
    },
    {
        name: 'amira',
        age: 16,
        isMarried: false
    },
    {
        name: 'sardor ml',
        age: 15,
        isMarried: false
    },
    {
        name: 'sardor st',
        age: 16,
        isMarried: true
    },
    {
        name: 'allayor',
        age: 20,
        isMarried: true
    },
    {
        name: 'ruslan',
        age: 16,
        isMarried: false
    },
    {
        name: 'tangir',
        age: 15,
        isMarried: false
    },
    {
        name: 'muxammadamir',
        age: 16,
        isMarried: true
    },
    {
        name: 'samir',
        age: 16,
        isMarried: false
    }
]

let married = []
let single = []
let average_age = 0

arr.forEach(item => {
    if(item.isMarried === true){
    married.push(item)
    } else{
        single.push(item)
    }
})

console.log({married});
console.log({single});

arr.forEach(item => {
    average_age += item.age
})

average_age = average_age / arr.length

console.log(average_age);