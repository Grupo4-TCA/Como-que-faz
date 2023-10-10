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
const minhaDiv =
document.getElementById('longpress');
minhaDiv.addEventListener('mousedown', ()
=> {
timeoutId = setTimeout(() =>
minhaDiv.style.display = 'block'
}, 1000); 
minhaDiv.addEventListener('mouseup', () => {
    clearTimeout(timeoutId);
});