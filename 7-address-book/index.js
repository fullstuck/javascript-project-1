console.log("Level 24");

console.log("Array = [name, email, address, phoneNumber]")

console.log("Level 25");

const names = ["john", "luky", "james", "dave", "robin"];
console.log(names);

console.log("Level 26");

let allUsers = [];
const users = {
    john: {
        name: "john",
        email: "john@gmail.com",
        address: "Batam Centre",
        phoneNumber: "12345"
    },
    luky: {
        name: "luky",
        email: "luky@gmail.com",
        address: "Batu Ampar",
        phoneNumber: "34567"
    },
    james: {
        name: "james",
        email: "james@gmail.com",
        address: "Sekupang",
        phoneNumber: "23456"
    },
    dave: {
        name: "dave",
        email: "dave@gmail.com",
        address: "Nongsa",
        phoneNumber: "43564"
    },
    robin: {
        name: "robin",
        email: "robin@gmail.com",
        address: "Tiban",
        phoneNumber: "76584"
    }
}

for (let key in users) {
    allUsers.push(users[key]);
}

console.log(allUsers);