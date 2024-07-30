// Obtén los elementos
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('click-modal');
const closeModalBtn = document.getElementById('close-btn');
const backBody = document.getElementById('container');
const changeTeam = document.getElementById('team-change-btn');
const divCard = document.getElementById('div-card');
const image = document.getElementById('image');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const clickModal = document.getElementById('click-modal');
const body = document.querySelector('body');

openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    if (event.target === backBody) {
        modal.style.display = 'none';
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});

function changeMode() {
    if(changeTeam.value == 1) {
        divCard.classList.add('dark-mode');
        divCard.classList.remove('light-mode');
        image.classList.add('dark-mode');
        image.classList.remove('light-mode');
        h2.classList.add('dark-mode');
        h2.classList.remove('light-mode');
        h3.classList.add('dark-mode');
        h3.classList.remove('light-mode');
        h4.classList.add('dark-mode');
        h4.classList.remove('light-mode');
        clickModal.classList.add('dark-mode');
        clickModal.classList.remove('light-mode');
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        changeTeam.setAttribute('value', 2);
        changeTeam.innerHTML = 'Activate Light Mode';
    } else if(changeTeam.value == 2) {
        divCard.classList.remove('dark-mode');
        divCard.classList.add('light-mode');
        image.classList.remove('dark-mode');
        image.classList.add('light-mode');
        h2.classList.remove('dark-mode');
        h2.classList.add('light-mode');
        h3.classList.remove('dark-mode');
        h3.classList.add('light-mode');
        h4.classList.remove('dark-mode');
        h4.classList.add('light-mode');
        clickModal.classList.remove('dark-mode');
        clickModal.classList.add('light-mode');
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        changeTeam.setAttribute('value', 1);
        changeTeam.innerHTML = 'Activate Dark Mode';
    }
}