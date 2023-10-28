function setupModal() {
    const openModalButton = document.querySelector("#open-modal");
    const closeModalButton = document.querySelector("#close-modal-criar-post");
    const modalElement = document.querySelector("#modal-criar-post");
    const fadeElement = document.querySelector("#fade-atras-cp");

    modalElement.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    const toggleModal = () => {
        modalElement.classList.toggle("hidden");
        fadeElement.classList.toggle("hidden");
    };

    [openModalButton, closeModalButton, fadeElement].forEach((el) => {
        el.addEventListener("click", () => toggleModal());
    });
}

document.addEventListener("DOMContentLoaded", function () {
    setupModal();
});