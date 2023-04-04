let homeCount = 0
let guestCount = 0

let homeScore = document.querySelector("#homeTeamScore")
let guestScore = document.querySelector("#guestTeamScore")

const homeScorePlusOne = document.querySelector("#homeScorePlusOne")
const homeScorePlusTwo = document.querySelector("#homeScorePlusTwo")
const homeScorePlusThree = document.querySelector("#homeScorePlusThree")
const guestScorePlusOne = document.querySelector("#guestScorePlusOne")
const guestScorePlusTwo = document.querySelector("#guestScorePlusTwo")
const guestScorePlusThree = document.querySelector("#guestScorePlusThree")
const resetScore = document.querySelector("#resetScore")

const homeScoreFromLocalStorage = localStorage.getItem("localHome")
const guestScoreFromLocalStorage = localStorage.getItem("localGuest")

homeScore.textContent = homeScoreFromLocalStorage > 0 ? homeScoreFromLocalStorage : homeCount
guestScore.textContent = guestScoreFromLocalStorage > 0 ? guestScoreFromLocalStorage : guestCount

// home
homeScorePlusOne.addEventListener("click", () => {
    homeCount++
    homeScore.textContent = homeCount
    localStorage.setItem("localHome", homeCount)
})

homeScorePlusTwo.addEventListener("click", () => {
    homeCount+= 2
    homeScore.textContent = homeCount
    localStorage.setItem("localHome", homeCount)
})

homeScorePlusThree.addEventListener("click", () => {
    homeCount+=3
    homeScore.textContent = homeCount
    localStorage.setItem("localHome", homeCount)
})

// guest
guestScorePlusOne.addEventListener("click", () => {
    guestCount++
    guestScore.textContent = guestCount
    localStorage.setItem("localGuest", guestCount)
})

guestScorePlusTwo.addEventListener("click", () => {
    guestCount+=2
    guestScore.textContent = guestCount
    localStorage.setItem("localGuest", guestCount)
})

guestScorePlusThree.addEventListener("click", () => {
    guestCount+=3
    guestScore.textContent = guestCount
    localStorage.setItem("localGuest", guestCount)
})

// reset
resetScore.addEventListener("click", () => {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
    localStorage.clear()
})
