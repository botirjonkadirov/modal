let showBtn = document.getElementById(`forJs`)
let modal = document.getElementById(`modalForjs`)
let closer = document.getElementById(`closerBtn`)
let overlay = document.getElementById(`overLay`)

const add = ()=>{
    modal.classList.add(`hidden`)
    overlay.classList.add(`hidden`)
}
const remove = ()=>{
    modal.classList.remove(`hidden`)
    overlay.classList.remove(`hidden`)
}

showBtn.addEventListener(`click`, ()=>{
    remove()
})

closer.addEventListener(`click`, ()=>{
    add()
})

overlay.addEventListener(`click`, ()=>{
    add()
})

document.addEventListener(`keydown`, (e)=>{
    if (e.key==`Escape`) {
       add()
    }
})