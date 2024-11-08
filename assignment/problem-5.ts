
function getProperty <X, Y extends keyof X>(obj:X, key: Y) {
    return obj[key];
}

const person =  {
    name: "alias",
    age: 30,
    email: "a@gmail.com",
}

const result1 = getProperty(person,"name")
console.log(result1);