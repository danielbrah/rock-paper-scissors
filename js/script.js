const modalBtn = document.getElementById('modal__btn')
const closeBtn = document.querySelectorAll('.close-modal')
const modal = document.getElementById('rules-modal')
const overlay = document.getElementById('overlay')
const choice = document.querySelectorAll('.choice')
const yourChoice = document.getElementById('your-choice')
const houseChoice = document.getElementById('house-choice')
const placeholder = document.getElementById('house-choice-placeholder-container')
const scoreText = document.getElementById('score')
const results = document.getElementById('results')
let score = 0
const choices = {}

const closeModal = function() 
{
    modal.classList.remove('active')
    overlay.classList.remove('active') 
}

const setImage = function(choice, parent, ...dimensions)
{
    choices[`${parent == houseChoice ? 'houseChoice' : 'yourChoice'}`] = choice
    // REFERENCE: dimensions = [width, height]
    // Creating element
    const img = document.createElement('img')
    const playerChoice = document.createElement('div')
    const bg = document.createElement('div')

    // Setting image source and div classnames
    bg.classList.add('choice__icon__bg')
    playerChoice.classList.add('choice__icon')
    playerChoice.classList.add(`${choice}-icon`)
    playerChoice.classList.add('result-icon')
    img.src = `images/icon-${choice}.svg`
    img.style.width = `${dimensions[0]}px`
    img.style.height = `${dimensions[1]}px`

    // Appending elements
    playerChoice.appendChild(img)
    playerChoice.appendChild(bg)
    parent.appendChild(playerChoice)
}

const setHouseChoice = function()
{
    const secret =(Math.random() * (3 - 1) + 1).toFixed(0)
    switch(Number(secret))
    {
        case 1:
            setImage('rock', houseChoice, window.innerWidth >= 1366 ? 90 : 48, window.innerWidth >= 1366 ? 90 : 48)
            return

        case 2:
            setImage('paper', houseChoice, window.innerWidth >= 1366 ? 90 : 49, window.innerWidth >= 1366 ? 100 : 59)
            return

        case 3:
            setImage('scissors', houseChoice, window.innerWidth >= 1366 ? 90 : 51, window.innerWidth >= 1366 ? 97 : 58)
            return

        default:
            return 'Error'
    }
}

const checkChoice = function(e) {
    switch(e.getAttribute('id'))
    {
        case 'rock':
            setImage('rock', yourChoice, window.innerWidth >= 1366 ? 90 : 48, window.innerWidth >= 1366 ? 90 : 48)
            return

        case 'paper':
            setImage('paper', yourChoice, window.innerWidth >= 1366 ? 90 : 49, window.innerWidth >= 1366 ? 100 : 59)
            return

        case 'scissors':
            setImage('scissors', yourChoice, window.innerWidth >= 1366 ? 90 : 51, window.innerWidth >= 1366 ? 97 : 58)
            return
        
        default:
            return 'Error!'
    }
}

const winner = function(yourChoice, houseChoice)
{
    if(yourChoice == houseChoice) document.getElementById('results-text').textContent = 'Draw!'
    else{

        switch(yourChoice)
        {
            case 'rock':
                switch(houseChoice)
                {
                    case 'paper':
                        score != 0 && score < 0 ? score-- : score
                        document.getElementById('results-text').textContent = 'You lose!'
                        return
                    
                    case 'scissors':
                        score++ 
                        scoreText.textContent = `${score}`
                        document.getElementById('results-text').textContent = 'You win!'
                }
                
                return

            case 'paper':
                switch(houseChoice)
                {
                    case 'rock':
                        score++ 
                        scoreText.textContent = `${score}`
                        document.getElementById('results-text').textContent = 'You win!'
                        return
                    
                    case 'scissors':
                        score != 0 && score < 0 ? score-- : score
                        document.getElementById('results-text').textContent = 'You lose!'
                }
                return

            case 'scissors':
                switch(houseChoice)
                {
                    case 'paper':
                        score++ 
                        scoreText.textContent = `${score}`
                        document.getElementById('results-text').textContent = 'You win!'
                        return
                    
                    case 'rock':
                        score != 0 && score < 0 ? score-- : score
                        document.getElementById('results-text').textContent = 'You lose!'
                }
                return

            default: 
                console.log('Error')
        }
    }
}

const transition = function() 
{
    placeholder.style.display = 'grid'
    placeholder.style.placeItems = 'center'
    
    setTimeout(() => { 
        setHouseChoice()
        placeholder.style.display = 'none'
        winner(choices.yourChoice, choices.houseChoice)
        results.id = 'override'
        document.getElementById('game__phase__2').style.width = `${window.innerWidth >= 1366 ? 925 : 307}px`
    }, 2000)
}

closeBtn.forEach(element =>{
    element.addEventListener('click', closeModal)
})

overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', e => {
    if(e.key == 'Escape' && modal.classList.contains('active')) closeModal()
})

modalBtn.addEventListener('click', () => {
    modal.classList.toggle('active')
    overlay.classList.toggle('active')
})

choice.forEach(element => {
    element.addEventListener('click', () => {
        checkChoice(element)
        transition()
        document.getElementById('game__phase__1').classList.toggle('hidden')
        document.getElementById('game__phase__2').classList.toggle('show')
    })
})