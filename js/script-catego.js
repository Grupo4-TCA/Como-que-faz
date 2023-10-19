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



var pressTimer = document.getElementById("longpress");

$("a").mouseup(function(){
  clearTimeout(pressTimer);
  // Clear timeout
  return false;
}).mousedown(function(){
  // Set timeout
  pressTimer = window.setTimeout(function() {
    pressTimer.style.display='block';
  },1000);
  return false; 
});