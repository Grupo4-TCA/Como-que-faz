const fcutodasElList = document.querySelectorAll('.filtrocu button');

fcutodasElList.forEach(Option => {
    Option.addEventListener('click', () => {
        limpar();
        Option.classList.add('clicado');
    });
});

limpar = () => {
    fcutodasElList.forEach(Option => {
        Option.classList.remove('clicado');
    })    
}

let timeoutId;
const minhaDiv = document.getElementById('longpress');
   minhaDiv.addEventListener('mousedown', ()=> {
   setTimeout(() =>{
    minhaDiv.style.display = 'block';
}, 1000); });
  minhaDiv.addEventListener('mouseup', () => {
    minhaDiv.style.display = 'none'
});