
function onBtnClick() {
    let id = document.getElementById('demo');
    id.innerText = 'How are you?';
    id.style.backgroundColor = 'blue';

    let id2 = document.getElementById('div1');
    // id2.innerHTML += '<h2>Hello h2 tag </h2>'; This will override all tag in id div1
    id2.innerHTML += '<h2>Hello h2 tag </h2>'; // This will append new tag in id div1
}