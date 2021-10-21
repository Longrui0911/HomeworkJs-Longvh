// BOM: window, location, screen, history

const modal = document.getElementsByClassName('modal')[0]
console.log(modal)
    // const imageModal = document.getElementsByClassName('full-img')[0]
    // console.log(imageModal)
const imageModal = document.querySelector('.full-img')
console.log(imageModal)

// Tạo sự kiện click, doi url image va show popup
// .addEventListener()
const listImage = document.querySelectorAll('.img-container img')
console.log(listImage)

listImage.forEach(element => {
    element.addEventListener('click', function() {
        // Open modal
        modal.classList.add('open')
        const imgAlt = element.getAttribute('alt');
        // Set new url image
        imageModal.src = `./img/full/${imgAlt}.jpg`;
        imageModal.classList.add('open');
    })
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
    };
});
// Demo, làm tiếp yêu cầu scroll
// const elmntToView = document.getElementById("books");
// elmntToView.onclick(function() {
//     elmntToView.scrollIntoView();
// })

const elmntToBook = document.getElementById('books');
let sectionBook = function() {
    elmntToBook.scrollIntoView();
}

const elmntToGallery = document.getElementById('gallery');
let sectionGallery = function() {
    elmntToGallery.scrollIntoView();
}

const elmntToStudents = document.getElementById('students');
let sectionStudents = function() {
    elmntToStudents.scrollIntoView();
}

const elmntToColor = document.getElementById('color');
let sectionColor = function() {
    elmntToColor.scrollIntoView();
}

// btn back top
const backTop = document.getElementById('btn-top')
backTop.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    // window.onscroll = () => window.scrollY > 500 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0
window.onscroll = function() {
    if (window.scrollY > 500) {
        backTop.style.opacity = 1;
    } else {
        backTop.style.opacity = 0;
    }
}

//bai 4.2
const btnChangeColor = document.getElementById('change-color');
const colorText = document.getElementById('color-text');
const boxColor = document.getElementById('color')

let defaultColor = `rgb(255,255,255)`;
colorText.innerHTML = defaultColor;
colorText.style.color = defaultColor

btnChangeColor.addEventListener('click', function() {
    let variable = Math.floor(Math.random() * 256)
    let variable2 = Math.floor(Math.random() * 256)
    let variable3 = Math.floor(Math.random() * 256)
    let colorChange = `rgb(${variable},${variable2},${variable3})`;
    colorText.innerHTML = colorChange;
    colorText.style.color = colorChange;
    boxColor.style.backgroundColor = colorChange;
})