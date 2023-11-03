
function VisiPostagens() {
    var x = document.getElementById("Conteudo-postagens");
    var y = document.getElementById("Conteudo-rascunhos");
    var z = document.getElementById("Conteudo-interacoes");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}
function VisiRascunhos() {
    var x = document.getElementById("Conteudo-postagens");
    var y = document.getElementById("Conteudo-rascunhos");
    var z = document.getElementById("Conteudo-interacoes");

    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}
function VisiInteracoes() {
    var x = document.getElementById("Conteudo-postagens");
    var y = document.getElementById("Conteudo-rascunhos");
    var z = document.getElementById("Conteudo-interacoes");

    if (z.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    }
}

function EditarPerfil(){
    var popup = document.getElementById("editar-perfil-popup");
    var fundo = document.getElementById("fundo-editar-perfil");

    if (popup.style.display === "none"){
        popup.style.display = "block";
        fundo.style.display = "block";
    }
}

function SairEditarPerfil(){
    var popup = document.getElementById("editar-perfil-popup");
    var fundo = document.getElementById("fundo-editar-perfil");

    if (popup.style.display === "block"){
        popup.style.display = "none";
        fundo.style.display = "none";
    }
}

function EditarPerfilMob(){
    var popup = document.getElementById("editar-perfil-popup-mob");
    var fundo = document.getElementById("fundo-editar-perfil-mob");

    if (popup.style.display === "none"){
        popup.style.display = "block";
        fundo.style.display = "block";
    }
}

function SairEditarPerfilMob(){
    var popup = document.getElementById("editar-perfil-popup-mob");
    var fundo = document.getElementById("fundo-editar-perfil-mob");

    if (popup.style.display === "block"){
        popup.style.display = "none";
        fundo.style.display = "none";
    }
}
