// 1. As a user, I should see the timer increment every second once the page has


// document.addEventListener('DOMContentLoaded', () => {
const counter = document.getElementById("counter")

const like = document.querySelector(".likes")
const numbers = []

function incrementCounter(){
    let newCounter = parseInt(counter.innerText)
    newCounter += 1
    counter.innerText = newCounter                    
}

function decrementCounter(){
    let newCounter = parseInt(counter.innerText)
    newCounter -= 1
    counter.innerText = newCounter                    
}

function automaticIncrement(){
    setInterval(incrementCounter, 1000)
}

automaticIncrement()

function manuallyIncrement(){
    const plusButton = document.querySelector('#plus')
    plusButton.addEventListener('click', incrementCounter)
}

manuallyIncrement()

function manuallyDecrement(){
    const minusButton = document.querySelector('#minus')
    minusButton.addEventListener('click', decrementCounter)
}

manuallyDecrement()

// like.addEventListener('click', likedNumber)
function incrementLike () {

    const likedNumber = parseInt(counter.innerText)
    numbers.push(likedNumber)
    const howMany = numbers.filter(item => item == `${likedNumber}`).length
    function searchNumber() {
        const idNumber = document.getElementById(`${likedNumber}`)
        if (idNumber)
            idNumber.innerText =  `${likedNumber} has been liked ${howMany} times.`
        else
            like.innerHTML += `<li id=${likedNumber}> ${likedNumber} has been liked ${howMany} times. </li>`
    }
    searchNumber()

}

function manuallyLike(){
    const heartButton = document.querySelector('#heart')
    heartButton.addEventListener('click', incrementLike)
}

manuallyLike()

// function likedNumber(){ #javascriptObject

// } 