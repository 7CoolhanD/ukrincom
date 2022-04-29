const hideBlogBtn = document.querySelector(".ourBlog__button");
const contentForHide = document.querySelectorAll(".ourBlog__card");
console.log(contentForHide);
hideBlogBtn.addEventListener("click", () => {
  console.log(contentForHide.classList);
  if (contentForHide.classList.contains("hidden")) {
    hideBlogBtn.textContent = "Завантажити більше";
  } else {
    hideBlogBtn.textContent = "Зменшити";
  }
  contentForHide.classList.toggle("hidden");
});
