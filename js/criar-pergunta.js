function modalpergunta() {
    const openModalButton = document.querySelector("#open-pergunta");
    const closeModalButton = document.querySelector("#close-modal-pergunta");
    const modalElement = document.querySelector("#modal-pergunta");
    const fadeElement = document.querySelector("#fade-pergunta");

    modalElement.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    const openModal = () => {
        modalElement.classList.remove("hide");
        fadeElement.classList.remove("hide");
    };

    const closeModal = () => {
        modalElement.classList.add("hide");
        fadeElement.classList.add("hide");
    };

    openModalButton.addEventListener("click", openModal);
    closeModalButton.addEventListener("click", closeModal);
    fadeElement.addEventListener("click", closeModal);
}

document.addEventListener("DOMContentLoaded", function () {
    modalpergunta();
});
