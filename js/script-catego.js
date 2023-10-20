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

//longpress-------------------------------------------------------------------------------------//
document.addEventListener('DOMContentLoaded', () => {
    addClickTouch();
});

let timmy = null;
let timmyLong = null;
const delay = 800;

function addClickTouch(){
    clearTimeout(timmy);

    if('ontouchstar' in document.body) {
        document.querySelectorAll('[data-long]').forEach((div) => {
            div.addEventListener('touchstart', start, {
                once:true,
            });
        });
    }
}

function start(ev) {
    ev.preventDefault();

    let ev = ev.target.closest('[data-long]');
    div.id = 'longpress';

    timmy = setTimeout(longPress.bind(div), delay);

    div.addEventListener('mouseup', addClickTouch);
    div.addEventListener('touchcancel', addClickTouch);
}

function longPress() {
    let div = this;
    div.removeEventListener('mouseup', addClickTouch);
    div.removeEventListener('touchcancel', addClickTouch);

    timmyLong = setTimeout(resetButtons.bing(div), 1000);

}