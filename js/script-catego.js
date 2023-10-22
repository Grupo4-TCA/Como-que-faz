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
//post
var div = document.getElementById('post-dispensa');
    var longPressDiv = document.getElementById('longpress');
    var nomedopost = document.getElementById('descri-post');
    var longpress;

    div.addEventListener('mousedown', startLongPress);
    div.addEventListener('mouseup', clearLongPress);
    div.addEventListener('touchstart', startLongPress);
    div.addEventListener('touchend', clearLongPress);

    div.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });

    // Impede o menu de contexto ao clicar com o botão direito do mouse
    div.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    function startLongPress() {
        longpress = setTimeout(function() {
            longPressDiv.style.display = "flex";
            nomedopost.style.display = "none";
        }, 1000);
    }

    function clearLongPress() {
        clearTimeout(longpress);
        longPressDiv.style.display = "none";
        nomedopost.style.display = "block";
    }

    longPressDiv.style.display = "none";

//post-a
//FIM longpress-------------------------------------------------------------------------------------//

//filtro subcategorias--------------------------------------------------------------//
function category(c){
    var item = document.getElementById('item-'+c).innerHTML;
    document.getElementsByTagName('input')[0];
}
function dropdown(p){
    var e = document.getElementsByClassName('dropDown')[0];
    var d = ['block','none'];
    e.style.display = d(p);

    var t = ['0px', '0px-10px'];

    setTimeout(function(){
        e.style.transform = 'translate('+t[p]+')';
    },0);
}