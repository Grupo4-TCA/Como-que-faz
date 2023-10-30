function vispostagem() {
    var x = document.getElementById("conteudo-postagens");
    var y = document.getElementById("conteudo-rascunhos");
    var z = document.getElementById("conteudo-interacoes");

    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
}

function visrascunho() {
    var x = document.getElementById("conteudo-postagens");
    var y = document.getElementById("conteudo-rascunhos");
    var z = document.getElementById("conteudo-interacoes");

    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
}

function visinteracoes() {
    var x = document.getElementById("conteudo-postagens");
    var y = document.getElementById("conteudo-rascunhos");
    var z = document.getElementById("conteudo-interacoes");

    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
}