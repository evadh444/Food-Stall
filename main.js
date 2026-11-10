const arbre = document.querySelector('.arbre');
const pers1 = document.querySelector('.pers1');

arbre.addEventListener('click', () => {
    arbre.classList.toggle('active');
});

pers1.addEventListener('click', () => {
    pers1.style.transform = 'translateX(900px)';
})