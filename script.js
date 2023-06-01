const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";
const py = "py-4";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
    header.classList.remove(py);
  } else {
    header.classList.remove(toggleClass);
    header.classList.add(py);
  }
});