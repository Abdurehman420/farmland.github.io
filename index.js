const popbtn = document.querySelector('.popUpBtn')
const closebtn = document.querySelector('.crossBtn')
const blured = document.querySelector('.container')

const model = document.querySelector('.model')


popbtn.addEventListener('click' , ()=>{



    model.classList.add('open')
    popbtn.classList.add('close')
    blured.classList.add('open')
})
closebtn.addEventListener('click' , ()=>{


    popbtn.classList.remove('close')
    model.classList.remove('open')
    blured.classList.remove('open')
})