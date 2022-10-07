const cardBookmarkBtn = document.querySelector('[data-js="card__bookmark"]');
const cardAnswer = document.querySelector('[data-js="card__answer"]');
const showAnswerBtn = document.querySelector('[data-js="card__button-answer"]');

//create toggle function on bookmark icon in first card

cardBookmarkBtn.addEventListener("click", (event) => {
  event.target.classList.toggle("bookmark--active");
});

//activate answer button
showAnswerBtn.addEventListener("click", () => {
  if (showAnswerBtn.textContent === "Show answer") {
    cardAnswer.classList.add("card__answer--active");
    showAnswerBtn.textContent = "Hide answer";
  } else {
    cardAnswer.classList.remove("card__answer--active");
    showAnswerBtn.textContent = "Show answer";
  }
});
