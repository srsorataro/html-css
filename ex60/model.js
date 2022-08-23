const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");
const bann = document.querySelector(".banner");
const overL = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", function () {
modal.classList.add("active");
bann.classList.add("active");
overL.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("active");
  bann.classList.remove("active");
  overL.classList.remove("active");
});