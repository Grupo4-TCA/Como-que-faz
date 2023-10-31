
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