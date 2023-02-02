const page1= document.getElementById(`page1`)
const page2 = document.getElementById(`page2`)
const sheepCard = document.getElementById(`sheepCard`)
const dragonCard = document.getElementById(`dragonCard`)
const dogCard = document.getElementById(`dogCard`)
const johnCard = document.getElementById(`johnCard`)
const sheepImages = document.querySelectorAll ("#sheepImages img")
const dragonImages = document.querySelectorAll ("#dragonImages img")
const dogImages = document.querySelectorAll ("#dogImages img")
const johnImages = document.querySelectorAll ("#johnImages img")

sheepCard.addEventListener(`click`, () => {
    page1.style.display = `none`
    page2.style.display = `block`
    sheepImages [0].classList.remove(`hidden`);
})

dragonCard.addEventListener(`click`, () => {
    page1.style.display = `none`
    page2.style.display = `block`
    dragonImages [0].classList.remove(`hidden`);
})

dogCard.addEventListener(`click`, () => {
    page1.style.display = `none`
    page2.style.display = `block`
    dogImages [0].classList.remove(`hidden`);
})

johnCard.addEventListener(`click`, () => {
    page1.style.display = `none`
    page2.style.display = `block`
    johnImages [0].classList.remove(`hidden`);
})





