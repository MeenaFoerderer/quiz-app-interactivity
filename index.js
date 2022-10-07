const cardBookmarkBtn = document.querySelector('[data-js="card__bookmark"]');

cardBookmarkBtn.addEventListener("click", function (event) {
  event.target.classList.toggle("bookmark--active");
});
