const fcutodasElList = document.querySelectorAll('.filtrocu button');

fcutodasElList.forEach(Option =>{
    Option.setAttribute("class","")
    console.log (Option)
Option.addEventListener('click', () =>{
Option.classList.add('clicado');
});
});