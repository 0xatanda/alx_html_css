let fruits = ["apple", "banana", "orange", "coconut"]

fruits.sort()

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])

}

console.log()

for(let fruit of fruits) {
    console.log(fruit)
}


console.log()

const Obj = {
    alive: true,
    anwser: 43,
    hobbies: ["Eat", "code", "fast", "pray"],
    brevages: {
        morning: "Coffe",
        afternoon: "Milo"
    },
    action: function () {
        return `Time for ${this.brevages.morning}`
    }
}

console.log(Obj.action())


console.log()

const vechcle = {
    wheels: 4,
    engine: function () {
        return `vrooooom!!!`
    }
}

const car = Object.create(vechcle)
car.doors = 4
car.engine = function () {
    return `whoooooooh!`
}

console.log(car.engine())
console.log(car.wheels)


const Tesla = Object.create(car)


function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched successfully')
    }, 100)
}


function logMesg(msg) {
    console.log(msg)
}

fetchData(logMesg)

console.log()
console.log()

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const wlakedDog = true

            if (wlakedDog) {
                resolve("You walk the Dog")
            }
            else {
                reject("You didn't walk the Dog")
            }
        }, 2000);
    })
}


function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitechenCleaned = true
            if (kitechenCleaned) {
                resolve("You've clean the kitchen")
            }
            else {
                reject("You didn't clean the kitchen")
            }
        }, 2500);
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashed = false
            if (trashed) {
                resolve("You have take the trash out")
            }
            else{
                reject("You did'nt take the trash out")
            }
        }, 500);
    })
}

walkDog().then(value => {
    console.log(value)
    return cleanKitchen()
}).then(value => {
    console.log(value)
    return takeOutTrash()
}). then(value => {
    console.log(value)
    console.log("You've finished the chores")
}).catch(error => console.log(error))

console.log()
console.log()

async function chores() {
    try {
        const wlakedDogResult = await walkDog()
        console.log(wlakedDogResult)

        const cleanKitchenResult = await cleanKitchen()
        console.log(cleanKitchenResult)

        const takeOutTrashResult = await takeOutTrash()
        console.log(takeOutTrashResult)
    } catch (error) {
        console.log(error)
    }
}

chores()