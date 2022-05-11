const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const backDrop = document.querySelector(".js-backdrop");
const closeModalBtn = document.querySelector(".close-modal");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
backDrop.addEventListener("click", handleBackDropClick);

function openModal() {
  document.body.classList.add("show-modal");
}

function closeModal() {
  document.body.classList.remove("show-modal");
}

function handleBackDropClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closeModal();
}
