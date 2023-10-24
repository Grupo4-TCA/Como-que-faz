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
function configureLongPress(divId, longPressDivId, descriptionId) {
    var div = document.getElementById(divId);
    var longPressDiv = document.getElementById(longPressDivId);
    var nomedopost = document.getElementById(descriptionId);
    var longpress;

    div.addEventListener('mousedown', startLongPress);
    div.addEventListener('mouseup', clearLongPress);
    div.addEventListener('touchstart', startLongPress);
    div.addEventListener('touchend', clearLongPress);

    div.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });

    document.addEventListener('contextmenu', function(e) {
        if (e.target !== div) {
            e.preventDefault();
        }
    });

    function startLongPress() {
        longpress = setTimeout(function() {
            longPressDiv.style.display = "flex";
            nomedopost.style.display = "none";
        }, 700);
    }

    function clearLongPress() {
        clearTimeout(longpress);
        longpress = setTimeout(function() {
            longPressDiv.style.display = "none";
            nomedopost.style.display = "block";
        }, 1500);
    }

    longPressDiv.style.display = "none";
}
configureLongPress('post-dispensa-fileira1', 'longpress-post-dispensa-fileira1', 'descri-post');

//post-a
function configureLongPress(divId, longPressDivId, descriptionId) {
    var div = document.getElementById(divId);
    var longPressDiv = document.getElementById(longPressDivId);
    var nomedopost = document.getElementById(descriptionId);
    var longpress;

    div.addEventListener('mousedown', startLongPress);
    div.addEventListener('mouseup', clearLongPress);
    div.addEventListener('touchstart', startLongPress);
    div.addEventListener('touchend', clearLongPress);

    div.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });

    document.addEventListener('contextmenu', function(e) {
        if (e.target !== div) {
            e.preventDefault();
        }
    });

    function startLongPress() {
        longpress = setTimeout(function() {
            longPressDiv.style.display = "flex";
            nomedopost.style.display = "none";
        }, 700);
    }

    function clearLongPress() {
        clearTimeout(longpress);
        longpress = setTimeout(function() {
            longPressDiv.style.display = "none";
            nomedopost.style.display = "block";
        }, 1500);
    }

    longPressDiv.style.display = "none";
}
// Chame a função com os IDs específicos
configureLongPress('post-bolin-fileira1', 'longpress-post-bolin-fileira1', 'descri-post-a');



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