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



  
var long = document.getElementById('longpress')
$("a").mouseup(function(){
    clearTimeout(long);
    return false;
}).mousedown(function(){
    long = window.setTimeout(function() {long.style.display = "block"},1000);
    return false
})