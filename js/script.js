/* document.getElementById('id12');
document.getElementsByClassName('jkashdk');
document.getElementsByTagName('br');
document.querySelector('#classs123');
document.querySelectorAll('.adadad'); */

document.getElementById('burger').onclick = function(){
    addMenu();
}

function addMenu(){
    document.getElementById('menu').classList.toggle('show');
}