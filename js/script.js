const modalBtn = document.getElementById('modal__btn')
const closeBtn = document.querySelectorAll('.close-modal')
const modal = document.getElementById('rules-modal')
const overlay = document.getElementById('overlay')
const choice = document.querySelectorAll('.choice')

const closeModal = function() 
{
    modal.classList.remove('active')
    overlay.classList.remove('active') 
}

const checkChoice = function(e) {
    switch(e.getAttribute('id'))
    {
        case 'rock':
            return 'Rock!'

        case 'paper':
            return 'Paper!'

        case 'scissors':
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