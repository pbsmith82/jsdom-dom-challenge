// 1. As a user, I should see the timer increment every second once the page has


// document.addEventListener('DOMContentLoaded', () => {
const counter = document.getElementById("counter")

const like = document.getElementById("heart")

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

// function likedNumber(){ #javascriptObject

// } 