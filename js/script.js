const modalBtn = document.getElementById('modal__btn')
const closeBtn = document.querySelectorAll('.close-modal')
const modal = document.getElementById('rules-modal')
const overlay = document.getElementById('overlay')
const choice = document.querySelectorAll('.choice')
const yourChoice = document.getElementById('your-choice')
const houseChoice = document.getElementById('house-choice')

const closeModal = function() 
{
    modal.classList.remove('active')
    overlay.classList.remove('active') 
}

const setImage = function(choice, parent, ...dimensions)
{
    // Creating element
    const img = document.createElement('img')
    const playerChoice = document.createElement('div')
    const bg = document.createElement('div')
    const text = document.createElement('p')

    // Setting image source and div classnames
    bg.classList.add('choice__icon__bg')
    playerChoice.classList.add('choice__icon')
    playerChoice.classList.add(`${choice}-icon`)
    playerChoice.style.position = 'relative'
    playerChoice.style.height = '286px'
    playerChoice.style.width = '292px'
    img.src = `images/icon-${choice}.svg`
    img.style.width = `${dimensions[0]}px`
    img.style.height = `${dimensions[1]}px`
    text.textContent = `${parent == yourChoice ? 'You Picked' : 'The House Picked'}`

    // Appending elements
    playerChoice.appendChild(img)
    playerChoice.appendChild(bg)
    parent.appendChild(playerChoice)
    parent.appendChild(text)
}

const setHouseChoice = function()
{
    const secret =(Math.random() * (3 - 1) + 1).toFixed(0)
    switch(Number(secret))
    {
        case 1:
            setImage('rock', houseChoice, 90, 90)
            return

        case 2:
            setImage('paper', houseChoice, 90, 100)
            return

        case 3:
            setImage('scissors', houseChoice, 90, 97)
            return

        default:
            return 'Error'
    }
}

const checkChoice = function(e) {
    switch(e.getAttribute('id'))
    {
        case 'rock':
            setImage('rock', yourChoice, 90, 90)
            return

        case 'paper':
            setImage('paper', yourChoice, 90, 100)
            return

        case 'scissors':
            setImage('scissors', yourChoice, 90, 97)
            return
        
        default:
            return 'Error!'
    }
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
        setHouseChoice()
        document.getElementById('game__phase__1').classList.toggle('hidden')
        document.getElementById('game__phase__2').classList.toggle('show')
    })
})