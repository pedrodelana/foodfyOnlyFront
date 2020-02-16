const modaloverlay = document.querySelector('.modal-overlay');
const receitas = document.querySelectorAll('.receita');

for (let receita of receitas) {
    receita.addEventListener("click",function(){
    const imageReceita = receita.querySelector("img").src;
    const tituloReceita = receita.getElementsByTagName("p")[0].innerHTML;
    const autorReceita = receita.getElementsByTagName("h3")[0].innerHTML;

        modaloverlay.classList.add('active');
        modaloverlay.querySelector('img').src=`${imageReceita}`;
        modaloverlay.getElementsByTagName("p")[0].innerHTML = `${tituloReceita}`;
        modaloverlay.getElementsByTagName("h3")[0].innerHTML = `${autorReceita}`;
        
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modaloverlay.classList.remove("active");
})