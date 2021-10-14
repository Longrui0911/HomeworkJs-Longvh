var array = ['long', 'phong', 'vanh', 'tu'];
var bai2 = document.getElementById('bai2').children;

for (var i = 0; i < array.length; i++) {
    bai2[i].innerHTML = array[i]
}

let newItem = document.createElement('p');
let textNode = document.createTextNode('Quan')
newItem.appendChild(textNode);

let bai22 = document.getElementById('bai2');
bai22.insertBefore(newItem, bai22.childNodes[0])

let newItem1 = document.createElement('p');
let textNode1 = document.createTextNode('Phong shadow')
newItem1.appendChild(textNode1);
bai22.appendChild(newItem1, bai22.lastChild)


// bai3
let box2 = document.getElementById('bai2')
let box3 = document.getElementById('bai3')
let content1 = document.getElementById('content1')

function myFunction() {
    let content = document.getElementById('content')
    if (content.style.display == 'none') {
        content.style.display = 'block';
        box3.style.backgroundColor = 'red';
    } else {
        content.style.display = 'none';
        box3.style.backgroundColor = 'orange'
    }
}
// bai3-2
function myFunction1() {
    if (content1.style.display == 'none') {
        content1.style.display = 'block';
        box2.style.display = 'none';
        box3.style.display = 'none';
    } else {
        content1.style.display = 'none';
        box2.style.display = 'block';
        box3.style.display = 'block';
    }
}