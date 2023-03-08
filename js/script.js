const modalBtn = document.getElementById('modal__btn')
const closeBtn = document.querySelectorAll('.close-modal')
const modal = document.getElementById('rules-modal')
const overlay = document.getElementById('overlay')
const choice = document.querySelectorAll('.choice')
const yourChoice = document.getElementById('your-choice')

const closeModal = function() 
{
    modal.classList.remove('active')
    overlay.classList.remove('active') 
}

const setImage = function(choice)
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
    img.src = `images/icon-${choice}.svg`
    text.textContent = 'Your Choice'

    // Appending elements
    playerChoice.appendChild(img)
    playerChoice.appendChild(bg)
    yourChoice.appendChild(playerChoice)
    yourChoice.appendChild(text)
}

const checkChoice = function(e) {
    switch(e.getAttribute('id'))
    {
        case 'rock':
            setImage('rock')
            return 'Rock!'

        case 'paper':
            setImage('paper')
            return 'Paper!'

        case 'scissors':
            setImage('scissors')
            return 'Scissors!'
        
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
        console.log(checkChoice(element))
        document.getElementById('game__phase__1').classList.toggle('hidden')
        document.getElementById('game__phase__2').classList.toggle('show')
    })
})