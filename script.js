

let inside = document.querySelector('.inside')
let modal = document.getElementById('modal');

document.getElementById('add').addEventListener('click', e = () => {
 modal.style.display = "flex"
})

document.getElementById('cancel').addEventListener('click', e = () => {
 modal.style.display = "none"
})

document.getElementById('close').addEventListener('click', e = () => {
 modal.style.display = "none"
})



let edit = document.querySelectorAll('.bit')

edit.forEach(e => {
 e.addEventListener('click', e = () => {
  inside.style.display = "block";
 })
});




