const buyBtns = document.querySelectorAll(".js-buy-ticket");
const closeBtn = document.querySelector(".js-close-btn");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");

for (const buyBtn of buyBtns) {
  buyBtn.onclick = () => {
    modal.style.display = "flex";
  };
}

closeBtn.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = () => {
  modal.style.display = "none";
};

modalContainer.onclick = (event) => {
  event.stopPropagation();
};
