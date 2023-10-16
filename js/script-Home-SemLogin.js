let countMobile = 1;
let countDesktop = 1;

function nextImageMobile() {
    countMobile++;
    if (countMobile > 3) {
        countMobile = 1;
    }
    // Ative o carrossel móvel e desative o de desktop
    document.getElementById("radio1").checked = true;
    document.getElementById("radio2").checked = false;
    document.getElementById("radio3").checked = false;
}

function nextImageDesktop() {
    countDesktop++;
    if (countDesktop > 3) {
        countDesktop = 1;
    }
    // Ative o carrossel de desktop e desative o móvel
    document.getElementById("radio1").checked = false;
    document.getElementById("radio2").checked = true;
    document.getElementById("radio3").checked = false;
}

// Inicie o carrossel móvel automaticamente após o carregamento da página
window.addEventListener("load", function () {
    setInterval(nextImageMobile, 3000);
    document.getElementById("radio1").checked = true;
});

// Inicie o carrossel de desktop automaticamente após o carregamento da página
window.addEventListener("load", function () {
    setInterval(nextImageDesktop, 3000);
    document.getElementById("radio2").checked = true;
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
