const showPopup = document.querySelector('#showPopup')
const modalImg = document.getElementsByClassName('full-img')[0]

function showImg(event) {
    modalImg.src = `img/full/${event.alt}.jpg`
    showPopup.classList.add('open')
}
showPopup.onclick = () => {
    showPopup.classList.remove('open')
}