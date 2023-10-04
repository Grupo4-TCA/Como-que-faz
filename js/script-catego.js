const fcutodasElList = document.querySelectorAll('.filtrocu button');

fcutodasElList.forEach(Option =>{
 getComputedStyle(fcutodasElList)
Option.addEventListener('click', () =>{
Option.classList.add('clicado');
});
});