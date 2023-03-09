const openbtn = document.querySelector(".modal_open");
const closebtn = document.querySelector(".modal_close");
const container = document.querySelector(".modal_container");

openbtn.addEventListener("click", () => {
  container.style.display = "flex";
  openbtn.style.display = "none";
});

closebtn.addEventListener("click", () => {
  container.style.display = "none";
  openbtn.style.display = "block";
});
