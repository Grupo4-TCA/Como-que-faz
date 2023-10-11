let count = 1;

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;

    // Defina o background apenas para o botão correspondente
    const currentBtn = document.querySelector(".manual-btn" + count);
    currentBtn.style.background = "#cb218c";

    // Remova o background dos outros botões manuais
    for (let i = 1; i <= 3; i++) {
        if (i !== count) {
            const otherBtn = document.querySelector(".manual-btn" + i);
            otherBtn.style.background = "white";
        }
    }
}

// Inicie o carrossel automaticamente após o carregamento da página
window.addEventListener("load", function () {
    setInterval(nextImage, 3000);
    document.getElementById("radio1").checked = true;
    document.querySelector(".manual-btn1").style.background = "#cb218c";
});

function VisiRecente() {
    var x = document.getElementById("Conteudo-Recente");
    var y = document.getElementById("Conteudo-EmAlta");
    var z = document.getElementById("Conteudo-Rapidas");
    var emAltaButton = document.querySelector(".EmAlta");

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      emAltaButton.classList.remove("active");
    }
  }
  window.onload = function() {
    var emAltaButton = document.querySelector(".EmAlta");
    emAltaButton.classList.add("active");
};

function VisiEmAlta() {
    var x = document.getElementById("Conteudo-Recente");
    var y = document.getElementById("Conteudo-EmAlta");
    var z = document.getElementById("Conteudo-Rapidas");

    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}
  function VisiRapidas() {
    var x = document.getElementById("Conteudo-Recente");
    var y = document.getElementById("Conteudo-EmAlta");
    var z = document.getElementById("Conteudo-Rapidas");
    var emAltaButton = document.querySelector(".EmAlta");

    if (z.style.display === "none") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
      emAltaButton.classList.remove("active");
    }
  }
