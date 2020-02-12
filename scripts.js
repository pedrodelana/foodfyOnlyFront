const modaloverlay = document.querySelector('.modal-overlay');
const receitas = document.querySelectorAll('.receita');

for (let receita of receitas) {
    receita.addEventListener("click",function(){
        modaloverlay.classList.add('active')
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modaloverlay.classList.remove("active");
})