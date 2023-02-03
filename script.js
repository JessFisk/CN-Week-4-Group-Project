const page1 = document.getElementById(`page1`)
const page2 = document.getElementById(`page2`)
const sheepCard = document.getElementById(`sheepCard`)
const dragonCard = document.getElementById(`dragonCard`)
const dogCard = document.getElementById(`dogCard`)
const johnCard = document.getElementById(`johnCard`)
const sheepImages = document.querySelectorAll("#sheepImages img")
const dragonImages = document.querySelectorAll("#dragonImages img")
const dogImages = document.querySelectorAll("#dogImages img")
const johnImages = document.querySelectorAll("#johnImages img")
const buttonGlow = document.querySelectorAll(".healthBtns")



sheepCard.addEventListener(`click`, () => {
    page1.style.display = `none`
    page2.style.display = `block`
    sheepImages[0].classList.remove(`hidden`);
})

dragonCard.addEventListener(`click`, () => {
    page1.style.display = `none`
    page2.style.display = `block`
    dragonImages[0].classList.remove(`hidden`);
})

dogCard.addEventListener(`click`, () => {
    page1.style.display = `none`
    page2.style.display = `block`
    dogImages[0].classList.remove(`hidden`);
})

johnCard.addEventListener(`click`, () => {
    page1.style.display = `none`
    page2.style.display = `block`
    johnImages[0].classList.remove(`hidden`);
})

const removeClass = (event) => {
    event.target.classList.remove('buttonTransform');
 }

buttonGlow.forEach((Glow) => {
    Glow.addEventListener (`click`,(e) =>{
    Glow.classList.add (`buttonTransform`)
    })
    Glow.addEventListener(`transitionend`,removeClass)
})




class Pet{
    constructor (animal){
        this.health = 100
        this.hunger = 100
        this.exercise = 100
        this.sleep = 100
        this.thirst = 100
    }

    drink() {
        this.health += 10;
        this.thirst += 15;
        this.sleep -= 7;
    }

    eat() {
        this.health += 15;
        this.hunger += 10;
        this.thirst -= 7;
        this.exercise -= 8;
    }

    die() {
        this.health = 0;
        this.hunger = 0;
        this.thirst = 0;
        this.sleep = 0;
        this.exercise = 0;
    }

    dance() {
        this.health += 5;
        this.hunger -= 10;
        this.thirst -= 7;
        this.sleep -= 20
    }

    gotoSleep() {
        this.health += 15;
        this.hunger += 15;
        this.thirst -= 15;
        this.sleep += 25;
    }
    barReducer(){
        this.health -= 1
        this.hunger -= 1
        this.exercise -= 1
        this.sleep -= 1
        this.thirst -= 1
    }

}
// / Now that we have gamePet as an object we can use this to access the numbers/functions above

const gamePet = new Pet ()
// console.log (gamePet)

// //// For example if we use game.Pet as the object and apply the function dance we can see the stats change in the Console Log 

// gamePet.dance ()
// console.log (gamePet)


//// reducing the Health bars over time 




const Life = document.getElementById('meterLife');
const Hunger = document.getElementById("meterHunger");
const Thirst = document.getElementById("meterThirst");
const Exercise = document.getElementById("meterExercise");
const Sleep = document.getElementById("meterSleep")


//////// So in order to reducd the bar we need to call the bar reducer function (until the bars return 0, havent added this yet) i have created a function to do this every half a second. I have added the Set interval timer mentioned by John and found on MDN. So i am telling set interval timer to run life reducer ever 500 miliseconds. 
const lifeReducer = () => {
    gamePet.barReducer()
    Life.value= gamePet.health
    Hunger.value=gamePet.hunger
    Thirst.value=gamePet.thirst
    Exercise.value=gamePet.exercise
    Sleep.value=gamePet.sleep
    console.log (gamePet)
}
setInterval( lifeReducer, 750)


const FoodButton = document.getElementById("foodButton")
const DanceButton = document.getElementById("danceButton")
const DrinkButton = document.getElementById("drinkButton")
const SleepButton = document.getElementById("sleepButton")
const DieButton = document.getElementById("dieButton")


DanceButton.addEventListener(`click`, (e) => {
    Exercise + gamePet.dance()
}) 

FoodButton.addEventListener(`click`, (e) => {
    Hunger + gamePet.eat()
}) 

DrinkButton.addEventListener(`click`, (e) => {
    Thirst + gamePet.drink()
}) 

sleepButton.addEventListener(`click`, (e) => {
    Sleep + gamePet.gotoSleep()
}) 



//// Need to add Die meter element for this button

DieButton.addEventListener(`click`, (e) => {
    gamePet.die()
    Life.value= gamePet.health
    Hunger.value=gamePet.hunger
    Thirst.value=gamePet.thirst
    Exercise.value=gamePet.exercise
    Sleep.value=gamePet.sleep
      
}) 



let dogimages = [
    `dogHappy.jpg`,
    `dogNormal.jpg`,
    `dogsad.jpg`,
    `dogsadder.jpg`,
]

function myImages() {
    if (life.value >= 80) {
        document.getElementById("dogimages").src = `./images/dogHappy.jpg`
        console.log(myImages)
    }

    else if (life.value < 80 && life.value >= 20) {
        document.getElementById("dogimages").src = `./images/dogNormal.jpg`
    }

    else if (life.value < 20 && life.value >= 10) {
        document.getElementById("dogimages").src = `./images/dogsad.jpg`
    }

    else if (life.value < 10) {
        document.getElementById("dogimages").src = `./images/dogsadder.jpg`
    }

    else if (life.value = 0) {
        document.getElementById("dogimages").src = `./images/dogsadder.jpg`
    }
}
myImages();


