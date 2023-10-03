const fcutodasElList = document.querySelectorAll('.filtrocu button');

fcutodasElList.forEach(Option =>{
Option.addEventListener('click', () =>{
Option.classList.add('clicado');
});
});