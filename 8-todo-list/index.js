console.log("Level 27");

console.log("Array = [name, task, place, date]")

console.log("Level 28");

const names = ["john", "luky", "james", "dave", "robin"];
console.log(names);

console.log("Level 29");

let allUsers = [];
const users = {
    john: {
        name: "john",
        todo1: {
            task: "Learn Figma",
            place: "NDP",
            date: "16 July 2018"
        },
        todo2: {
            task: "Learn HTML",
            place: "NDP",
            date: "17 July 2018"
        }
    },
    luky: {
        name: "luky",
        todo1: {
            task: "Learn CSS",
            place: "NDP",
            date: "18 July 2018"
        },
        todo2: {
            task: "Learn Git",
            place: "NDP",
            date: "18 July 2018"
        }
    },
    james: {
        name: "james",
        todo1: {
            task: "Learn Github",
            place: "NDP",
            date: "19 July 2018"
        },
        todo2: {
            task: "Learn Javascript",
            place: "NDP",
            date: "19 July 2018"
        }
    },
    dave: {
        name: "dave",
        todo1: {
            task: "Doing Javascript Project",
            place: "NDP",
            date: "20 July 2018"
        },
        todo2: {
            task: "Learn Flowchart",
            place: "NDP",
            date: "20 July 2018"
        }
    },
    robin: {
        name: "robin",
        todo1: {
            task: "Learn DOM",
            place: "NDP",
            date: "23 July 2018"
        },
        todo2: {
            task: "CSS Preprocessing",
            place: "NDP",
            date: "24 July 2018"
        }
    }
}

for (let key in users) {
    allUsers.push(users[key]);
}

console.log(allUsers);