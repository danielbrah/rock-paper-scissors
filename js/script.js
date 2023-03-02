const modalBtn = document.getElementById('modal__btn')
const closeBtn = document.querySelectorAll('.close-modal')
const modal = document.getElementById('rules-modal')
const overlay = document.getElementById('overlay')

closeBtn.forEach(element =>{
    element.addEventListener('click', () =>{
        modal.classList.remove('active')
        overlay.classList.remove('active')
    })
})

modalBtn.addEventListener('click', () => {
    modal.classList.toggle('active')
    overlay.classList.toggle('active')
})