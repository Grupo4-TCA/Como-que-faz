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

const post = document.getElementById('post');
const longpres = document.getElementById('longpress');

post.addEventListener('mousedown', function() {
    pressTimer = setTimeout(function() {
        longpress.style.display = 'block';
    }, 1000);
});

post.addEventListener('mouseup', function() {
    clearTimeout(pressTimer);
    longpress.style.display = 'none';
});

post.addEventListener('mouseout', function() {
    clearTimeout(pressTimer);
    longpress.style.display = 'none';
});
